import React from "react";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import BackgroundContainer from "../../../public/Images/Background-Container.png";
import HeroPerson from "../../../public/Images/bohemian-man-with-his-arms-crossed-1.png";
import InstagramIcon from "../../../public/Images/svg/fi_2111463-1.svg";
import YoutubeIcon from "../../../public/Images/svg/youtube-1.svg";
import FacebookIcon from "../../../public/Images/svg/facebook-1.svg";

const Hero = () => {
  return (
    <div className="flex flex-wrap bg-[#fef9f1] pt-20 lg:pt-24 w-full px-5 lg:px-8">
      <div className="pt-8 w-[45%] lg:w-[560px]">
        <h2 className="font-bold text-4xl mb-2">Hey There,</h2>
        <h1 className="text-8xl font-bold mb-4 text-[#032737]">Im Abun</h1>
        <span className="block text-[#2c3d44] text-lg mb-6">
          A passionate Frontend Developer based in Indonesia, specializing in
          crafting engaging and user-friendly web experiences. With a keen eye
          for design and a commitment to clean, efficient code, I bring ideas to
          life on the web.
        </span>
        <button className="block cursor-pointer bg-[#f04b21] border-[1px] border-[#f04b21] px-8 py-3 rounded-xs text-white font-medium hover:bg-transparent hover:text-[#f04b21] hover:border-[#f04b21] transition duration-300">
          Contact Me
        </button>
        <div className="mt-20">
          <h4 className="text-[#032737] font-bold text-2xl mb-3">
            Top Rated Marketer
          </h4>
          <div className="flex gap-3">
            <button className="bg-white p-4 rounded-full animation duration-300 hover:bg-[#f04b21] hover:scale-115 cursor-pointer shadow-xl">
              <SiUpwork size={24} className="text-[#032737]" />
            </button>
            <button className="bg-white p-4 rounded-full animation duration-300 hover:bg-[#f04b21] hover:scale-115 cursor-pointer shadow-xl">
              <TbBrandFiverr size={24} className="text-[#032737]" />
            </button>
            <button className="bg-white p-4 rounded-full animation duration-300 hover:bg-[#f04b21] hover:scale-115 cursor-pointer shadow-xl">
              <FaLinkedinIn size={24} className="text-[#032737]" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex items-center w-[55%] lg:w-[560px] lg:right-[83px] lg:-left-[75px]">
        <Image
          src={BackgroundContainer}
          alt="BG Container"
          width={560}
          height={560}
          className="w-full absolute"
        />
        <Image
          src={HeroPerson}
          alt="BG Container"
          width={560}
          height={560}
          className="w-full z-10 top-8"
        />
        <div className="w-[42px] flex justify-center items-center bg-white rounded-full p-1.5 absolute left-[99px]">
          <Image
            src={InstagramIcon}
            alt="Intagram Icon"
            width={24}
            height={24}
            className="w-full"
          />
        </div>
        <div className="w-[42px] flex justify-center items-center bg-white rounded-full p-1.5 absolute top-[120px] right-[10px]">
          <Image
            src={FacebookIcon}
            alt="Youtube Icon"
            width={24}
            height={24}
            className="w-full"
          />
        </div>
        <div className="w-[42px] flex justify-center items-center bg-white rounded-full p-1.5 absolute top-[10px] left-[45px]">
          <Image
            src={YoutubeIcon}
            alt="Facebook Icon"
            width={24}
            height={24}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex lg:flex-col gap-8 w-full lg:w-[160px] pt-8 z-20">
        <div className="counter-item bg-white rounded-sm shadow-lg p-6 flex flex-col gap-2">
          <div className="text-5xl font-bold text-[#032737]">
            <span className="text-5xl">0</span>
            <span className="text-5xl">5</span>
            <span className="text-3xl counter-number-suffix">+</span>
          </div>
          <p className="text-[#2c3d44] text-lg font-medium">
            Years of Experience
          </p>
        </div>
        <div className="counter-item bg-white rounded-sm shadow-lg p-6 flex flex-col gap-2">
          <div className="text-5xl font-bold text-[#032737]">
            <span className="text-5xl">1</span>
            <span className="text-5xl">0</span>
            <span className="text-3xl counter-number-suffix">+</span>
          </div>
          <p className="text-[#2c3d44] text-lg font-medium">
            Projects Completed
          </p>
        </div>
        <div className="counter-item bg-white rounded-sm shadow-lg p-6 flex flex-col gap-2">
          <div className="text-5xl font-bold text-[#032737]">
            <span className="text-5xl">1</span>
            <span className="text-5xl">5</span>
            <span className="text-3xl counter-number-suffix">+</span>
          </div>
          <p className="text-[#2c3d44] text-lg font-medium">Satisfied Client</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
