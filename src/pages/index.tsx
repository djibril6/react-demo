import { Home } from "./Home";
import { Login } from "./login";

export enum ERoute {
  Home = "/",
  Login = "/login",
}

export const ProtectedPages = [
  {
    path: ERoute.Home,
    element: <Home />,
  },
  {
    path: "*",
    element: <div>error</div>,
  },
];

export const freePages = [
  {
    path: ERoute.Login,
    element: <Login />,
  },
];

const Pages = ProtectedPages.concat(freePages);

export default Pages;
