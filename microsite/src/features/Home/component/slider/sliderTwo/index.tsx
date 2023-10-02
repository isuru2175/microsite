import React, { useEffect, useMemo, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./index.scss";
import SliderTitle from "./components/SliderTitle";
import useSlideTwo from "./useSlideTwo";
import { CarouselSlideModel } from "./model";
import CarouselSlide from "./components/CarouselSlide";
import DiscoverMore from "./components/DiscoverMore";
import Seo from "../../../../../shared/Seo";
const SliderTwo = () => {
  const [slideTwoData] = useSlideTwo();
  const CarouselSlidesComponents: any = useMemo(() => {
    return slideTwoData?.CarouselSlides?.map((d: CarouselSlideModel) => (
      <CarouselSlide title={d.title} textValue={d.paragraphText} key={d.id} />
    ));
  }, [slideTwoData]);
  const [opacity, setOpacity] = useState(0.6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 50);
    return () => clearTimeout(timer);
  }, []);
  const style = {
    opacity: opacity,
    transition: "opacity 1s ease-in-out",
    backgroundImage: `url(${slideTwoData?.backGroundImage})`,
    backGroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      className="slider-wrapper-main background-container-slide-2 component-container"
      style={style}
    >
      <Seo title="Lorem Ipsum 2" content="Lorem Ipsum 2" />
      <DiscoverMore text={slideTwoData?.linkText} classText="link-text" />
      <SliderTitle title={slideTwoData?.title} />
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={33.33}
          showIndicators={false}
        >
          {CarouselSlidesComponents}
          {/* style={{height:window.innerHeight-100}} */}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderTwo;
