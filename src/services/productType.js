import axios from "../setup/axios";

const getAllProductType = () => {
    return axios.get(`/api/foodtype`)
};

export { getAllProductType};