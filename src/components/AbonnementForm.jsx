import React, { useState } from "react";

const AbonnementForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    nom: initialData.nom || "",
    image: initialData.image || "",
    prix: initialData.prix || "",
    frequence: initialData.frequence || "mensuel",
    date_expiration: initialData.date_expiration || "",
    statut: initialData.statut || "actif",
    description: initialData.description || ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 space-y-4">
      <input name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom du service" className="border p-2 w-full" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="URL de l'image" className="border p-2 w-full" />
      <input name="prix" type="number" value={formData.prix} onChange={handleChange} placeholder="Prix" className="border p-2 w-full" />
      <select name="frequence" value={formData.frequence} onChange={handleChange} className="border p-2 w-full">
        <option value="mensuel">Mensuel</option>
        <option value="annuel">Annuel</option>
      </select>
      <input name="date_expiration" type="date" value={formData.date_expiration} onChange={handleChange} className="border p-2 w-full" />
      <select name="statut" value={formData.statut} onChange={handleChange} className="border p-2 w-full">
        <option value="actif">Actif</option>
        <option value="suspendu">Suspendu</option>
      </select>
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Valider</button>
    </form>
  );
};

export default AbonnementForm;
