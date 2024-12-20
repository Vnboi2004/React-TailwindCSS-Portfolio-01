import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import HeroImage from '../../assets/images/hero.png';
export const Hero = ({ setOpenPage, setConfirmPage, confirmPage }) => {
  return (
    <div className='bg-[#E1EEFF] h-screen w-full relative'>
        <Navbar setOpenPage={setOpenPage} setConfirmPage={setConfirmPage} confirmPage={confirmPage}/>
        <div className='container flex justify-center items-center h-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 px-7'>
              {/* Content section */}
              <div className=''>
                <h1 className='text-5xl font-bold py-4 text-left'>
                  Find & Search Your {" "}
                  {" "}<span className='text-primary'>Favourite</span> {" "} Doctor
                </h1>
                <p className='text-[16px] leading-[1.2rem] py-2 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Sem velit viverra amet faucibus.</p>
                <div className='flex items-center justify-between bg-white my-16 py-2 px-2 pl-8 rounded-full'>
                  {/* Doctor name */}
                  <div className='flex items-center gap-2'>
                    <FaRegCircleUser />
                    <p className='text-[16px] leading-[1.2rem]'>Doctor's Name</p>
                    <FaAngleDown/>
                  </div>
                  {/* Location */}
                  <div className='flex items-center gap-2'>
                    <MdOutlineNotListedLocation />
                    <p>Location</p>
                    <FaAngleDown className='inline-block'/>
                  </div>
                  {/* Search */}
                  <div className='h-[56px] w-[56px] bg-primary rounded-full flex justify-center items-center text-white text-[24px] font-bold hover:scale-105 duration-200 transform cursor-pointer'>
                    <CiSearch className=''/>
                  </div>
                </div>
              </div>
              {/* image section */}
              <div className='z-[2] relative'>
                <img src={HeroImage} alt="" className='absolute -top-2 z-[2]'/>
                <div className="absolute top-[9.2rem] left-[7.5rem] z-[1] h-[600px] w-[600px] bg-[#A5CCFF] rounded-full [clip-path:polygon(50%_0%,_100%_0%,_100%_50%,_50%_50%,_0%_50%,_0%_0%)]"></div>
              </div>
            </div>
        </div>
        <div className='bg-primary absolute bottom-0 w-full z-[1]'>
          <div className='container px-[6rem] py-4'>
            <div className='flex items-center gap-4 text-white'>
                <div className='flex flex-col items-center gap-1 border-r-[0.5px] border-white/50 pr-8'>
                  <h1 className='text-4xl font-bold'>24/7</h1>
                  <p className='text-[9px] leading-[1rem]'>Online Suport</p>
                </div>
                <div className='flex flex-col items-center gap-1 border-r-[0.5px] border-white/50 pr-8'>
                  <h1 className='text-4xl font-bold'>100+</h1>
                  <p className='text-[9px] leading-[1rem]'>Doctor</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                  <h1 className='text-4xl font-bold'>1M+</h1>
                  <p className='text-[9px] leading-[1rem]'>Active Patients</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
