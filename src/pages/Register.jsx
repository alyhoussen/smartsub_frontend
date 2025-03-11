import React from "react";
import AuthForm from "../components/AuthForm";

const Register = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Inscription</h2>
      <AuthForm type="register" />
    </div>
  );
};

export default Register;
