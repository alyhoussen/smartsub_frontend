import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import AbonnementCard from "../components/AbonnementCard"; // Gardé intact
import SubscriptionModal from "../components/SubscriptionModal"; // Modal pour Ajouter/Modifier

const mockSubscriptions = [
  { id: 1, name: "Netflix", logo: "https://logo.clearbit.com/netflix.com", price: 15, status: "Actif" },
  { id: 2, name: "Spotify", logo: "https://logo.clearbit.com/spotify.com", price: 10, status: "Actif" },
  { id: 3, name: "Adobe", logo: "https://logo.clearbit.com/adobe.com", price: 30, status: "Inactif" },
];

const ManageSubscription = () => {
  const [subscriptions, setSubscriptions] = useState(mockSubscriptions);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (subscription = null) => {
    setSelectedSubscription(subscription);
    setIsModalOpen(true);
  };

  const handleSaveSubscription = (newData) => {
    if (selectedSubscription) {
      setSubscriptions((prev) =>
        prev.map((sub) => (sub.id === selectedSubscription.id ? { ...sub, ...newData } : sub))
      );
    } else {
      setSubscriptions((prev) => [...prev, { id: prev.length + 1, ...newData }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gérer les abonnements</h2>
        <button
          onClick={() => handleOpenModal()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <MdAdd className="mr-2" /> Ajouter
        </button>
      </div>

      {/* Liste des abonnements */}
      <div className="grid sm:grid-cols-2 gap-4">
        {subscriptions.map((sub) => (
          <AbonnementCard
            key={sub.id}
            {...sub}
            onModify={() => handleOpenModal(sub)}
            onSuspend={() =>
              setSubscriptions((prev) =>
                prev.map((s) =>
                  s.id === sub.id ? { ...s, status: s.status === "Actif" ? "Inactif" : "Actif" } : s
                )
              )
            }
            onCancel={() => setSubscriptions((prev) => prev.filter((s) => s.id !== sub.id))}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <SubscriptionModal
          subscription={selectedSubscription}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveSubscription}
        />
      )}
    </div>
  );
};

export default ManageSubscription;
