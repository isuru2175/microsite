import React, { FC } from 'react'
interface props{
url:string;
alt:string;
}
const Image:FC<props> = ({url,alt}) => {
  return (
    <img
        src={url}
        alt={alt}
      />
  )
}

export default Image