import axios from "axios";
import { HOME_PAGE_SLIDE_ONE, SLIDE_TWO } from "../../../../../services/client/endpoints";
import { PageDataModel } from "./model";

const getSlideTwoData = async (): Promise<PageDataModel | null> => {
    try {
        const response = await axios.get(SLIDE_TWO);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
  };
  const SlideTwoService = {
    getSlideTwoData
  };
  export { SlideTwoService };