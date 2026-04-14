import React from 'react'
import '../../Font.css'
import '../../App.css'

const StrategyCard = ({ numberContent, h3Content, pContent }) => {
    return (
        <div className='h-[80px] md:h-[110px] 4xl:h-[140px] w-[90%] xtrasmall:w-[90%] sm:w-[95%] md:w-[90%] flex justify-center items-center font-[urbanist] shadow-lg rounded-lg transition-transform duration-500 ease-in-out hover:translate-x-[10%]'>
            <div className="w-[90%] mx-auto flex items-center gap-[12px]">
                <div className='w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#E5F4FD] flex justify-center items-center text-[#5EB9F0] font-semibold text-[14px] md:text-[16px] lg:text-[22px] leading-[22px] tracking-[0%]'>
                    {numberContent}
                </div>
                <div className="content flex flex-col gap-[8px] md:gap-[4px] 3xl:gap-[12px] 4xl:gap-[18px]">
                    <h3 className='text-[#343F52] leading-[100%] md:leading-[29px] tracking-[0%] text-[14px] md:text-[16px] sm:text-[16px] font-semibold lg:text-[20px] 4xl:text-[24px]'>
                        {h3Content}
                    </h3>
                    <p className='text-[#60697B] font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] leading-[120%] md:leading-[28.9px] lg:leading-[24.9px] tracking-[0%] 3xl:text-[22px] 4xl:text-[24px]'>
                        {pContent}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StrategyCard