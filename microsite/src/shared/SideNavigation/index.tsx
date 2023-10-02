import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import "./index.scss";
import SideButton from "./components/SideButton";
import DownArrowSvg from "../Image/svg/DownArrowSvg";
interface props {
  setPageSelector: Dispatch<SetStateAction<number>>;
  pageSelector: number;
}
const SideNavigation: FC<props> = ({ setPageSelector, pageSelector }) => {
  const handleScroll = (e: any) => {
    const scrollThreshold = 50;

    if (e.deltaY > scrollThreshold && pageSelector !== 1) {
      setPageSelector(1);
    } else {
      setPageSelector(0);
    }
  };
  useEffect(() => {
    const scrollThreshold = 50;

    const handleScroll = (event: WheelEvent) => {
      console.info(event.deltaY);

      if (event.deltaY > scrollThreshold && pageSelector !== 1) {
        setPageSelector(1);
      } else if (event.deltaY < -scrollThreshold && pageSelector !== 0) {
        setPageSelector(0);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [pageSelector]);
  return (
    <>
      <div className="side-btn" title="Go to top" onWheel={handleScroll}>
        <SideButton
          classText={`nav-tiles mb-1 ${pageSelector === 0 && "active"}`}
          setPageSelector={setPageSelector}
          value={0}
        />
        <SideButton
          classText={`nav-tiles ${pageSelector === 1 && "active"}`}
          setPageSelector={setPageSelector}
          value={1}
        />
      </div>
    </>
  );
};

export default SideNavigation;
