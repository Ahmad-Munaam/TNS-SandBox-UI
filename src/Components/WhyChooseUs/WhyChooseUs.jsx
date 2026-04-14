import React, {  useState } from 'react'
import mainImage from '../../assets/images/WhyChooseUs/Figure → i22.png.png'
import vector from '../../assets/images/WhyChooseUs/Vector.png'
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import '../../App.css'
import '../../Font.css'
const WhyChooseUs = () => {
  const [indexState, setIndexState] = useState(null)
 
  const chooseData = [
    {
      "h3Heading": "Professional Design",
      "h3Content": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    }, {
      "h3Heading": "Top-Notch Support",
      "h3Content": "PFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    },
    {
      "h3Heading": "Header and Slider Options",
      "h3Content": "PFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel."
    }
  ]
  return (
    <div className=' w-[85%] mx-auto flex flex-col lg:flex-row gap-[42px] lg:gap-[56px] xl:gap-[72px]
    2xl:gap-[86px] 3xl:gap-[98px] lg:items-center z-[9999]'>
      <div className="h-full w-full lg:w-[55%] flex justify-center ">
      <img src={mainImage} alt=""  className=' lg:h-full lg:w-full object-cover'/>
      </div>
      <div className=' flex flex-col gap-[16px] lg:gap-[14px] flex-1 xl:gap-[16px] 2xl:gap-[20px] 3xl:gap-[22px] 4xl:gap-[24px] '>
        <h2 className=' text-[#5EB9F0] font-semibold text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-[urbanist] leading-[20.25px] tracking-[0.4px] '> WHY CHOOSE US? </h2>
        <h3 className=' font-[urbanist] font-semibold lg:flex-col lg:flex text-[#343F52] text-[32px] leading-[140%] lg:leading-[120%] tracking-[0%]
        md:text-[38px] lg:text-[34px] xl:text-[36px] 2xl:text-[42px] 3xl:text-[46px]'>
          <span> We bring solutions to </span>
          <span> make life easier. </span>
        </h3>
        {
          chooseData.map((value, index) => {
            return <div className="one flex flex-col gap-[8px] lg:gap-[14px] 2xl:gap-[16px]" key={index}>
              <div className={` ${indexState===index ? `max-h-[196px] transition-all duration-500 ease-in` : `h-auto`} flex items-center gap-[12px]`}>
                {indexState === index ? <MdKeyboardArrowUp onClick={()=>{
                    setIndexState(null) }} className=' cursor-pointer size-[24px] text-[#5EB9F0] ' /> :
                  <IoIosArrowDown className=' text-[#5EB9F0] cursor-pointer  size-[24px]'  onClick={() => { setIndexState(index) }} />
                }
                <h4 className={`${indexState === index ? `text-[#5EB9F0]` : `text-[#343F52]`} font-semibold text-[18px] md:text-[22px]  tracking-[0%] font-[urbanist] xl:text-[24px] 2xl:text-[26px] 3xl:text-[28px] 2xl:leading-[30.1px]`}>
                  {/* leading-[30.1px] */}
                  {value.h3Heading}
                </h4>
              </div>
              {/* ${indexState === index ? `block ` : `hidden`} */}
              <p id='pContentClass' className={`  font-[urbanist] ${indexState=== index ? `max-h-[500px] opacity-100` : `opacity-0 max-h-0 z-0 pointer-events-none`} transition-all duration-300 ease-in font-medium xtrasmall:text-[14px] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[16px] leading-[160%]  tracking-[0%] text-[#60697B] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] 2xl:leading-[160%]`} >

                {/* leading-[28.9px] */}
                {value.h3Content}
              </p>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default WhyChooseUs