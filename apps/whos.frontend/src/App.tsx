import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/Profile";
import AccessVerificationPage from "./pages/AccessVerification";
import "@mantine/core/styles.css";

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
