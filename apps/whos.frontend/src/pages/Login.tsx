import React, { useState } from "react";
import { loginUser } from "../services/Api";
import { useNavigate } from "react-router-dom";
import * as Form from "@radix-ui/react-form";
import PageFrame from "../components/Page.frame";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event) => {
    const { email, password } = Object.fromEntries(new FormData(event.currentTarget));
    console.log(event, email, password);
    try {
      const response = await loginUser(email as string, password as string);
      alert("User signup successfully!");
      navigate(`/profile/${response.userAddress}`);
    } catch (error) {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <PageFrame>
      <div>
        <h1>Login</h1>
        <div>
          <Form.Root
            onSubmit={(event) => handleLogin(event)}
          >
            <Form.Field name="email">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Form.Label>Email</Form.Label>
                <Form.Message  match="valueMissing">
                  Please enter your email
                </Form.Message>
                <Form.Message  match="typeMismatch">
                  Please provide a valid email
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input  type="email" required />
              </Form.Control>
            </Form.Field>
            <Form.Field className="FormField" name="password">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Form.Label >Password</Form.Label>
                <Form.Message  match="valueMissing">
                  Please enter a password
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input  type="password" required />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <button  style={{ marginTop: 10 }}>
                Login
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
        <ConnectButton />
      </div>
    </PageFrame>
  );
};

export default LoginPage;
