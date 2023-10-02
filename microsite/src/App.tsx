import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./shared/Navigation";
import SliderOne from "./features/Home/component/slider/sliderOne";
import SliderTwo from "./features/Home/component/slider/sliderTwo";
import SideNavigation from "./shared/SideNavigation";
import Footer from "./shared/Footer";
const pageNav=[{
  key:0,
  page:<SliderOne />
},{
  key:1,
  page:<SliderTwo />
}]
function App() {
  const [pageSelector,setPageSelector]=useState<number>(0);
  return (
    <div className="App">
      <Navigation />
     { pageNav[pageSelector].page}
      <SideNavigation setPageSelector={setPageSelector} pageSelector={pageSelector}/>
      <Footer/>
    </div>
  );
}

export default App;
