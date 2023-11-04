import axios from "../setup/axios";

export const getAllIngre = async () => {
  try {
    const data = await axios.get("/api/ingredient/");
    return data;
  } catch (error) {
    return error.response.data;
  }
};
