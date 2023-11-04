import axios from "../setup/axios";

//Promotion
export const deletePromotion = (id) => {
  return axios.delete(`/api/promotion/remove/${id}`);
};

// Supplier
export const deleteSupplier = (id) => {
  return axios.delete(`/api/supplier/remove/${id}`);
};

export const InsertSupplier = (name, contact, note) => {
  return axios.post(`/api/supplier/create`, { name, contact, note });
};

// staff

export const deleteStaff = (id) => {
  return axios.delete(`/api/staff/delete/${id}`);
};

// useraa
export const userListData = () => {
  return axios.get(`/api/user`);
};

export const createNewUser = (email, password, isAdmin) => {
  return axios.post(`/api/user`, {
    email,
    password,
    isAdmin,
  });
};

// Product
export const FoodData = () => {
  return axios.get(`api/food`);
};

export const FoodDelete = (id) => {
  return axios.delete(`api/food/delete/${id}`);
};

export const FoodTypeData = () => {
  return axios.get(`api/foodtype`);
};

export const FoodByTypeData = (id) => {
  return axios.get(`api/foodtype/${id}`);
};

// order

export const OrderData = () => {
  return axios.get("api/order");
};

export const OrderProcessingData = () => {
  return axios.get("api/order/unfinished");
};

export const OrderCompletedData = () => {
  return axios.get("api/order/finished");
};

export const getOrderById = (id) => {
  return axios.get(`api/order/${id}`);
};

export const updateOrderStatus = (id) => {
  return axios.put(`api/order/${id}`);
};

//shift

export const getShiftListData = () => {
  return axios.get(`api/shift`);
};

// insert

export const InsertFood = (name, price, image, type, recipe, status) => {
  return axios.post(`api/food`, {
    name,
    price,
    image,
    type,
    recipe,
    status,
  });
};

export const InsertFoodTyppe = (name) => {
  return axios.post(`api/foodtype`, { name });
};

export const InsertStaff = (name, dob, gender, startAt, position, address) => {
  return axios.post(`api/staff/create`, {
    name,
    dob,
    gender,
    startAt,
    position,
    address,
  });
};

/* export const InsertSupplier = (name, contact, note) => {
  return axios.post(`/api/supplier/create`, { name, contact, note });
}; */

export const AddNewOrderData = (orders) => {
  return axios.post("api/order", { ...orders });
};

export const getFoodById = (id) => {
  return axios.get(`/api/food/getId/${id}`);
};

export const updateFood = (id, rawData) => {
  return axios.put(`/api/food/update/${id}`, {
    ...rawData,
  });
};

export const updateFoodType = (id, name) => {
  return axios.put(`/api/foodtype/update`, {
    id,
    name,
  });
};

export const updateVendors = (id, rawData) => {
  return axios.put(`/api/supplier/edit/${id}`, {
    ...rawData,
  });
};

export const updatePromo = (id, status) => {
  return axios.put(`/api/promotion/edit`, {
    id,
    Status,
  });
};

export const deleteFoodSoft = (id) => {
  return axios.put(`/api/general/deleteSoft/${id}`);
};

export const deleteVendorSoft = (id) => {
  return axios.put(`/api/general/deleteVendor/${id}`);
};

export const checkOutOrder = (total) => {
  return axios.post(`/api/order/payment/${total}`);
};

export const getTimeOffList = () => {
  return axios.get(`/api/staff/timeOff/`);
};

export const InsertTimeOff = (timeStart, timeEnd, reason, idEm) => {
  return axios.post(`/api/staff/timeOff`, {
    timeStart,
    timeEnd,
    reason,
    idEm,
  });
};

export const getFeedBack = () => {
  return axios.get(`/api/staff/feedback`);
};

export const createFeedBack = (name, contact, content) => {
  return axios.post(`/api/staff/feedback/create`, {
    name,
    contact,
    content,
  });
};
