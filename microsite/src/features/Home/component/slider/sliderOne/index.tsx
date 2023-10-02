import React, { useEffect, useState } from "react";
import "./index.scss";
import TitleText from "./components/TitleText";
import ParagraphText from "../../../../../shared/ParagraphText";
import useSlideOne from "./useSlideOne";
import Seo from "../../../../../shared/Seo";
const SliderOne = () => {
  const [slideOneData] = useSlideOne();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const style = {
    opacity: opacity,
    transition: "opacity 1s ease-in-out",
    backgroundImage: `url(${slideOneData?.backGroundImage})`,
  };
  return (
    <div
      className="slider-wrapper-main background-container-slide-1 component-container"
      style={style}
    >
      <Seo title="Lorem Ipsum 1" content="Lorem Ipsum 1" />
      <TitleText title={slideOneData?.title} />
      <ParagraphText
        classText="p-description"
        textValue={slideOneData?.paragraphText}
      />
    </div>
  );
};

export default SliderOne;
