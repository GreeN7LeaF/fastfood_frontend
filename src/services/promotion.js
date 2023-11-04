import { deletePromotion } from "../api/callApi";
import axios from "../setup/axios";

const getAllPromotion = () => {
  return axios.get(`/api/promotion/get`);
};


const removePromotion = async (id) => {
    try {
        let data = await deletePromotion(id) ;
        return data ;
    } catch (error) {
        console.log(error);
    }
};
 

const InsertPromotion = (name, price, status, dateStart, dateExp) => {
  return axios.post(`api/promotion/create`, {
    name,
    price,
    status,
    dateStart,
    dateExp,
  });
};

export { getAllPromotion, InsertPromotion, removePromotion };

