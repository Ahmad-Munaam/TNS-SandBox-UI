import React, { useEffect, useRef, useState } from 'react'
import icon1 from '../../assets/images/Projects/Icon.png'
import icon2 from '../../assets/images/Projects/Icon (1).png'
import icon3 from '../../assets/images/Projects/Icon (2).png'
import CountUp from 'react-countup';

const Team = () => {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)
    const projectsData = [
        {
            "image": icon1,
            "Number": 1000,
            "details": "Completed projects"
        },
        {
            "image": icon2,
            "Number": 50000,
            "details": "Happy customers"
        },
        {
            "image": icon3,
            "Number": 20,
            "details": "Awards won"
        },
    ]
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.4 })
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            observer.disconnect()
        }
    }, [])
    if (visible) {
        console.log(visible)
    }
    return (
        <div className=' w-[85%] mx-auto flex justify-between flex-col lg:flex-row gap-[42px]'>
            <div className="one flex flex-col w-full lg:w-[35%] gap-[22px] lg:justify-center xl:justify-start">
                <h2 className='md:text-center lg:text-start text-[#5EB9F0] font-[urbanist] font-semibold leading-[21.4px] tracking-[0%] text-[21px] 2xl:text-[24px] 3xl:text-[28px] 4xl:text-[32px]'>
                    Company Facts
                </h2>
                <h3 className='md:hidden lg:block'>
                    <span className=' text-[#343F52] font-[urbanist] text-[42px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 3xl:leading-[60.4px] leading-[120%] lg:leading-[50.4px] flex flex-col tracking-[0%] font-semibold'> We are proud of </span>
                    <span className=' text-[#343F52] font-[urbanist] text-[42px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 3xl:leading-[60.4px] leading-[100%] lg:leading-[50.4px] flex flex-col tracking-[0%] font-semibold'> our design team </span>
                </h3>

                <h3 className='hidden md:block lg:hidden md:text-center lg:text-start'>
                    <span className=' text-[#343F52] font-[urbanist] text-[42px] leading-[120%] lg:leading-[50.4px] flex flex-col tracking-[0%] font-semibold'> We are proud of our design team</span>
                </h3>
                <p className=' text-[#60697B] font-[urbanist] text-[17px] sm:text-[20px] md:text-[24px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[28px] 4xl:text-[30px] 3xl:leading-[34.9px] 4xl:leading-[38.9px] leading-[120%] xl:leading-[28.9px] tracking-[0%] md:text-center lg:text-start'>
                    Just sit back and relax while we take care
                    of your business needs for you.
                </p>
            </div>
            <div className=' two grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 w-full lg:w-[60%] gap-[24px]' ref={ref}>
                {
                    projectsData.map((value, index) => {
                        return <div key={index} className=' flex flex-col gap-[12px] 2xl:gap-[18px] items-center'>
                            <div className=' w-[56px] h-[56px] 2xl:w-[62px] 2xl:h-[62px] 4xl:w-[68px] 4xl:h-[68px] bg-[#E5F4FD] rounded-full flex justify-center items-center'>
                                <img src={value.image} alt="" />
                            </div>
                            <span className=' text-[#343F52] font-[urbanist] text-[28px] lg:text-[41px] leading-[80%] lg:leading-[41px] tracking-[0%] font-semibold 2xl:text-[48px]'>  {
                                visible ?
                                    <CountUp
                                        end={value.Number}
                                        duration={3}
                                        separator=','
                                        formattingFn={(num) => {
                                            return num >= 1000 ? num / 1000 + "K" : num

                                        }}
                                    /> : ''
                            } </span>
                            <p className=' text-[#60697B] tracking-[0%] text-[18px] text-center lg:text-[22px] font-medium leading-[28px] 2xl:text-[26px]'> {value.details} </p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Team