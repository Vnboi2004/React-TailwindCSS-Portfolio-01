import React from 'react';
import { FaGithubAlt } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import mapImage from '../../assets/images/map.png';
export const Footer = () => {
  return (
    <div className='bg-primary'>
        <div className='container'>
            <div className='grid grid-cols-3 gap-2'>
                {/* Description section */}
                <div className='my-12 text-white'>
                    <h1 className='text-xl font-bold py-4'>E-sheba</h1>
                    <p className='text-[12px] leading-4 py-2'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nec risus feugiat lectus risus sed <br/> ullamcorper. Auctor semper fermentum</p>
                    <p className='text-[12px] leading-4 py-2'>volutpat integer vel. In rhoncus elementum nunc <br/>, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                    <div className='flex gap-3 py-2 cursor-pointer'>
                        <FaGithubAlt className='hover:scale-110 duration-300 transform'/>
                        <FaInstagram className='hover:scale-110 duration-300 transform'/>
                        <FaGoogle className='hover:scale-110 duration-300 transform'/>
                    </div>
                </div>
                {/* Navlink section */}
                <div className='my-12 text-white'>
                    <h1 className='text-xl font-bold py-4'>Useful Links</h1>
                    <div className='flex flex-col gap-1 text-[14px]'>
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                        <p>Our Mission</p>
                        <p>Our Team</p>
                    </div>
                </div>
                {/* Address section */}
                <div className='my-12 text-white'>
                    <h1 className='text-xl font-bold py-4'>Address</h1>
                    <img src={mapImage} alt="" />
                </div>
            </div>
            <div>
                <p className='text-center text-[12px] text-gray-300/50 border-t-2 border-gray-200/50 py-4'>2022 All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}
