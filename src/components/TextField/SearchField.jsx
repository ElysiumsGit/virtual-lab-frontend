import React from "react";
import { FaSearch } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const SearchField = ({ onchange }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile && (
        <div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white focus:outline-none"
              onChange={onchange}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="flex-grow mx-4 w-[500px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
              onChange={onchange}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchField;
