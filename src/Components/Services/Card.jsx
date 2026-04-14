import React, { useEffect, useRef } from 'react'

import arrow from '../../assets/images/Services/CardImages/Vector.png'
import '../../Animations.css'

const Card = ({ images, hContent, pContent }) => {
    const ref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target) {
                        entry.target.classList.add('servicesCardsAnimation')
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
        <div className=' flex flex-col font-[urbanist] items-center gap-[18px] sm:gap-[28px] lg:gap-[24px] xl:gap-[28px]' ref={ref}>

            <img src={images} alt="image not found" className='h-[180px] sm:h-[200px] lg:h-[230px]' />
            <div className=' flex flex-col  items-center gap-[6px] sm:gap-[12px] lg:gap-[10px] xl:gap-[12px]'>

                <h3 className='text-[#343F52] text-[23px] leading-[100%] lg:leading-[22.2px] xl:leading-[32.2px] tracking-[0%] font-semibold 2xl:text-[26px] 4xl:text-[30px]'>{hContent}</h3>
                <p className='w-[90%]  xtrasmall:w-[85%] lg:w-[85%] text-[17px] sm:text-[22px] md:text-[17px] lg:text-[16px] font-medium leading-[120%] lg:leading-[24.2px] 2xl:leading-[32.2px] 4xl:leading-[34.2px] tracking-[0%] text-center text-[#60697B] 2xl:text-[20px] 4xl:text-[24px]'>{pContent}</p>
                <div className="flex items-center gap-[4px]">
                    <button className=' text-[#5EB9F0] text-[17px] lg:text-[14px] 2xl:text-[18px] 4xl:text-[20px] leading-[28.9px] tracking-[0%] font-semibold'>Learn more </button>
                    <img src={arrow} alt="" className='h-[12px] lg:h-[10px]' />
                </div>
            </div>

        </div>
    )
}

export default Card