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

      {/* Overlay pour mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-gray-900 text-white flex flex-col w-64 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative transition-transform duration-300 z-50`}>
        
        {/* Logo + Bouton de fermeture sur mobile */}
        <div className="p-4 flex items-center justify-between bg-yellow-500 border-b border-gray-700">
          <span className="text-2xl font-bold tracking-wide">
            SMART<span className="text-gray-700">SUB</span>
          </span>

          {/* Bouton de fermeture sur mobile */}
          <button className="md:hidden text-gray-900" onClick={() => setIsOpen(false)}>
            <MdClose size={24} />
          </button>
        </div>

        {/* Navigation (flex-1 pour occuper l'espace disponible) */}
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

        {/* Déconnexion (mt-auto pour le placer en bas) */}
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

// Composant SidebarItem
const SidebarItem = ({ to, icon, label, isActive }) => (
  <li>
    <NavLink
      to={to}
      className={`flex items-center mx-5 p-3 rounded-lg transition ${
        isActive ? "bg-gray-700 text-yellow-400" : "hover:bg-gray-700"
      }`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </NavLink>
  </li>
);

export default Sidebar;
