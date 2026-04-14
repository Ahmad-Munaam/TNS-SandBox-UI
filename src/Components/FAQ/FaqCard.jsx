import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import '../../Font.css'

const FaqCard = ({ question, answer, indexOfQuestion, getIndex, setGetIndex }) => {
    const isOpen = getIndex === indexOfQuestion
    
    return (
        <div className={`p-[4px] xtrasmall:p-[8px] w-full ${isOpen ? 'h-auto' : 'h-[78px]'} 3xl:${isOpen ? 'h-auto' : 'h-[86px]'} bg-white shadow-lg flex flex-col rounded-xl transition-all duration-500 ease-in-out overflow-hidden`}>
            <div className="flex w-full gap-[12px] md:w-[95%] mx-auto justify-between items-center min-h-[78px] 3xl:min-h-[86px]">
                <div className='w-[5%] text-blue-500'>
                    {isOpen ? 
                        <IoIosArrowUp onClick={() => setGetIndex(null)} className='cursor-pointer 4xl:size-[26px]' /> :
                        <IoIosArrowDown onClick={() => setGetIndex(indexOfQuestion)} className='cursor-pointer 4xl:size-[26px]' />
                    }
                </div>
                <div className='flex flex-col gap-[12px] w-full'>
                    <p className='w-[95%] text-[#343F52] text-[14px] sm:text-[16px] md:text-[18px] font-semibold leading-[30.1px] tracking-[0%] font-[urbanist] 3xl:text-[20px] 4xl:text-[22px]'>
                        {question}
                    </p>
                </div>
            </div>
            
           
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-[12px]' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <p className='text-[14px] md:text-[16px] lg:text-[15px] font-medium leading-[140%] tracking-[0%] font-[urbanist] text-[#60697B] w-[95%] mx-auto pb-[12px] 3xl:text-[18px] 4xl:text-[20px]'>
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default FaqCard