import React, { useState } from "react";
import usersMock from "../data/usersMock";

const AuthForm = ({ type }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "login") {
      const user = usersMock.find(u => u.email === credentials.email && u.password === credentials.password);
      alert(user ? "Connexion réussie !" : "Échec de la connexion.");
    } else {
      alert("Inscription fictive réussie !");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 space-y-4 max-w-md mx-auto">
      <input type="email" placeholder="Email" className="border p-2 w-full" value={credentials.email} onChange={e => setCredentials({...credentials, email: e.target.value})} />
      <input type="password" placeholder="Mot de passe" className="border p-2 w-full" value={credentials.password} onChange={e => setCredentials({...credentials, password: e.target.value})} />
      <button className="bg-blue-500 text-white p-2 w-full rounded">
        {type === "login" ? "Se connecter" : "S'inscrire"}
      </button>
    </form>
  );
};

export default AuthForm;
