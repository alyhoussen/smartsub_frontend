import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, password: password }),
    });
    if (response.message) {
      alert("Inscription réussie !");
      localStorage.setItem("user", JSON.stringify({email: email, password: password}));
      navigate("/");
    } else {
      alert(response.error);
    }
  };

  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 pl-10 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Entrez votre nom"
              />
              <FaUserAlt className="absolute left-3 top-4 text-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 pl-10 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Entrez votre email"
              />
              <FaEnvelope className="absolute left-3 top-4 text-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 pl-10 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Entrez votre mot de passe"
              />
              <FaLock className="absolute left-3 top-4 text-gray-500" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          >
            Créer un compte
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Vous avez déjà un compte ?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
