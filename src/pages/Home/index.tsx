import { useEffect, useState } from "react";
import { TUser } from "../../shared/type";
import "./style.css";
import { getManyUsers } from "../../api";
import { removeLocalStorage } from "../../utils";
import { useNavigate } from "react-router-dom";
import { ERoute } from "..";

export function Home() {
  const [userList, setUserList] = useState<TUser[]>([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStorage("accessToken");
    removeLocalStorage("refreshToken");
    navigate(ERoute.Login);
  };

  useEffect(() => {
    getManyUsers()
      .then((res) => {
        setUserList([...res]);
      })
      .catch(() => {
        alert("Error while fetching the users");
      });
  }, []);
  return (
    <div>
      <h1>Welcome home</h1>
      <button onClick={handleLogout}>Logout</button>

      <table id="customers">
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Creation Date</th>
        </tr>
        {userList.map(({ _id, username, created }) => (
          <tr key={_id}>
            <td>{_id}</td>
            <td>{username}</td>
            <td>{new Date(created).toISOString()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
