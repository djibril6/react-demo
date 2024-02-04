import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ERoute, ProtectedPages } from "../pages";
import { getFromLocalStorage } from "../utils";

export const PageContainer: React.FC = () => {
  const currentPage = window.location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    // redirect to auth if no access token for protected pages
    if (
      !getFromLocalStorage("accessToken") &&
      ProtectedPages.find((p) => p.path === currentPage)
    ) {
      navigate(ERoute.Login);
    }
  });

  return (
    <>
      <Outlet />
    </>
  );
};
