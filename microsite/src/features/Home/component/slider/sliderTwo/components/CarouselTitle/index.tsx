import React, { FC } from 'react'
interface props{
    title:string
}
const CarouselTitle:FC<props> = ({title}) => {
  return (
    <h4 className="panel-title">{title}</h4>
  )
}

export default CarouselTitle