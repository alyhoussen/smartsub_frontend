import React, { useState } from "react";
import AbonnementCard from "./AbonnementCard";
import abonnementsMock from "../data/abonnementsMock";

const AbonnementList = () => {
  const [abonnements, setAbonnements] = useState(abonnementsMock);

  const handleDelete = (id) => {
    setAbonnements(abonnements.filter(a => a.id !== id));
  };

  const handleEdit = (abonnement) => {
    alert("Modifier : " + abonnement.nom);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {abonnements.map(a => (
        <AbonnementCard key={a.id} abonnement={a} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default AbonnementList;
