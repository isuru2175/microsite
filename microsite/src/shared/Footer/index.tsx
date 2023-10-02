import React, { FC } from 'react'
import DownArrowSvg from '../Image/svg/DownArrowSvg'
import ParagraphText from '../ParagraphText'
import useFooter from './useSlideOne';

const Footer:FC = () => {
    const [footerData]=useFooter();
  return (
    <div className="footer-copyright">
    <div className="chevron-down">
      <DownArrowSvg />
    </div>
    <ParagraphText textValue={footerData?.title} classText=''/>
  </div>
  )
}

export default Footer