import React from "react";
import Slider from "react-slick";
//import 'tailwindcss/tailwind.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHandPointRight } from "react-icons/fa";
function WhoIM() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  const imgList = [
    {url : "./token.jpg"},
    {url : "./NFT.jpg"},
    {url : "./betting.jpg"},
    {url : "./uniswap.jpg"},
    {url : "./DApp.jpg"},
    {url : "./custom Blockchain.jpg"},
    {url : "./FullStack.jpg"},
    {url : "./about.png"},
  ]

  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-30 absolute bottom-0 z-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10 z-20 text-justify">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 font-bold">
          Know Who <p className="text-[#ad50eb]">I'M</p>
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-4/5">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p className="text-center mt-3 mx-auto md:mx-0">
              Greetings everyone!{" "}
              <span className="text-center mt-3 mx-auto md:mx-0">
                I am <span className="text-[#ad50eb]">Oleksii</span>{" "}
                from <span className="text-[#ad50eb]">Ukrain.</span>
              </span>
            </p>            
            <p className="lg:text-xl font-thin ">
              I'm a seasoned blockchain engineer and full-stack developer with a strong passion for creating innovative{" "}
              <span className="text-[#ad50eb] font-semibold">
                Blockchain solutions{" "}
              </span>
              and{" "}
              <span className="text-[#ad50eb] font-semibold">
                Building captivating websites.{" "}
              </span>                
              I thrive on tackling complex problems and consistently look out new challenges to expand my skills and expertise. With a proven track record in blockchain technology and web development, I am confident in my ability to bring substantial value to your projects and contribute to our mutual success. I am currently seeking opportunities where I can leverage my skills to drive business growth while continuing to advance my professional development.
            </p>
            <p className="flex text-gray-200 text-base lg:text-lg gap-2 font-semibold ">
              Outside of coding, some other activities that I love to do!
            </p>
            <span className="flex items-center justify-center gap-3 font-sans text-gray-200">
              <FaHandPointRight /> Playing Games
            </span>
            <span className="flex items-center justify-center gap-3 font-sans text-gray-200">
              <FaHandPointRight /> Travelling
            </span>
            <span className="flex items-center justify-center gap-3 font-sans text-gray-200">
              <FaHandPointRight /> Socializing with friends
            </span>            
          </span>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 h-full items-center justify-center">
        <div className="w-full lg:w-3/4 h-full">
          <Slider {...settings}>
            {imgList.map(({ url }, id) => (
              <div>
                <img
                src={url}
                alt="No Image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WhoIM;
