import React from "react";

const SuggestionCard = ({ name, logo, price, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition duration-300 transform hover:scale-105">
      {/* Image/logo arrondi avec un fond grisé */}
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden mb-6">
        <img src={logo} alt={name} className="w-20 h-20 object-contain" />
      </div>

      {/* Nom de l'abonnement */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{name}</h3>

      {/* Description de l'abonnement */}
      <p className="text-sm text-gray-600 mb-5">{description}</p>

      {/* Section prix et CTA dans une ligne */}
      <div className="flex justify-between items-center w-full">
        <span className="text-xl font-semibold text-blue-600">{price}€ / mois</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Voir l'offre
        </a>
      </div>
    </div>
  );
};

export default SuggestionCard;
