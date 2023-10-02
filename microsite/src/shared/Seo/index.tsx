import React, { FC } from 'react'
import {Helmet} from "react-helmet";
interface props{
    content:string;
    title:string;
}
const Seo:FC<props> = ({content,title}) => {
  return (
    <Helmet>
    <meta name="description" content={content} />
    <title>{title}</title>
  </Helmet>
  )
}

export default Seo