import React from "react";
import AbonnementList from "../components/AbonnementList";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Statistiques simplifiées */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-blue-500 text-2xl font-bold">2</h3>
          <p className="text-gray-800">Abonnements</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-green-500 text-2xl font-bold">2</h3>
          <p className="text-gray-800">Actifs</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-red-500 text-2xl font-bold">0</h3>
          <p className="text-gray-800">Suspendus</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="text-yellow-500 text-2xl font-bold">22.98€</h3>
          <p className="text-gray-800">Coût mensuel</p>
        </div>
      </div>
      {/* Liste des abonnements */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Liste des Abonnements</h2>
        <AbonnementList />
      </div>
    </div>
  );
};

export default Dashboard;
