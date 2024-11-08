import React from 'react'
import Image from 'next/image'
import Vector from "../Header/Vector-2.png"
import Vector1 from "../Header/Vector 1.png"
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";


export const Header = () => {
  return (
    <div className='h-[134] w-[1920] bg-[#A29875] flex items-center justify-between'> 
       <div> 
       <Image 
     src={Vector}
      width={63.52} 
      height={60.66} 
      alt='Vector-2'
      className='absolute top-[23.22px] left-[56.76px]'/>
        <Image 
     src={Vector1}
      width={39.45} 
      height={48.66} 
      alt='Vector-1'
      className='absolute top-[44.91px] left-[56.97px]'/>
       <h1 className='text-[66.78px] leading-[83.48px] py-[27.67px] pl-[125.32px] rye'>urity</h1>
      </div>
      <div className='w-[769.89px] h-[56.24px] bg-[#F8F8F8] rounded-[13.83px] flex items-center justify-between   pr-[15px]'>
        <p className='text-[18.68px] leading-[25.48px] text-[#6C757D] nunito_sans  pl-[25px] '>Search for Gold Jewellery, Diamond Jewellery and more…</p>
        <FaSearch  className='text-[#000000] h-[21.5px] w-[21.5px]'/>
        </div>
        <div className='flex w-[177.8px] h-[30.08px] gap-[38.7px] mr-[55px] items-center'>
        <FaRegHeart className='h-[29.71px] w-[33.42px]  text-[#FFFFFF]'/>
        <FaRegUser className='h-[29.26px] w-[28.97px]  text-[#FFFFFF]' />
        <IoCartOutline className='h-[35.08px] w-[38.01px] text-[#FFFFFF]' />
        </div>
        </div>
      
  );
}

export default Header;