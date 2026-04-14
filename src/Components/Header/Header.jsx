import React, { useState } from 'react'
import logo from '../../assets/images/Header/Link → logo-dark.png.png'
import vector from '../../assets/images/Header/Vector.png'
import '../../Font.css'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import '../../Animations.css'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing]=useState(false)

    const toggleMenu = (getId) => {
        if(getId==='open'){
            setIsMenuOpen(true);
        }
        else{
            setIsClosing(true)
            setTimeout(() => {
                setIsMenuOpen(false)
                setIsClosing(false)
            }, 700);

        }
    };
const scrollToElements=(id)=>{
    document.getElementById(id).scrollIntoView({
        behavior:'smooth'
    })
}
    return (
        <div className='w-[85%] mx-auto h-[94px] flex items-center'>
            <nav className='flex justify-between w-full items-center'>
                <div className='w-[20%] lg:w-[20%]'>
                    <img src={logo} alt="" />
                </div>
                <div className='hidden lg:flex w-[65%] 2xl:w-[70%] justify-between items-center lg:gap-[14px] xl:gap-0'>
                    <div className="one w-[80%] flex justify-between font-[urbanist] text-[17px] 4xl:text-[23px] font-semibold text-[#343F52]">
                        <span className='flex justify-center items-center gap-[4px]'>
                            <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Demos</span>
                            <img src={vector} alt="" />
                        </span>
                        <span className='flex justify-center items-center gap-[4px]'>
                            <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Pages</span>
                            <img src={vector} alt="" />
                        </span>
                        <span className='flex justify-center items-center gap-[4px]'>
                            <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]' onClick={()=>{
                                scrollToElements('projects')
                            }}>Projects</span>
                            <img src={vector} alt="" />
                        </span>
                        <span className='flex justify-center items-center gap-[4px]'>
                            <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Blogs</span>
                            <img src={vector} alt="" />
                        </span>
                        <span className='flex justify-center items-center gap-[4px]'>
                            <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Destination</span>
                            <img src={vector} alt="" />
                        </span>
                    </div>
                    <div className="contact w-[20%] flex justify-end">
                        <button className='bg-[#5EB9F0] px-6 py-4  hover:bg-[#1a99e9] rounded-full text-[#FFFFFF] font-[urbanist] leading-[120%] text-[17px] 4xl:text-[23px] font-semibold' onClick={()=>{
                            scrollToElements('contact')
                        }}>
                            Contact
                        </button>
                    </div>
                </div>

                <div className='lg:hidden'>
                    <button onClick={()=>{
                        toggleMenu('open')
                    }} className='text-[#343F52] text-3xl'>
                         <BiMenuAltRight />
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className={`lg:hidden ${isClosing ? `headerCloseAnimation ` : `headerAnimation`}  fixed top-[0px] h-full right-0  xtrasmall:w-[35%] w-[40%] bg-white flex flex-col justify-center gap-12px  shadow-lg z-50`}>
                    <div className="crossBlock absolute right-[20px] top-[20px]" onClick={()=>{
                        toggleMenu('close')
                    }}><AiOutlineClose/></div>
                    <div className='h-[85%] w-[85%] mx-auto py-6 flex flex-col gap-6'>
                        <div className='flex flex-col gap-4 font-[urbanist] text-[12px] sm:text-[17px] font-semibold text-[#343F52]'>
                            <span className='flex items-center w-full gap-[4px] py-2'>
                                <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Demos</span>
                                <img src={vector} alt="" />
                            </span>
                            <span className='flex items-center gap-[4px] py-2'>
                                <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Pages</span>
                                <img src={vector} alt="" />
                            </span>
                            <span className='flex items-center gap-[4px] py-2'>
                                <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Projects</span>
                                <img src={vector} alt="" />
                            </span>
                            <span className='flex items-center gap-[4px] py-2'>
                                <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Blogs</span>
                                <img src={vector} alt="" />
                            </span>
                            <span className='flex items-center gap-[4px] py-2'>
                                <span className='leading-[28.9px] tracking-[0%] cursor-pointer hover:text-[#6969f7]'>Destination</span>
                                <img src={vector} alt="" />
                            </span>
                        </div>
                        <button className='bg-[#5EB9F0] sm:px-6 sm:py-4 py-3 px-5 text-[14px] rounded-full text-[#FFFFFF] font-[urbanist] leading-[120%] sm:text-[17px] font-semibold w-full'>
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header