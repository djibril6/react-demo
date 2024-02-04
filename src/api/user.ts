import axios from "axios";
import { getFromLocalStorage } from "../utils";
import { TUser } from "../shared/type";

export const getManyUsers = async () => {
  const token = getFromLocalStorage("accessToken");

  //todo: later we can implement a logic to check if the refresh token is not expired
  // then we can renew without login out the user
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data) {
      return res.data as TUser[];
    }
  } catch (error) {}

  throw new Error("Login failed");
};
