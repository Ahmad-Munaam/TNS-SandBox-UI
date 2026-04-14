import React from 'react'
import logo1 from '../../assets/images/Hero/Logos/c1.png.png'
import logo2 from '../../assets/images/Hero/Logos/c2.png.png'
import logo3 from '../../assets/images/Hero/Logos/c3.png.png'
import logo4 from '../../assets/images/Hero/Logos/c4.png.png'
import logo5 from '../../assets/images/Hero/Logos/c5.png.png'
import logo6 from '../../assets/images/Hero/Logos/c6.png.png'
import logo7 from '../../assets/images/Hero/Logos/c7.png.png'

import '../../App.css'
const Slider = () => {
    return (
        <div className="w-[85%] mx-auto my-[32px]">
            <div className="w-full flex justify-center flex-col mt-[12px]">
                <div className=' my-[34px] w-full flex justify-center'>
                    <p className=' text-[17px] xl:text-[20px] 4xl:text-[22px] text-center text-[#60697B] font-[urbanist] leading-[28.9px] tracking-[0%] font-medium'>Trusted by over 2K+ clients across the world</p>
                </div>
                </div>
                <div className="logoParent w-full overflow-hidden your-element my-[12px]">
                    <div className="slider scroll-smooth">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                        <img src={logo6} alt="" />
                        <img src={logo7} alt="" />


                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                        <img src={logo6} alt="" />
                        <img src={logo7} alt="" />
                    </div>
                </div>
            
        </div>

    )
}

export default Slider