import React, { Dispatch, FC, SetStateAction } from 'react'
interface props{
    classText:string;
    setPageSelector:Dispatch<SetStateAction<number>>;
    value:number;

}
const SideButton:FC<props> = ({classText,setPageSelector,value}) => {
  return (
    <div className={classText} onClick={()=>setPageSelector(value)}></div>
  )
}

export default SideButton