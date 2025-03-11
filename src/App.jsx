import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageSubscription from "./pages/ManageSubscription";
import SuggestionsPage from "./pages/SuggestionsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar fixe */}
        <Sidebar />
        <div className="flex-1 flex flex-col">
          {/* Navbar en haut */}
          <Navbar />
          {/* Contenu des pages */}
          <main className="p-4 flex-1 bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/manage" element={<ManageSubscription />} />
              <Route path="/suggestions" element={<SuggestionsPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
