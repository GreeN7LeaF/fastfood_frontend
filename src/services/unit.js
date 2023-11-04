import axios from "../setup/axios";

export const getUnitList = async () => {
  try {
    const data = await axios.get("/api/unit");
    return data;
  } catch (error) {
    return error.response.data;
  }
};
