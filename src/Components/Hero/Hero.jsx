import React, { useEffect, useRef } from 'react'
import heroImage from '../../assets/images/Hero/Figure → i21.png.png'
import '../../Font.css'
import Slider from './Slider'
import '../../Animations.css'
const Hero = () => {
    const ref = useRef()
    const ref2 = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === ref.current) {
                        entry.target.classList.add("heroAnimationRight");
                    }
                    if (entry.target === ref2.current) {
                        entry.target.classList.add("heroAnimationLeft");
                    }
                    observer.unobserve(entry.target);
                }
            });
        });

        [ref, ref2].forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className='w-[85%] mx-auto flex lg:flex-row flex-col justify-between  lg:items-center gap-[32px] 3xl:gap-0'>
                <div className="order-2 lg:order-1 w-full md:w-[80%] mx-auto lg:w-[40%] 3xl:w-[45%] flex flex-col gap-[18px] md:gap-[18px] lg:gap-[14px] xl:gap-[16px]" ref={ref2}>
                    <h1 className='flex flex-col font-[urbanist] text-[42px] xtrasmall:text-[48px] sm:text-[52px] md:text-[56px] text-center lg:text-start lg:text-[42px] xl:text-[54px] 2xl:text-[56px] leading-[120%] md:leading-[100%] lg:leading-[120%] xl:leading-[62.1px] 3xl:leading-[78.1px] 4xl:leading-[82.1px] 3xl:text-[62px] 4xl:text-[68px] tracking-[0%] font-semibold text-[#343F52]'>
                        <span>A digital agency specializing on </span>
                        <span className='text-[#5EB9F0]'> mobile design </span>
                    </h1>
                    <div className=' flex flex-col gap-[18px] xtrasmall:gap-[24px] md:gap-[28px] lg:gap-[32px] xl:gap-[38px] text-center items-center lg:text-start lg:items-start'>
                        <p className='text-[#60697B] font-[urbanist] leading-[120%] lg:leading-[140%] xl:leading-[34.1px] text-[18px] xtrasmall:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] tracking-[0%] font-medium 3xl:text-[30px]  3xl:leading-[42.1px]'>
                            We are an award winning design agency that
                            strongly believes in the power of creative ideas.
                        </p>
                        <button className='w-fit px-5 py-4 3xl:px-7 3xl:py-6   text-[#FFFFFF] font-[urbanist] font-semibold text-[17px] bg-[#5EB9F0] rounded-[58px] 3xl:text-[20px] transition-colors duration-500 hover:bg-[#9797e7ee]'>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="flex-1 lg:w-full w-auto md:w-[80%] mx-auto flex justify-center 2xl:w-full 2xl:h-full 3xl:justify-end lg:order-2 order-1" ref={ref}>
                    <img src={heroImage} alt="" className=' 3xl:object-cover' />
                </div>

            </div>
            <Slider />
        </>
    )
}

export default Hero