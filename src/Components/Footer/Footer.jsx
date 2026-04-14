import React from 'react'
import '../../Font.css'
import footerLogo from '../../assets/images/Footer/logo-light.png.png'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import '../../Font.css'
const Footer = () => {
  return (
    <div className=' w-[85%] mx-auto flex flex-col gap-[42px] lg:gap-[56px]'>
      <div className="one flex lg:flex-row flex-col justify-between items-center gap-[12px] ">
        <h2 className='hidden lg:flex flex-col items-center'>
          <span className='text-[#FFFFFF] font-[urbanist] text-[42px] leading-[50.4px] tracking-[0%] font-semibold'>Join our community by using our</span>
          <span className='text-[#FFFFFF] font-[urbanist] text-[42px] leading-[50.4px] tracking-[0%] font-semibold'>services and grow your business</span>
        </h2>

        <h2 className='lg:hidden flex flex-col items-center'>
          <span className='text-[#FFFFFF] font-[urbanist] text-[32px] md:text-[36px] leading-[140%] text-center tracking-[0%] font-semibold'>Join our community by using our services and grow your business</span>
        </h2>
        <button className='px-4 py-3 lg:px-6 lg:py-4 text-center rounded-[56px] font-[urbanist] text-[12px] md:text-[17px] md:leading-[28.9px] tracking-[0%] font-semibold text-[#FFFFFF] bg-[#5EB9F0]'>Try It For Free</button>
      </div>
      <div className=' h-[2px] w-full bg-[#A4AEC633] rounded-xl'></div>
      <div className="two grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-between md:flex-wrap lg:grid-cols-4 w-full  gap-[32px] md:gap-[38px]">
        <div className="oneMain flex flex-col gap-[18px]">
          <img src={footerLogo} alt="FooterLogo" className='w-[120px]' />
          <div className=' flex flex-col gap-2 text-[#CACACA] font-[urbanist]'>
            <span className='font-medium text-[17px] md:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] leading-[28.9px] tracking-[0%]'> © 2023 Sandbox.  </span>
            <span className='font-medium text-[17px] md:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] leading-[28.9px] tracking-[0%]'>  All rights reserved. </span>
          </div>
          <div className=' flex  items-center gap-[12px]'>
            <a href="https://twitter.com/@socialhawk44" target='_blank'>

              <TiSocialTwitter className=' size-[18px] md:size-[20px] 2xl:size-[22px] 3xl:size-[24px] 4xl:size-[26px] text-[#FFFFFF]' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100011211330117" target='_blank'>
              <FaFacebookF className=' size-[18px] md:size-[20px] 2xl:size-[22px] 3xl:size-[24px] 4xl:size-[26px] text-[#FFFFFF]' />
            </a>
            <FaDribbble className=' size-[18px] md:size-[20px] 2xl:size-[22px] 3xl:size-[24px] 4xl:size-[26px] text-[#FFFFFF]' />
            <a href="https://www.instagram.com/hawk_bhai_ff/" target='_blank'>
              <FaInstagram className=' size-[18px] md:size-[20px] 2xl:size-[22px] 3xl:size-[24px] 4xl:size-[26px] text-[#FFFFFF]' />
            </a>
            <RiYoutubeFill className=' size-[18px] md:size-[20px] 2xl:size-[22px] 3xl:size-[24px] 4xl:size-[26px] text-[#FFFFFF]' />
          </div>
        </div>
        <div className="twoMain flex flex-col gap-[18px]">
          <h4 className='text-[#FFFFFF] font-[urbanist] font-semibold text-[20px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[28px] leading-[29px] tracking-[0%]'> Get in Touch</h4>

          <a href="https://www.google.com/maps/search/?api=1&query=Moonshine+St+14/05,+Light+City,+London,+United+Kingdom" target="_blank">

            <div className=" hover:underline flex flex-col gap-[8px] text-[#CACACA] font-[urbanist] font-medium text-[17px] md:text-[14px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px]">
              <span>Moonshine St. 14/05</span>
              <span className=' leading-[28.9px] tracking-[0%]'>Light City, London,</span>
              <span>United Kingdom</span>
            </div>
          </a>
          <div className=' flex flex-col gap-[4px] font-[urbanist] text-[#CACACA] font-medium text-[17px] md:text-[14px]  2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px]'>
            <a href="https://mailto:info@email.com" target='_blank'>
              <span className='leading-[28.9px] tracking-[0%]'>info@email.com</span>
            </a>
            <a href="https://wa.me/923001234567" target='_blank'>
              <span>00 (123) 456 78 90</span>
            </a>
          </div>
        </div>

        <div className="threeMain flex flex-col gap-[18px]">
          <h4 className='text-[#FFFFFF] font-[urbanist] font-semibold text-[20px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[28px] leading-[29px] tracking-[0%]'> Learn more</h4>
          <div className="flex flex-col gap-[8px] text-[#CACACA] font-[urbanist] font-medium text-[17px] md:text-[14px]  2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px]">
            <span>About us</span>
            <span className=' leading-[28.9px] tracking-[0%]'>Our Story</span>
            <span>Projects</span>
            <span className=' leading-[28.9px] tracking-[0%]'>Terms of Use</span>
            <span className=' leading-[28.9px] tracking-[0%]'>Privacy Policy</span>
          </div>
        </div>
        <div className="fourMain flex flex-col gap-[8px] sm:gap-[12px] md:gap-[18px] items-center sm:items-start">
          <h4 className='text-[#FFFFFF] font-[urbanist] font-semibold text-[20px] 2xl:text-[22px] 3xl:text-[24px] 4xl:text-[28px] leading-[29px] tracking-[0%]'>
            Our Newsletter
          </h4>
          <div className="flex flex-col text-[#CACACA] font-medium font-[urbanist] text-center sm:text-start text-[17px] sm:text-[15px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px]">
            <span>Subscribe to our newsletter to get our </span>
            <span> news & deals delivered to you.</span>
          </div>
          <div className=' flex items-center gap-0 w-full border-2 border-[#959CA9] rounded-lg justify-between'>
            <input type="text" placeholder='Email Address' className='font-[urbanist] text-[17px] text-[#959CA9] font-medium leading-[25.5px] tracking-[0%] h-[56px] sm:h-[48px] sm:text-[15px] flex-1 border-[#4E5868] p-3 rounded-md bg-[#1E22280A] outline-none' />
            <button className='bg-[#5EB9F0] font-[urbanist] w-fit  text-[17px] font-semibold text-[#FFFFFF] h-full px-4 text-center rounded-tr-md rounded-br-md'>Join</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer