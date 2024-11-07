import React, { useState } from 'react';
import { TextInput, Button, Container, Title, Alert } from '@mantine/core';
import { registerUser } from '../services/Api';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async () => {
        try {
            const response = await registerUser(name, role);
            alert('User registered successfully!');
            navigate(`/profile/${response.userAddress}`);
        } catch (error) {
            setError('Registration failed. Try again.');
        }
    };

    return (
        <Container>
            <Title>Register</Title>
            {error && <Alert color="red">{error}</Alert>}
            <TextInput label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <TextInput label="Role" value={role} onChange={(e) => setRole(e.target.value)} />
            <Button onClick={handleRegister} fullWidth mt="md">
                Register
            </Button>
        </Container>
    );
};

export default RegisterPage;
