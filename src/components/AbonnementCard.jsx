import React from "react";

const AbonnementCard = ({ abonnement, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow rounded p-4 transition hover:shadow-lg">
      <img src={abonnement.image} alt={abonnement.nom} className="w-full h-32 object-cover rounded" />
      <h3 className="mt-2 text-lg font-bold text-gray-800">{abonnement.nom}</h3>
      <p className="text-sm text-gray-500">{abonnement.description}</p>
      <p className="mt-2 font-semibold">{abonnement.prix}€ / {abonnement.frequence}</p>
      <p className={`mt-1 inline-block px-2 py-1 text-white rounded ${abonnement.statut === "actif" ? "bg-green-500" : "bg-red-500"}`}>
        {abonnement.statut}
      </p>
      <div className="flex space-x-2 mt-4">
        <button onClick={() => onDelete(abonnement.id)} className="bg-red-500 text-white px-3 py-1 rounded">Supprimer</button>
        <button onClick={() => onEdit(abonnement)} className="bg-yellow-500 text-white px-3 py-1 rounded">Modifier</button>
      </div>
    </div>
  );
};

export default AbonnementCard;
