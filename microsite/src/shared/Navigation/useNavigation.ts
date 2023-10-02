import { useEffect, useState } from "react";
import { NavigationModel } from "./model";
import { NavigationService } from "./services";

const useNavigation = (): [NavigationModel] => {
const initialData:NavigationModel={
    logo:"",
    logoALt:"",
}
    const [navigation, setNavigation] = useState<NavigationModel>(initialData);
    const getSliderOneData= async ()=>{
        try {
            const res =
              await NavigationService.getNavigationData();
            if (res) {
                setNavigation(res)
            }
          } catch {
            setNavigation(initialData)
          }
    }
    useEffect(() => {
        getSliderOneData();
    }, []);
    return [navigation];
  };
  export default useNavigation;