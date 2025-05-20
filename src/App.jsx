import React, { Children, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageSubscription from "./pages/ManageSubscription";
import SuggestionsPage from "./pages/SuggestionsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {


  const Layout = ({child})=>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      fetch("http://localhost:8080/api/auth/me", {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch(() => navigate("/login"));
    }, [navigate]);

    const handleLogout = async () => {
      await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      navigate("/login");
    };

    return (
      <div className="flex min-h-screen">
        {/* Sidebar fixe */}
        <Sidebar />
        <div className="flex-1 flex flex-col md:ml-64">
          {/* Navbar en haut */}
          <Navbar />
          {/* Contenu des pages */}
          <main className="p-4 flex-1 bg-gray-100">
            {child}
          </main>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout child={<Dashboard />} />} />
        <Route path="/manage" element={<Layout child={<ManageSubscription />} />} />
        <Route path="/suggestions" element={<Layout child={<SuggestionsPage />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
