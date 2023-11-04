import { userListData } from "../api/callApi";
import axios from "../setup/axios";

export const getUserList = async () => {
  try {
    const data = await userListData();
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserByID = async (id) => {
  try {
    const data = await axios.get(`/api/user/get/${id}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const data = await axios.get(`/api/user/get/email/`, { email });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserWithoutStaff = async () => {
  try {
    const data = await axios.get("/api/user/nostaff");
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const insertUser = async (email, password, isAdmin, staffId) => {
  try {
    let data = await axios.post(`/api/user/`, {
      email,
      password,
      isAdmin,
      staffId,
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteUserAccount = async (id) => {
  try {
    const data = await axios.delete(`/api/user/${id}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
