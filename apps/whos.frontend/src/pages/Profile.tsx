import React, { useEffect, useState } from "react";
import { getUser } from "../services/Api";
import QRCodeComponent from "../components/QR";
import UserPassCard from "../components/UserPassCard";
import { useParams } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const { userAddress } = useParams();
  const [userInfo, setUserInfo] = useState<{
    name: string;
    role: string;
  } | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUser(userAddress as string);
        setUserInfo(data);
      } catch (error) {
        alert("Failed to fetch user info.");
      }
    };
    fetchUserInfo();
  }, [userAddress]);

  return (
    <div>
      <h1>User Profile</h1>
      {userInfo ? (
        <>
          <p>Name: {userInfo.name}</p>
          <p>Role: {userInfo.role}</p>
          <QRCodeComponent value={userAddress as string} />
        </>
      ) : (
        <>
          <p>Loading...</p>
          <UserPassCard userInfo={{ name: "John Doe", role: "User" }} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
