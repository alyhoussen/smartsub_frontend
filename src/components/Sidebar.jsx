import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  MdDashboard, MdSubscriptions, MdNotificationsActive,
  MdSettings, MdOutlineLogout, MdLightbulbOutline, MdMenu, MdClose
} from "react-icons/md";

const sidebarItems = [
  { to: "/", icon: <MdDashboard />, label: "Dashboard" },
  { to: "/manage", icon: <MdSubscriptions />, label: "Abonnement" },
  { to: "/suggestions", icon: <MdLightbulbOutline />, label: "Suggestions" },
  { to: "/notifications", icon: <MdNotificationsActive />, label: "Notifications" },
  { to: "/settings", icon: <MdSettings />, label: "Paramètres" }
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton pour ouvrir la sidebar en mobile */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <MdMenu size={24} />
      </button>

      {/* Overlay avec effet de flou (visible quand isOpen est true) */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar avec animation améliorée */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white flex flex-col w-64 shadow-lg
          transition-all duration-300 ease-in-out z-50 transform ${
            isOpen ? "translate-x-0 scale-100 opacity-100" : "-translate-x-full scale-90 opacity-0"
          } md:translate-x-0 md:opacity-100 md:scale-100 md:relative`}
      >
        {/* Logo + Bouton de fermeture sur mobile */}
        <div className="p-4 flex items-center justify-between bg-yellow-500 border-b border-gray-700">
          <span className="text-2xl font-bold tracking-wide">
            SMART<span className="text-gray-700">SUB</span>
          </span>
          <button className="md:hidden text-gray-900" onClick={() => setIsOpen(false)}>
            <MdClose size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-4">
          <ul>
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                isActive={location.pathname === item.to}
              />
            ))}
          </ul>
        </nav>

        {/* Déconnexion */}
        <div className="p-4 border-t border-gray-700 mt-auto">
          <NavLink
            to="/logout"
            className="flex items-center p-3 text-red-400 hover:bg-red-600 hover:text-white rounded-lg"
          >
            <MdOutlineLogout className="mr-2" />
            Déconnexion
          </NavLink>
        </div>
      </aside>
    </>
  );
};

// Composant SidebarItem avec amélioration de l’état actif
const SidebarItem = ({ to, icon, label, isActive }) => (
  <li>
    <NavLink
      to={to}
      className={`flex items-center mx-5 p-3 rounded-lg transition relative group ${
        isActive ? "bg-gray-700 text-yellow-400 border-l-4 border-yellow-400" : "hover:bg-gray-700"
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
      {isActive && <div className="absolute left-0 w-1 h-full bg-yellow-400"></div>}
    </NavLink>
  </li>
);

export default Sidebar;
