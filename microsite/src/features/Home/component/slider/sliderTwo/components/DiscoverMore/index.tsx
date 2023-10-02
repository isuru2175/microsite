import React, { FC } from 'react'
interface props{
    text:string;
    classText:string;
}
const DiscoverMore:FC<props> = ({text,classText}) => {
  return (
    <a href="/" className={classText}>{text}</a>
  )
}

export default DiscoverMore