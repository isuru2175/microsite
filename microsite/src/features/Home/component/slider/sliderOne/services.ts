import axios from "axios";
import { SlideOneModel } from "./model";
import { HOME_PAGE_SLIDE_ONE } from "../../../../../services/client/endpoints";

const getSlideOneData = async (): Promise<SlideOneModel | null> => {
    try {
        const response = await axios.get(HOME_PAGE_SLIDE_ONE);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
  };
  const SlideOneService = {
    getSlideOneData
  };
  export { SlideOneService };