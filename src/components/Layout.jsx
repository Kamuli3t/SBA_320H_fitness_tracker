import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import NavButton from "./NavButton";

function Layout() {
  const location = useLocation();
  return (
    <div className="flex flex-row min-h-[80vh] bg-white/20 rounded-md backdrop-blur-lg shadow-lg gap-4">
      <div className="w-[10vw] flex flex-col justify-center gap-4 p-8">
        <Link to="/">
          <NavButton isActive={location.pathname.includes("workout")}>
            Workout List
          </NavButton>
        </Link>
        <Link to="/calender">
          <NavButton isActive={location.pathname.includes("calender")}>
            Calender
          </NavButton>
        </Link>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
