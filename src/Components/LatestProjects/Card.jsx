import React from 'react'

const Card = ({ img, title, purpose }) => {
    return (
        <>
            <img src={img} alt="" className='h-[110px] xtrasmall:h-[140px] sm:h-full  lg:h-full' />
            <h3 className='text-[#343F52] font-[urbanist] text-[10px] xtrasmall:text-[12px] sm:text-[16px] md:text-[18px] lg:text-[23px] xl:text-[28px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] leading-[120%] lg:leading-[32.2px] xl:leading-[36.2px] 3xl:leading-[38.2px] tracking-[0%] font-semibold'>  {title} </h3>
            <p className='text-[#9499A3] text-[8px] xtrasmall:text-[12px] sm:text-[14px] font-[urbanist] font-semibold xl:text-[20px] 2xl:text-[24px] 3xl:text-[26px] 4xl:text-[28px]'>{purpose}  </p>

        </>
    )
}

export default Card