import React from 'react'
import '../../Font.css'
import StrategyCard from './StrategyCard'
const Strategy = () => {
    const data = [
        {
            "numberContent": "01",
            "h3Content": "Collect Ideas",
            "pContent": " Nulla vitae elit libero pharetra augue dapibus."
        },
        {
            "numberContent": "02",
            "h3Content": "Data Analysis",
            "pContent": "Vivamus sagittis lacus vel augue laoreet."
        },
        {
            "numberContent": "03",
            "h3Content": "Finalize Product",
            "pContent": "Cras mattis consectetur purus sit amet."
        }
    ]
    return (
        <div className='w-[85%] mx-auto flex lg:flex-row flex-col items-center lg:items-center lg:gap-0 gap-[18px] lg:justify-between'>
            <div className="flex flex-col font-[urbanist] gap-[24px] xl:gap-[24px]  w-full lg:w-[50%]">
                <h2 className=' text-[#5EB9F0] text-[16px] font-semibold xtrasmall:leading-[21.6px]  xl:leading-[21.6px] tracking-[0.4px] '>OUR STRATEGY</h2>
                <h3 className='hidden lg:flex flex-col leading-[140%] lg:leading-[120%] xl:leading-[50.4px] tracking-[0%] font-semibold text-[#343F52] text-[32px] xl:text-[42px]'>
                    <span>Here are 3 working steps to </span>
                    <span>  organize our projects.</span>
                </h3>
                <h3 className='w-auto flex lg:hidden  leading-[120%] tracking-[0%] font-semibold text-[#343F52] text-[28px] md:text-[38px]'>
                    Here are 3 working steps to organize our projects.
                </h3>
                <p className=' text-[#60697B] font-medium text-[14px] md:text-[18px] lg:text-[14px] xl:text-[16px] leading-[28.9px] lg:leading-[160%] tracking-[0%] lg:max-w-[95%] xl:max-w-full 3xl:text-[18px] 2xl:max-w-[90%] 4xl:text-[22px]'>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                    vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor
                    id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.
                </p>
                <p className='text-[#60697B] font-medium text-[14px] md:text-[18px] lg:text-[14px] xl:text-[16px] 3xl:text-[18px] 4xl:text-[22px] 2xl:max-w-[90%] leading-[28.9px] lg:leading-[160%] tracking-[0%]'> Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.
                </p>
                <button className=' bg-[#5EB9F0] py-2 xtrasmall:py-2 xtrasmall:px-4 md:py-3 lg:py-2 text-center 3xl:py-4 3xl:px-7 text-[#FFFFFF] leading-[140%] lg:leading-[28.9px] xtrasmall:text-[12px] md:text-[14px]  tracking-[0%] rounded-[48px] xtrasmall:w-fit hover:bg-[#5c5ca7] 3xl:text-[18px]'>Learn More</button>
                 
            </div>
            <div className=" flex flex-col gap-[32px] mt-[12px] sm:mt-0 sm:gap-[32px] lg:gap-[12px] 2xl:gap-[32px] h-full w-full lg:w-[45%] justify-between">
                {
                    data.map((value, index) => {
                        return <StrategyCard key={index}
                            numberContent={value.numberContent}
                            h3Content={value.h3Content}
                            pContent={value.pContent}
                        />

                    })
                }

            </div>
        </div>
    )
}

export default Strategy