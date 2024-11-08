import React from 'react'
import Header from './Components/Header/header';
import Image from 'next/image';
import Slider1 from './Public/slider-1.jpg.png'
import Innerborder from './Public/sliderInnerborder.png'

export const page = () => {
  return (
    <div> {/*main*/}
   <Header />
   <div className='flex bg-[#FFFFFF] h-screen'> {/*flex*/}
   <div className='pt-[182px] pl-[176px] w-[1083px]'> {/*heading */}
    <h2 className='text-[40px] leading-[65.8px] libre_bodoni tracking-[2.5%] font-bold text-[#000000] w-[496px] mb-[28px] '>IMPECCABLE CRAFTSMANSHIP AND FINESSE
    </h2>
    <p className='text-[30px] leading-[49.35px] tracking-[2.5%] text-[#A29875] libre_bodoni font-medium w-[902px] mb-[50px]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
    <button className='p-[10px] rounded-[10px] bg-[#A29875] libre_bodoni font-medium text-[30px] leading-[37.5px] text-[#FFFFFF] gap-[10px] w-[288px]'>Explore Now</button>

   
   
   </div>

   <div className='w-[462] h-[647] pt-[64px] pl-[81px]'>
   <Image 
     src={Slider1}
      width={490} 
      height={667} 
      alt='Vector-1'
      className='rounded-tl-[150px] rounded-br-[150px]'/>
      <Image 
     src={Innerborder}
      width={442} 
      height={611} 
      alt='Vector-1'
      className='rounded-tl-[150px] rounded-br-[150px] absolute top-[225px] left-[1185px]'/>
   </div>
      </div> {/*flex*/}
    </div> /*main*/
    
  )
}

export default page;
