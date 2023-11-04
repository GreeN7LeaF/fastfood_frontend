import axios from "../setup/axios";

export const getPositionList = async () => {
  try {
    const data = await axios.get("/api/position/list");
    return data;
  } catch (error) {
    return error.message;
  }
};
