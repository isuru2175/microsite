import React, { FC } from 'react'
interface props{
    classText:string;
    textValue?:string;
}
const ParagraphText:FC<props> = ({classText,textValue}) => {
  return (
    <p className={classText?classText:""}>
    {textValue}
  </p>
  )
}

export default ParagraphText