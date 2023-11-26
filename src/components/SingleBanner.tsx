import React from 'react'
import Image, { StaticImageData } from 'next/image'
import BannerText from './BannerText';

interface SingleBannerProps {
    imageSource: StaticImageData;
    imageAlt: string;
    bannerTextTitle: string;
}

const SingleBanner =({imageSource, imageAlt, bannerTextTitle}: SingleBannerProps) => {
    return (
        <div className="w-full h-full relative">
          <Image 
            src={imageSource}
            alt={imageAlt}
            className="w-full f-full relative"
            />

            <BannerText title={bannerTextTitle}/>
        </div>
    )
  }

export default SingleBanner