import React from "react";
import { FiUser } from "react-icons/fi";
import Notification from "./Notification";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <h1 className="text-xl font-bold text-gray-800">Smartsub Dashboard</h1>
      <div className="flex items-center space-x-4">
        {/* Rappel de notifications dans la Navbar */}
        <Notification />
        {/* Icône utilisateur */}
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
          <FiUser size={24} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;