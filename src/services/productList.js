import axios from "../setup/axios";

const getAllProduct = () => {
    return axios.get(`/api/food/`)
};

export { getAllProduct};