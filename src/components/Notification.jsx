import React from "react";
import abonnementsMock from "../data/abonnementsMock";

const Notification = () => {
  const now = new Date();
  const expiringSoon = abonnementsMock.filter(ab => {
    const expDate = new Date(ab.date_expiration);
    const diffDays = (expDate - now) / (1000 * 60 * 60 * 24);
    return diffDays < 7 && ab.statut === "actif";
  });

  if (expiringSoon.length === 0) return null;
  return (
    <div className="bg-red-500 text-white px-3 py-1 rounded">
      {expiringSoon.length} abonnement(s) expirent bientôt !
    </div>
  );
};

export default Notification;
