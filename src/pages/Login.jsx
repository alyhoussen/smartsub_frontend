import React from "react";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Connexion</h2>
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
