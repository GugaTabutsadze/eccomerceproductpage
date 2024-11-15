"use client"
import React, { useState } from 'react'

interface ImageProps {
    src: string;
    alt: string;
  }
  
  interface HeroSliderProps {
    images: ImageProps[];
    thumbnails: ImageProps[];
  }

  const Heroslider = ({images,thumbnails}: HeroSliderProps) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleImage = (index: number) => {
        setCurrentIndex(index)
    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };


  return (
    <div className='container flex flex-col items-center space-y-8 mt-8 md:mt-[120px] md:ml-[190px] md:items-start'>
        <div className='relative'>
            <img 
                 className='max-w-1/2  rounded-[15px] md:max-w-lg'
                 src={images[currentIndex].src}
                 alt={images[currentIndex].alt}
                 />
                  <div className='flex  md:hidden'>
                        <img className='flex items-center absolute cursor-pointer px-4 py-3
                             rounded-full top-[45%] left-[20px] bg-white'
                             src='/images/icon-previous.svg'
                             alt='icon-previous.svg'
                             onClick={handlePrevious}
                        />
                        <img 
                             className='flex items-center bg-white cursor-pointer 
                             rounded-full absolute px-4 py-3 top-[45%] right-[10px]'
                             src='/images/icon-next.svg'
                             alt='icon-next.svg'
                             onClick={handleNext}
                        />
                     </div>
        </div>
      <div className='hidden space-x-8 cursor-pointer md:flex'>
        {
            thumbnails.map((item, index) => (
                <div key={index} onClick={() => handleImage(index)}>
                        <img 
                        className={`w-[105px] rounded-[10px] hover:opacity-[50%] ${
                          index === currentIndex
                            ? 'border-2 border-orange bg-transparent opacity-[30%]'
                            : ''
                        }`}
                        src={item.src}
                        alt={item.alt}
                       />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Heroslider
