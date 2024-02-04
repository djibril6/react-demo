import axios from "axios";
import { removeLocalStorage } from "../utils";
import { AuthReturnType } from "../shared/type";

export const loginUser = async (username: string, password: string) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        username,
        password,
      }
    );
    if (res.data) {
      return res.data as AuthReturnType;
    }
  } catch (error) {}

  removeLocalStorage("accessToken");
  removeLocalStorage("refreshToken");

  throw new Error("Login failed");
};

export const registerUser = async (username: string, password: string) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/signin`!,
      {
        username,
        password,
      }
    );
    if (res.data) {
      return res.data as AuthReturnType;
    }
  } catch (error) {}

  removeLocalStorage("accessToken");
  removeLocalStorage("refreshToken");

  throw new Error("Login failed");
};
