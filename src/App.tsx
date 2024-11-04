import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CardViewer } from "./pages/CardViewer";
import { AdminPanel } from "./pages/AdminPanel";
import { CardRequestProvider } from "./context/CardRequestContext";

function App() {
  return (
    <CardRequestProvider>
      <BrowserRouter basename="/kontur_business_card">
        <Routes>
          <Route path="/card/:id" element={<CardViewer />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/" element={<Navigate to="/card/1" replace />} />
        </Routes>
      </BrowserRouter>
    </CardRequestProvider>
  );
}

export default App;
