export interface CarouselSlideModel {
    id: number;
    title: string;
    paragraphText: string;
  }
  export interface PageDataModel {
    title: string;
    linkText: string;
    paragraphText: string;
    backGroundImage: string;
    CarouselSlides: CarouselSlideModel[];
  }