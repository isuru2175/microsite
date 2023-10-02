import { useEffect, useState } from "react";
import { FooterModel } from "./model";
import { FooterService } from "./services";

const useFooter = (): [FooterModel] => {
const initialData:FooterModel={
    title:"",
}
    const [footerData, setFooterData] = useState<FooterModel>(initialData);
    const getFooterData= async ()=>{
        try {
            const res =
              await FooterService.getFooterData();
            if (res) {
              setFooterData(res)
            }
          } catch {
            setFooterData(initialData)
          }
    }
    useEffect(() => {
        getFooterData();
    }, []);
    return [footerData];
  };
  export default useFooter;