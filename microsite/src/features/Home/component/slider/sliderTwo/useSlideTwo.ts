import { useEffect, useState } from "react";
import { SlideTwoService } from "./services";
import { PageDataModel } from "./model";

const useSlideTwo = (): [PageDataModel] => {
const initialData:PageDataModel={
    title: "",
    linkText:"",
    paragraphText: "",
    backGroundImage: "",
    CarouselSlides: []

}
    const [slideTwoData, setSlideTwoData] = useState<PageDataModel>(initialData);
    const getSliderTwoData= async ()=>{
        try {
            const res =
              await SlideTwoService.getSlideTwoData();
            if (res) {
                setSlideTwoData(res)
            }
          } catch {
            setSlideTwoData(initialData)
          }
    }
    useEffect(() => {
        getSliderTwoData();
    }, []);
    return [slideTwoData];
  };
  export default useSlideTwo;