import React, { useEffect, useState } from 'react';
import { Container, Text, Title } from '@mantine/core';
import { getUser } from '../services/Api';
import QRCodeComponent from '../components/QR';
import { useParams } from "react-router-dom";

const ProfilePage: React.FC = () => {
    const { userAddress } = useParams();
    const [userInfo, setUserInfo] = useState<{ name: string; role: string } | null>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const data = await getUser(userAddress as string);
                setUserInfo(data);
            } catch (error) {
                alert('Failed to fetch user info.');
            }
        };
        fetchUserInfo();
    }, [userAddress]);

    return (
        <Container>
            <Title>User Profile</Title>
            {userInfo ? (
                <>
                    <Text>Name: {userInfo.name}</Text>
                    <Text>Role: {userInfo.role}</Text>
                    <QRCodeComponent value={userAddress as string} />
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </Container>
    );
};

export default ProfilePage;
