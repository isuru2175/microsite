import React, { FC } from 'react'
interface props{
    title:string;
}
const SliderTitle:FC<props> = ({title}) => {
  return (
    <h1 className="title-text mb-3">{title}</h1>
  )
}

export default SliderTitle