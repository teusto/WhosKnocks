import React, { useState } from "react";
import { loginUser } from "../services/Api";
import { useNavigate } from "react-router-dom";
import * as Form from "@radix-ui/react-form";
import PageFrame from "../components/Page.frame";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await loginUser(name, password);
      alert("User registered successfully!");
      navigate(`/profile/${response.userAddress}`);
    } catch (error) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <PageFrame>
      <Form.Root className="FormRoot">
        <Form.Field className="FormField" name="name">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="email" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="question">
			<div
				style={{
					display: "flex",
					alignItems: "baseline",
					justifyContent: "space-between",
				}}
			>
				<Form.Label className="FormLabel">Question</Form.Label>
				<Form.Message className="FormMessage" match="valueMissing">
					Please enter a question
				</Form.Message>
			</div>
			<Form.Control asChild>
				<textarea className="Textarea" required />
			</Form.Control>
		</Form.Field>
		<Form.Submit asChild>
			<button className="Button" style={{ marginTop: 10 }}>
				Post question
			</button>
		</Form.Submit>
      </Form.Root>
    </PageFrame>
  );
};

export default SignupPage;
