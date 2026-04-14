import React, { useEffect, useRef } from 'react'
import thirdpic from '../../../assets/images/TeamCards/thirdVector.png'
import { FaFacebookF } from "react-icons/fa6";
import { GrTwitter } from "react-icons/gr";
const TeamCards = ({ profile, Name, role, description }) => {
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target) {
            entry.target.classList.add('teamCardsAnimation')
            observer.unobserve(entry.target)
          }
        }
      })
    })
    if (ref.current) {
      observer.observe(ref.current)

    }
    return () => {
      if (ref.current) {
        observer.disconnect()
      }
    }
  }, [])
  return (
    <div className='h-[360px] w-[300px] sm:h-[360px] sm:w-[260px] md:h-[381px] 3xl:h-[400px] md:w-[300px] mdmid:w-[250px] lg:w-[280px] mdlg:w-[300px] xl:w-[360px] 2xl:w-[320px] 3xl:w-[340px] 4xl:w-[380px] flex justify-center items-center teamCardShadow rounded-lg bg-white' ref={ref}>
      <div className="h-[80%] w-[75%] flex flex-col  justify-around">
        <img src={profile} alt="profileImage" className=' size-[96px]' />
        <div className="flex flex-col gap-[4px] 2xl:gap-[8px]">
          <h2 className='font-[urbanist] font-semibold text-[20px] text-[#343F52] leading-[29px] 3xl:text-[22px] 4xl:text-[24px] tracking-[0%]'>{Name}</h2>
          <h3 className='font-[urbanist] text-[14px] leading-[23.8px] tracking-[0.4px] uppercase text-[#AAB0BC] mdmid:text-[12px] lg:text-[14px] mdlg:text-[16px] 3xl:text-[18px] 4xl:text-[20px]'>
            {role}
          </h3>
        </div>
        <p className='font-[urbanist] text-[#60697B] font-medium leading-[28.9px] 3xl:leading-[32.9px] tracking-[0%] text-[17px] mdmid:text-[16px] lg:text-[17px] mdlg:text-[19px] 3xl:text-[20px] 4xl:text-[24px]'>
          {description}
        </p>
        <div className="flex items-center gap-[12px]">
          <GrTwitter className=' size-5 text-[#5DAED5]' />
          <FaFacebookF className='size-5 text-[#0808f7] bg-inherit' />
          <img src={thirdpic} alt="" className='size-5' />
        </div>
      </div>
    </div>
  )
}
export default TeamCards