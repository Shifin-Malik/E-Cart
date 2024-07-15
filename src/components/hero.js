import React from "react";

import Image1 from "../assets/images/macbook.png";

import Button from "./Shared/Button";

const HeroData = [

  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

const Hero = ({ handleOrderPopup }) => {

  return (
    <div className="container bg-zinc-200 rounded-md md:ml-10 ml-0 mx-0 mt-2">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[600px]  flex justify-center items-center
"
      >
        <div className="container pb-8 sm:pb-0">
          {/* Hero section */}
         
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-black"
                        textColor="text-primary"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
         
        </div>
      </div>
    </div>
  );
};

export default Hero;