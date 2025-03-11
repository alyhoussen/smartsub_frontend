import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiSettings, FiBell, FiLogOut, FiCreditCard } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col md:w-1/4">
      {/* Logo Smartsub */}
      <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
        Smart<span className="text-blue-400">Sub</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        <ul>
          <SidebarItem to="/" icon={<FiHome />} label="Accueil" />
          <SidebarItem to="/manage" icon={<FiCreditCard />} label="Abonnement" />
          <SidebarItem to="/notifications" icon={<FiBell />} label="Notifications" />
          <SidebarItem to="/settings" icon={<FiSettings />} label="Paramètres" />
          
        </ul>
      </nav>

      {/* Déconnexion */}
      <div className="p-4 border-t border-gray-700">
        <NavLink
          to="/logout"
          className="flex items-center p-3 text-red-400 hover:bg-red-600 hover:text-white rounded-lg"
        >
          <FiLogOut className="mr-2" />
          Déconnexion
        </NavLink>
      </div>
    </aside>
  );
};

// Composant pour un élément de la sidebar
const SidebarItem = ({ to, icon, label }) => (
  <li>
    <NavLink
      to={to}
      className={`flex items-center mx-2 p-3 hover:bg-gray-700 rounded-lg transition `}
      activeClassName="bg-gray-700" // S'applique quand l'onglet est actif
    >
      {icon}
      <span className="ml-3">{label}</span>
    </NavLink>
  </li>
);

export default Sidebar;