import { footypeHardApi } from "../api/tempAPI";
import { FoodTypeData } from "../api/callApi";

const getFoodTypeService = async () => {
  let data = [];
  try {
    data = await FoodTypeData();
    return data;
  } catch (error) {
    return FoodTypeDT;
  }
};

export { getFoodTypeService };
