import React, { Children } from "react";

function NavButton({ children, isActive = false }) {
  return (
    <div
      className={`p-1 bg-white/50 rounded-xl drop-shadow-sm hover:drop-shadow-lg hover:scale-105 ${
        isActive ? "text-blue-500" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default NavButton;
