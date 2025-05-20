import React, { useState } from "react";

const SubscriptionModal = ({ subscription, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    subscription || { name: "", logo: "", price: "", status: "Actif" }
  );

  const [errors, setErrors] = useState({});
  
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Le nom est requis";
    if (!formData.logo) newErrors.logo = "L'URL du logo est requise";
    if (!formData.price || formData.price <= 0) newErrors.price = "Le prix doit être un nombre positif";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#00000041] flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 sm:w-96 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          {subscription ? "Modifier l'abonnement" : "Ajouter un abonnement"}
        </h3>

        {/* Champs de saisie */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="Nom de l'abonnement"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="logo"
            placeholder="URL du logo"
            value={formData.logo}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.logo ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="URL du logo"
          />
          {errors.logo && <p className="text-red-500 text-sm mt-1">{errors.logo}</p>}
        </div>

        <div className="mb-4">
          <input
            type="number"
            name="price"
            placeholder="Prix (€)"
            value={formData.price}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.price ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="Prix de l'abonnement"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        {/* Menu déroulant amélioré (sans icône) */}
        <div className="relative w-full mb-6">
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            aria-label="Statut de l'abonnement"
          >
            <option value="Actif">Actif</option>
            <option value="Inactif">Inactif</option>
          </select>
        </div>

        {/* Boutons de confirmation et annulation */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300"
            aria-label="Annuler"
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300"
            aria-label="Enregistrer les modifications"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
