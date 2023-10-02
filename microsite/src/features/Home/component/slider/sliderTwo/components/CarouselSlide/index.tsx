import React, { FC } from "react";
import CarouselTitle from "../CarouselTitle";
import ParagraphText from "../../../../../../../shared/ParagraphText";
interface props{
    title:string;
    textValue:string;
}
const CarouselSlide:FC<props> = ({title,textValue}) => {
  return (
    <div>
      <article className="carousel-slide">
        <CarouselTitle title={title} />
        <ParagraphText
          classText="carousel-text"
          textValue={textValue}
        />
      </article>
    </div>
  );
};

export default CarouselSlide;
