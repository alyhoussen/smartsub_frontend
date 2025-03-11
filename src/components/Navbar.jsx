import React, { useState } from "react";
import { FiSearch, FiBell, FiUser, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Barre de navigation principale */}
      <header className="bg-white shadow-md flex items-center justify-between px-6 py-3 relative">
        {/* Bouton menu pour mobile */}
        <button onClick={toggleSidebar} className="md:hidden p-2">
          <FiMenu size={24} />
        </button>

        {/* Barre de recherche (visible uniquement sur desktop) */}
        <div className={`hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-80 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 ${searchOpen ? 'z-10' : ''}`}>
          <FiSearch className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent outline-none ml-2 w-full text-gray-800"
          />
        </div>

        {/* Actions à droite */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Bouton pour afficher la recherche sur mobile */}
          <button onClick={() => setSearchOpen(true)} className="md:hidden p-2">
            <FiSearch size={22} />
          </button>

          {/* Icône Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <FiBell size={22} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* Profil utilisateur avec menu déroulant */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <FiUser size={22} className="text-gray-600" />
              </div>
              <FiChevronDown size={18} className="text-gray-600" />
            </button>

            {/* Menu déroulant */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Profil
                </a>
                <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Paramètres
                </a>
                <a href="/logout" className="block px-4 py-2 text-red-500 hover:bg-gray-100">
                  Déconnexion
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Barre de recherche en overlay sur mobile */}
      {searchOpen && (
        <div className="absolute top-0 left-0 right-0 bg-white shadow-md px-6 py-3 flex items-center transition-all duration-300 z-20">
          {/* Champ de recherche avec Material Design */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm flex-grow focus-within:ring-2 focus-within:ring-blue-500">
            <FiSearch className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-transparent outline-none ml-2 w-full text-gray-800"
              autoFocus
            />
          </div>
          {/* Bouton pour fermer la recherche */}
          <button onClick={() => setSearchOpen(false)} className="ml-2 p-2 text-gray-600">
            <FiX size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
