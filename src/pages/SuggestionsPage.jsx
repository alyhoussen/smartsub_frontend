import React from "react";
import { FaRegLightbulb } from "react-icons/fa";

const SuggestionsPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Suggestions</h2>
      <div className="bg-white shadow rounded p-4 text-center">
        <FaRegLightbulb className="text-4xl text-yellow-500 mx-auto" />
        <p className="mt-2 text-gray-600">Découvrez des alternatives moins chères ou gratuites.</p>
      </div>
    </div>
  );
};

export default SuggestionsPage;
