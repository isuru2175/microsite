import axios from "axios";
import { FOOTER } from "../../services/client/endpoints";
import { FooterModel } from "./model";

const getFooterData = async (): Promise<FooterModel | null> => {
    try {
        const response = await axios.get(FOOTER);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
  };
  const FooterService = {
    getFooterData
  };
  export { FooterService };