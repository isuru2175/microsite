import React, { FC } from 'react'
interface props{
    title:string
}
const TitleText:FC<props> = ({title}) => {
  return (
    <h1 className="title-text" dangerouslySetInnerHTML={{ __html: title }}>
  </h1>
  )
}

export default TitleText