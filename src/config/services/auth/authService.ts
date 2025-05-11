import axios from 'axios';

interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<string> => {
  const response = await axios.post('http://localhost:3000/auth/login', credentials);
  return response.data.access_token;
};
