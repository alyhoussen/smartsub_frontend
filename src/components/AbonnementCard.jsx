import React, { useState, useEffect, useRef } from "react";
import { MdMoreVert, MdCheckCircle, MdCancel, MdEdit } from "react-icons/md";

const AbonnementCard = ({
  name,
  logo,
  price,
  status,
  onSuspend,
  onModify,
  onCancel,
}) => {
  const [isActionOpen, setIsActionOpen] = useState(false);
  const actionMenuRef = useRef(null); // Référence pour le menu déroulant
  const cardRef = useRef(null); // Référence pour la carte, utilisée pour les clics en dehors

  // Fermer le menu si l'utilisateur clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionMenuRef.current && !actionMenuRef.current.contains(event.target) &&
        cardRef.current && !cardRef.current.contains(event.target)
      ) {
        setIsActionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleActionClick = (action) => {
    if (action === "modify") {
      onModify();
    } else if (action === "cancel") {
      onCancel();
    }
    setIsActionOpen(false); // Fermer le menu après avoir cliqué sur une action
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between h-full"
    >
      {/* Logo et titre */}
      <div className="flex items-center mb-4">
        <img src={logo} alt={name} className="w-12 h-12 object-contain mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>

      {/* Prix */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold text-gray-700">{price}€</span>
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            status === "Actif" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => onSuspend()}
          className="flex items-center text-sm text-gray-600 hover:text-yellow-500"
        >
          <MdCheckCircle className="mr-1" /> {status === "Actif" ? "Suspendre" : "Réactiver"}
        </button>

        {/* Bouton de 3 points pour les autres actions */}
        <div className="relative">
          <button
            onClick={() => setIsActionOpen(!isActionOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <MdMoreVert />
          </button>

          {/* Menu d'actions supplémentaires */}
          {isActionOpen && (
            <div
              ref={actionMenuRef}
              className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 text-gray-700 z-20"
            >
              <button
                onClick={() => handleActionClick("modify")}
                className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
              >
                <MdEdit className="mr-2" /> Modifier
              </button>
              <button
                onClick={() => handleActionClick("cancel")}
                className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-red-500"
              >
                <MdCancel className="mr-2" /> Annuler
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AbonnementCard;
