import React, { useState } from "react";
import AbonnementForm from "../components/AbonnementForm";

const ManageSubscription = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (data) => {
    setMessage("Abonnement sauvegardé (mock) : " + JSON.stringify(data));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Gérer un abonnement</h2>
      <AbonnementForm onSubmit={handleSubmit} />
      {message && <div className="bg-green-500 text-white p-2 rounded">{message}</div>}
    </div>
  );
};

export default ManageSubscription;
