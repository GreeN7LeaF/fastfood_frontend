import axios from "../setup/axios";
import { getShiftListData } from "../api/callApi";

export const getShiftList = async () => {
  try {
    const data = await axios.get("api/shift");
    return data;
  } catch (error) {
    return error.response.data;
  }
};
