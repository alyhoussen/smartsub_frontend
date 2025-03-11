import React from "react";
import AbonnementCard from "./AbonnementCard";

const abonnements = [
  {
    id: 1,
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    price: 17.99,
    status: "Actif"
  },
  {
    id: 2,
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    price: 9.99,
    status: "Suspendu"
  },
  // Ajoute d'autres abonnements si besoin...
];

const AbonnementList = () => {
  // Pour la démo, on simule les actions via console.log
  const handleSuspend = (name) => {
    console.log("Suspend/Réactiver", name);
  };

  const handleModify = (name) => {
    console.log("Modifier", name);
  };

  const handleCancel = (name) => {
    console.log("Annuler", name);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {abonnements.map((abonnement) => (
        <AbonnementCard
          key={abonnement.id}
          name={abonnement.name}
          logo={abonnement.logo}
          price={abonnement.price}
          status={abonnement.status}
          onSuspend={() => handleSuspend(abonnement.name)}
          onModify={() => handleModify(abonnement.name)}
          onCancel={() => handleCancel(abonnement.name)}
        />
      ))}
    </div>
  );
};

export default AbonnementList;
