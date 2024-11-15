import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/Profile";
import AccessVerificationPage from "./pages/AccessVerification";
// I WILL REMOVE BOTH OF THESE LATER
import "@mantine/core/styles.css";
import "@radix-ui/themes/styles.css";


import { MantineProvider } from "@mantine/core";

const App: React.FC = () => (
  <MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/profile/:userAddress" element={<ProfilePage />} />
        <Route path="/verify" element={<AccessVerificationPage />} />
      </Routes>
    </BrowserRouter>
  </MantineProvider>
);

export default App;
