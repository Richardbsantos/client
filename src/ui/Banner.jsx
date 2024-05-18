import React, { useState, useEffect } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://novapost.com.br/wp-content/uploads/2023/11/iphone-15-pro-analise-nova-post-1-1536x864.jpg",
    "https://cdn.braziliantimes.com/website/website/base/fcd/291/335/993-621-promo____rs_especiais_para_o_outono.jpg",
    "https://s2-g1.glbimg.com/UPvociK9PRltRhzHnwjwVfqxmZ8=/0x0:1473x788/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/R/w/scbFDDTUmSTVZWu8s7uA/captura-de-tela-2023-09-12-143827.png",
    "https://s.zst.com.br/cms-assets/2023/07/iphone-1-.webp",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [currentSlide]);

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[500px] w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          {data.map((src, index) => (
            <img
              key={index}
              className="w-screen h-full object-cover"
              src={src}
              alt={`Image ${index + 1}`}
              loading={index === 0 ? "priority" : "lazy"}
            />
          ))}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
