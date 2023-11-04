import axios from "../setup/axios";

export const Login = async (email, password) => {
  try {
    const data = await axios.post(`/api/auth/login`, { email, password });
    console.log(data);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
