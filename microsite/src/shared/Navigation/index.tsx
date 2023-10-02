import React from "react";
import './index.scss';
import Image from "../Image";
import useNavigation from "./useNavigation";
const Navigation = () => {
    const[navigation]=useNavigation();
  return (
    <div className="logo">
      <Image url={navigation?.logo} alt={navigation?.logoALt}/>
    </div>
  );
};

export default Navigation;
