import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import AccessVerificationPage from "./pages/AccessVerification";
// I WILL REMOVE BOTH OF THESE LATER
import "@mantine/core/styles.css";
import "@radix-ui/themes/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "WhosKnocksFrontend",
  projectId: import.meta.env.VITE_WALLET_PROJECT_ID,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const App: React.FC = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile/:userAddress" element={<ProfilePage />} />
            <Route path="/verify" element={<AccessVerificationPage />} />
          </Routes>
        </BrowserRouter>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;
