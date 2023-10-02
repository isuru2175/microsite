import { useEffect, useState } from "react";
import { SlideOneModel } from "./model";
import { SlideOneService } from "./services";

const useSlideOne = (): [SlideOneModel] => {
const initialData:SlideOneModel={
    title:"",
    paragraphText:"",
    backGroundImage:""

}
    const [slideOneData, setSlideOneData] = useState<SlideOneModel>(initialData);
    const getSliderOneData= async ()=>{
        try {
            const res =
              await SlideOneService.getSlideOneData();
            if (res) {
                setSlideOneData(res)
            }
          } catch {
            setSlideOneData(initialData)
          }
    }
    useEffect(() => {
        getSliderOneData();
    }, []);
    return [slideOneData];
  };
  export default useSlideOne;