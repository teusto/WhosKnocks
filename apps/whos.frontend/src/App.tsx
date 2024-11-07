import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';
import AccessVerificationPage from './pages/AccessVerification';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/profile/:userAddress" element={<ProfilePage />} />
            <Route path="/verify" element={<AccessVerificationPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
