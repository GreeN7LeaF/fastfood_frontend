import {
  OrderData,
  OrderProcessingData,
  OrderCompletedData,
  AddNewOrderData,
  getOrderById,
  updateOrderStatus,
} from "../api/callApi";
import { getFoodData } from "./foodServices";
import axios from "../setup/axios";

export const getAllOrder = async () => {
  let data = [];
  let food = await getFoodData();
  try {
    data = await OrderData();
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const addNewOrder = async (orders) => {
  try {
    return await axios.post("api/order", { ...orders });
  } catch (error) {
    console.log(error);
    return -2;
  }
};

export const getOrderProcessing = async () => {
  let data = [];
  try {
    data = await OrderProcessingData();
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getOrderCompleted = async () => {
  let data = [];
  try {
    data = await OrderCompletedData();
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getOrderByID = async (id) => {
  let data = [];
  try {
    data = await axios.get(`api/order/${id}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateOrderStatusService = async (id) => {
  let data = [];
  try {
    data = await updateOrderStatus(id);
    return data.DT;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteOrderByID = async (id) => {
  let data = [];
  try {
    data = await axios.delete(`/api/order/${id}`);
    return data.DT;
  } catch (error) {
    return error.response.data;
  }
};
