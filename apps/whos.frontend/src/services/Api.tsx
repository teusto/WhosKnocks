import axios from "axios";

const API_BASE_URL = "http://<YOUR_BACKEND_URL>:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

interface RegisterResponse {
  userAddress: string;
}

interface ProofResponse {
    proof: object;
    publicSignals: string[];
}

interface VerifyProofResponse {
    valid: boolean;
}

interface UserInfo {
    userAddress: string;
    name: string;
    role: string;
}

export const registerUser = async (name: string, role: string): Promise<RegisterResponse> => {
  const response = await api.post("/api/users", { name, role });
  return response.data;
};

export const getUser = async (userAddress: string): Promise<UserInfo> => {
  const response = await api.get(`/api/users/${userAddress}`);
  return response.data;
};

export const generateProof = async (userRoleHash: string, targetRoleHash: string): Promise<ProofResponse> => {
    const response = await api.post("/api/users/generate-proof", { userRoleHash, targetRoleHash });
    return response.data;
}

export const verifyProof = async (proof: object, publicSignals: string[]): Promise<VerifyProofResponse> => {
    const response = await api.post("/api/users/verify-proof", { proof, publicSignals });
    return response.data;
}

export const loginUser = async (email: string, password: string): Promise<UserInfo> => {
  const response = await api.post(`/auth/login`, { email, password });
  return response.data;
};