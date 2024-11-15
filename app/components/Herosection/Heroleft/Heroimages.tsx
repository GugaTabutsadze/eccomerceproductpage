import React from 'react'
import Heroslider from './Heroslider/Heroslider'

const Heroimages = () => {

    const images = [
        {
            src: "/images/image-product-1.jpg",
            alt: "image-product-1.jpg"
        },
        {
            src: "/images/image-product-2.jpg",
            alt: "image-product-2.jpg"
        },
        {
            src: "/images/image-product-3.jpg",
            alt: "image-product-3.jpg"
        },
        {
            src: "/images/image-product-4.jpg",
            alt: "image-product-4.jpg"
        },
    ]
    const thumbnails = [
        {
            src: "/images/image-product-1-thumbnail.jpg",
            alt: "image-product-1-thumbnail.jpg"
        },
        {
            src: "/images/image-product-2-thumbnail.jpg",
            alt: "image-product-2-thumbnail.jpg"
        },
        {
            src: "/images/image-product-3-thumbnail.jpg",
            alt: "image-product-3-thumbnail.jpg"
        },
        {
            src: "/images/image-product-4-thumbnail.jpg",
            alt: "image-product-4-thumbnail.jpg"
        },
    ]


  return (
    <div className='container flex'>
      <Heroslider images={images} thumbnails={thumbnails}/>
    </div>
  )
}

export default Heroimages
