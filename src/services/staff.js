import axios from "../setup/axios";
import { deleteStaff } from "../api/callApi";

const getAllStaff = async () => {
  try {
    const data = axios.get(`/api/staff/list`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

const getStaffByUserId = async (userid) => {
  try {
    let data = await axios.get(`/api/staff/user/${userid}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllStaffWithNoUser = async () => {
  try {
    let data = await axios.get("/api/staff/nouser");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const removeStaff = async (id) => {
  try {
    let data = await deleteStaff(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateStaff = async (
  id,
  name,
  birth,
  gender,
  address,
  startAt,
  position
) => {
  try {
    let data = await axios.put(`api/staff/update/${id}`, {
      name,
      birth,
      gender,
      address,
      startAt,
      position,
    });
    if (data) {
      return {
        EM: data.EM,
        EC: data.EC,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const updateStaffUser = async (staffid, userid) => {
  try {
    let data = await axios.put(`/api/staff/user/update/${staffid}`, { userid });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllStaff,
  removeStaff,
  getStaffByUserId,
  updateStaff,
  getAllStaffWithNoUser,
  updateStaffUser,
};
