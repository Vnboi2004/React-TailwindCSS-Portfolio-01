import React from 'react'
import { FaVirusCovid } from "react-icons/fa6";
import { FaLungs } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { FaHeadSideMask } from "react-icons/fa";
import DoctorImage_01 from '../../assets/images/doctor_01.png';
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineArrowForward } from "react-icons/md";
export const Banner = () => {
    const BannerContent = [
        {
            id: 1,
            icon: FaVirusCovid,
            title: 'Covid-19 Test',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.',
        },
        {
            id: 2,
            icon: FaLungs,
            title: 'Heart Lungs',
            decription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.`,
        },
        {
            id: 3,
            icon: GiNoodles,
            title: 'Suppliment',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.',
        },
        {
            id: 4,
            icon: FaHeadSideMask,
            title: 'Mental Health',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.',
        },

    ]
    return (
        <div className='bg-white'>
            <div className='container px-24 py-16'>
                <h1 className='text-3xl font-semibold py-4'>Our Consulting Specialists</h1>
                <div className='grid grid-cols-4 mt-2'>
                    {BannerContent.map((item) => (
                        <div key={item.id} className='max-w-[285px]'>
                            <div className='flex flex-col gap-2 border-2 border-gray-400 rounded-xl px-4 py-8 hover:bg-primary hover:text-white duration-200 cursor-pointer'>
                                <div className='w-[78px] h-[78px] bg-[#E6F5FC] rounded-full flex items-center justify-center'>
                                    <item.icon className='text-[#0360D9] text-2xl'/>
                                </div>
                                <h1 className='font-semibold text-[1.125rem] leading-[1.6rem] text-left'>{item.title}</h1>
                                <p className='text-xs'>{item.decription}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-20'>
                    <div className='grid grid-cols-2'>
                        {/* Image section */}
                        <div>
                            <img src={DoctorImage_01} alt="" />
                        </div>
                        {/* Content section */}
                        <div>
                            <h1 className='text-4xl font-bold mb-8'>Why You Choose Us?</h1>
                            <div className='flex items-center gap-2'>
                                <IoCheckmark className='text-primary text-xl'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoCheckmark className='text-primary text-xl'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoCheckmark className='text-primary text-xl'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoCheckmark className='text-primary text-xl'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoCheckmark className='text-primary text-xl'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoCheckmark className='text-primary text-xl'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='mt-6 px-2 flex items-center gap-1 text-primary font-semibold'>
                                <p>Learn More</p>
                                <MdOutlineArrowForward/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
