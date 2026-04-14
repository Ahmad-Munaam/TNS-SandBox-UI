import React, { useRef } from 'react'
import image1 from '../../assets/images/LatestProjects/6 → Figure → Link → sp1.jpg.png'
import image2 from '../../assets/images/LatestProjects/6 → Figure → Link → sp2.jpg.png'
import '../../App.css'
import Card from './Card'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
const LatestProjects = () => {
    const ref = useRef()
    const latestProjectData = [
        {
            "image": image1,
            "title": "Cras Fermentum Sem",
            "purpose": "Mobile Design"
        },
        {
            "image": image2,
            "title": "Venenatis Euismod Vehicula",
            "purpose": "Web Design"
        },
        {
            "image": image1,
            "title": "Cras Fermentum Sem",
            "purpose": "Mobile Design"
        }

    ]
    const handleScrolling = (direction) => {
        if (direction === 'left') {
            ref.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            })
        }
        else {
            ref.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className=' w-[98%] sm:w-[92.5%] ml-auto flex flex-col items-center gap-[12px] xl:gap-[16px] 3xl:gap-[20px] 4xl:gap-[22px]'>
            <h2 className=' text-[#5EB9F0] text-[17px] leading-[50%] sm:leading-[21.6px] lg:leading-[100%] tracking-[0.4px] font-semibold'>LATEST PROJECTS</h2>
            <p className=' hidden text-center xtrasmall:flex flex-col text-[#343F52] font-semibold leading-[120%] tracking-[0%] text-[22px] md:text-[28px] lg:text-[32px] xl:leading-[50.4px] xl:text-[42px] 3xl:text-[46px] 4xl:text-[48px] 3xl:leading-[52.4px] 4xl:leading-[56.4px]'>
                {/* leading-[50.4px] */}
                <span> Check out some of our awesome projects </span>
                <span>  with creative ideas and great design.  </span>
            </p>
            <p className=' xtrasmall:hidden  text-center flex flex-col text-[#343F52] font-semibold leading-[120%] tracking-[0%] text-[20px]'>
                Check out some of our awesome projects
                with creative ideas and great design.
            </p>
            <div className="flex gap-3 w-full overflow-x-auto scroll-smooth h-auto your-element sm:mt-[18px]" ref={ref}>
                {
                    latestProjectData.map((value, index) => {
                        return <div key={index} className='w-[35%] lg:w-[38%]  flex flex-col items-start gap-[8px] sm:gap-[8px] md:gap-[12px] xl:gap-[16px] 3xl:gap-[18px]  h-auto flex-shrink-0'>
                            <Card
                                img={value.image}
                                title={value.title}
                                purpose={value.purpose}
                            />
                        </div>
                    })
                }
                <Card />
            </div>

            <div className="flex justify-center items-center gap-[8px] mt-[12px]">
                <button className='w-[32px] h-[32px] sm:w-[42px] sm:h-[42px]  md:w-[48px] md:h-[48px] lg:w-[56px]  lg:h-[56px] 2xl:w-[62px] 2xl:h-[62px] rounded-full flex justify-center items-center bg-[#D7EDFA] hover:bg-[#6EC0F1] hover:text-[white]'
                    onClick={() => {
                        handleScrolling('right')
                    }}
                >
                    <FaArrowLeft />
                </button>
                <button className=' h-[32px] w-[32px] 2xl:w-[62px] 2xl:h-[62px] sm:w-[42px] sm:h-[42px] md:w-[48px] md:h-[48px] lg:w-[56px]  lg:h-[56px] rounded-full flex justify-center items-center bg-[#D7EDFA] hover:bg-[#6EC0F1] hover:text-[white]'

                    onClick={() => {
                        handleScrolling('left')
                    }}
                >
                    <FaArrowRight />
                </button>
            </div>

        </div>
    )
}

export default LatestProjects