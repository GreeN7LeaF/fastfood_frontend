import axios from "../setup/axios";

export const getAllAssign = async () => {
  let data = [];
  try {
    data = await axios.get("api/calendar/assign/list");
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAssignByStaffID = async (id) => {
  let data = [];
  try {
    data = await axios.get(`api/calendar/assign/get/${id}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const insertAssign = async (item) => {
  let data = [];
  try {
    data = await axios.post("api/calendar/assign/add", item);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllCalendar = async () => {
  let data = [];
  try {
    data = await axios.get("/api/calendar/list");
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const insertCalendar = async (item) => {
  let data = [];
  try {
    data = await axios.post("api/calendar/add", item);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
