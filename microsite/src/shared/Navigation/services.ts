import axios from "axios";
import { NavigationModel } from "./model";
import { NAVIGATION } from "../../services/client/endpoints";


const getNavigationData = async (): Promise<NavigationModel | null> => {
    try {
        const response = await axios.get(NAVIGATION);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
  };
  const NavigationService = {
    getNavigationData
  };
  export { NavigationService };