import React, { useState } from 'react';
import { TextInput, Button, Container, Title, Alert } from '@mantine/core';
import { generateProof, verifyProof } from '../services/Api';

const AccessVerificationPage = () => {
    const [userRoleHash, setUserRoleHash] = useState<string>('');
    const [targetRoleHash, setTargetRoleHash] = useState<string>('');
    const [accessMessage, setAccessMessage] = useState<string>('');

    const handleVerification = async () => {
        try {
            const { proof, publicSignals } = await generateProof(userRoleHash, targetRoleHash);
            const verificationResult = await verifyProof(proof, publicSignals);

            setAccessMessage(
                verificationResult.valid ? 'Access Granted' : 'Access Denied'
            );
        } catch (error) {
            setAccessMessage('Verification failed. Try again.');
        }
    };

    return (
        <Container>
            <Title>Access Verification</Title>
            {accessMessage && <Alert>{accessMessage}</Alert>}
            <TextInput label="User Role Hash" value={userRoleHash} onChange={(e) => setUserRoleHash(e.target.value)} />
            <TextInput label="Target Role Hash" value={targetRoleHash} onChange={(e) => setTargetRoleHash(e.target.value)} />
            <Button onClick={handleVerification} fullWidth mt="md">
                Verify Access
            </Button>
        </Container>
    );
};

export default AccessVerificationPage;
