import React from "react";
import { useMediaQuery } from "react-responsive";
import { FiMenu } from "react-icons/fi";
import SearchField from "../TextField/SearchField";

const Header = ({ onMenuClick }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white">
      <div className="flex items-center gap-4">
        {isMobile && (
          <FiMenu onClick={onMenuClick}/>
        )}
        {!isMobile && (
          <h1 className="text-xl font-bold text-indigo-500 flex items-center">
            <span className="mr-1 text-2xl">🎓</span> VIRTUAL LAB SIMULATOR
          </h1> 
        )}

      </div>

      <div className="flex items-center gap-4 text-indigo-500">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          className={`rounded-full object-cover ${isMobile ? "w-6 h-6" : "w-8 h-8"}`}
        />
      </div>
    </header>
  );
};

export default Header;
