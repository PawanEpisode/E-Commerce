"use client";
// it is using third party library and the application of ours
// is server side , so we have to use "use client" here
import Slider from "react-slick";
import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import SingleBanner from "./SingleBanner";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="arrowButton left-5">
        <PiCaretLeftLight />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="arrowButton right-5">
        <PiCaretRightLight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const bannerArray = [
    {
      imageSource: bannerone,
      imageAlt: "bannerone",
      bannerTextTitle: "Outward Picks",
    },
    {
      imageSource: bannertwo,
      imageAlt: "bannertwo",
      bannerTextTitle: "Seasonal Offers",
    },
    {
      imageSource: bannerthree,
      imageAlt: "bannerthree",
      bannerTextTitle: "Best For Men",
    },
  ];
  return (
    <div className="relative">
      <Slider {...settings}>
        {/* We can create an Array containing banner image details */}
        {/* use .map method to loop over the array and use SingleBanner Component to handle these three image carousels  */}
        {/* <SingleBanner imageSource={bannerone} imageAlt="bannerone" bannerTextTitle="Outward Picks" />
        <SingleBanner imageSource={bannertwo} imageAlt="bannertwo" bannerTextTitle="Seasonal Offers" />
        <SingleBanner imageSource={bannerthree} imageAlt="bannerthree" bannerTextTitle="Best For Men" /> */}

        {bannerArray.map((bannerdetails, index) => (
          <SingleBanner key={index} {...bannerdetails} />
        ))}
      </Slider>
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
};

export default Banner;
