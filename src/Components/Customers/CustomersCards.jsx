import React, { useEffect, useRef } from 'react'
import { RiStarSFill } from "react-icons/ri";
import '../../Font.css'
import '../../Animations.css'
const CustomersCards = ({ info, imag, NameOfCustomer, customerWork }) => {
    const ref=useRef()
    useEffect(()=>{
        const observer =new IntersectionObserver((entries)=>{
            entries.forEach(entry=> {
                if(entry.isIntersecting){
                    if(entry.target){
                        entry.target.classList.add('servicesCardsAnimation')
                        observer.unobserve(entry.target)
                    }
                }
            })
        })
        if(ref.current){
            observer.observe(ref.current)
        }
        return ()=>{
            if(ref.current){
                observer.disconnect()
            }
        }
    },[])
        return (
        <div className='w-[95%]  xtrasmall:w-[70%] mx-auto sm:mx-0 sm:w-full  p-[8%] sm:p-[10%]  h-auto flex flex-col items-start gap-[18px] bg-white rounded-xl flex-shrink-0 lg:gap-[20px] shadow-md' ref={ref}>
                <div className=' flex items-center gap-[4px]'>
                    <RiStarSFill className=' text-[#FCC032]' />
                    <RiStarSFill className=' text-[#FCC032]' />
                    <RiStarSFill className=' text-[#FCC032]' />
                    <RiStarSFill className=' text-[#FCC032]' />
                </div>
                <p className='font-[urbanist] font-medium text-[14px] xtrasmall:text-[16px] xl:text-[17px] leading-[30.6px] tracking-[0%] text-[#60697B] lg:leading-[26.6px] xl:leading-[28.9px] 3xl:text-[19px] 4xl:text-[22px] 3xl:leading-[30.9px] 4xl:leading-[32.9px]'> {info} </p>
            <div className="flex justify-center items-center gap-[12px] 2xl:gap-[16px]">
                <img src={imag} alt="" className='lg:size-[56px] xl:size-[68px] 2xl:size-[76px] 4xl:size-[86px]'/>
                <div className="flex flex-col justify-center gap-[4px] 2xl:gap-[12px]">
                    <h3 className=' text-[#343F52] font-[urbanist] font-semibold leading-[140%] md:leading-[28.9px] tracking-[0%] text-[19px] lg:text-[16px] lg:leading-[120%] xl:leading-[24.9px] xl:text-[18px] 2xl:text-[22px] 2xl:leding-[26.9px] 4xl:text-[28px]'> {NameOfCustomer} </h3>
                    <h4 className=' text-[#60697B] font-[urbanist] tracking-[0%] leading-[23.9px] md:leading-[120%] lg:leading-[28.9px] text-[17px] md:text-[14px] font-medium xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px] 4xl:leading-[34.9px]'> {customerWork} </h4>
                </div>
            </div>
        </div>
    )
}
export default CustomersCards