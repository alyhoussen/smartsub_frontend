import React from "react";
import { MdSubscriptions, MdCheckCircle, MdCancel, MdAttachMoney } from "react-icons/md";
import AbonnementList from "../components/AbonnementList";
import SuggestionList from "../components/SuggestionList";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Statistiques simplifiées */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Abonnements */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center justify-between">
          <div>
            <h3 className="text-blue-500 text-3xl font-bold">2</h3>
            <p className="text-gray-700">Abonnements</p>
          </div>
          <MdSubscriptions className="text-blue-500 text-4xl" />
        </div>

        {/* Actifs */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center justify-between">
          <div>
            <h3 className="text-green-500 text-3xl font-bold">2</h3>
            <p className="text-gray-700">Actifs</p>
          </div>
          <MdCheckCircle className="text-green-500 text-4xl" />
        </div>

        {/* Suspendus */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center justify-between">
          <div>
            <h3 className="text-red-500 text-3xl font-bold">0</h3>
            <p className="text-gray-700">Suspendus</p>
          </div>
          <MdCancel className="text-red-500 text-4xl" />
        </div>

        {/* Coût mensuel */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center justify-between">
          <div>
            <h3 className="text-yellow-500 text-3xl font-bold">22.98€</h3>
            <p className="text-gray-700">Coût mensuel</p>
          </div>
          <MdAttachMoney className="text-yellow-500 text-4xl" />
        </div>
      </div>

      {/* Liste des abonnements */}
      <div className="rounded-lg pt-3">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Liste des Abonnements</h2>
        <AbonnementList />
      </div>

      {/* Section Suggestions d'Abonnement */}
      <SuggestionList />
    </div>
  );
};

export default Dashboard;
