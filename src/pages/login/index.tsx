import { useState } from "react";
import { Button, Input } from "../../components";
import { loginUser, registerUser } from "../../api";
import { setToLocalStorage } from "../../utils";
import { useNavigate } from "react-router-dom";
import { ERoute } from "..";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      alert("One of the field is missing!");
      return;
    }
    try {
      const res = await loginUser(username, password);
      setToLocalStorage("accessToken", res.tokens.access.token);
      setToLocalStorage("refreshToken", res.tokens.refresh.token);
      navigate(ERoute.Home);
    } catch (error) {
      alert("Login or password incorrect");
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      alert("One of the field is missing!");
      return;
    }
    try {
      const res = await registerUser(username, password);
      setToLocalStorage("accessToken", res.tokens.access.token);
      setToLocalStorage("refreshToken", res.tokens.refresh.token);
      navigate(ERoute.Home);
    } catch (error) {
      alert("An error occured!");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          style={{ height: 35 }}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{ height: 35 }}
        />

        <Button text="Login" />
      </form>

      <h1>Create and account</h1>

      <form onSubmit={handleRegisterSubmit}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          style={{ height: 35 }}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{ height: 35 }}
        />

        <Button text="Create your account" />
      </form>
    </div>
  );
}
