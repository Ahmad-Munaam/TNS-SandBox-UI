import React, { useEffect, useRef, useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import servicesBg from './assets/images/Services/div.overflow-hidden.png'
import Strategy from './Components/Strategy/Strategy'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
import bottomBorder from './assets/images/WhyChooseUs/div.overflow-hidden.png'
import ProjectsData from './Components/TeamAndProjects/ProjectsData'
import Team from './Components/TeamAndProjects/Team/Team'
import LatestProjects from './Components/LatestProjects/LatestProjects'
import Customers from './Components/Customers/Customers'
import customerBg from './assets/images/Customers/SVG.png'
import Faqs from './Components/FAQ/Faqs'
import Footer from './Components/Footer/Footer'
import footerBg from './assets/images/Footer/div.overflow-hidden.png'
import { TiArrowUpThick } from "react-icons/ti";
const App = () => {
  const [fixBtn, setFixBtn] = useState(true)

  const ref = useRef()
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.isIntersecting ? setFixBtn(false) : setFixBtn(true)
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
  }, [])
  return (
    <div className=' w-full min-w-[380px] flex flex-col gap-[56px] '>
     <TiArrowUpThick 
    className={`fixed right-[10px] lg:bottom-[20px] bottom-[10%] text-[white] bg-[#086999] rounded-full size-[48px] md:size-[56px] lg:size-[62px] 3xl:size-[72px] rotate-[-10deg] z-50 p-2 cursor-pointer hover:bg-[#5454e0] transition-all duration-700 ease-in-out ${fixBtn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
    onClick={() => {
        document.getElementById('header').scrollIntoView({
            behavior: 'smooth'
        })
    }} 
/>
      <div className="mainContainer max-w-[1920px] mx-auto w-full" id='header' ref={ref}>
        <Header />
      </div>
      <div className="HeroContainer w-full my-[56px]">
        <div className="w-full max-w-[1920px] mx-auto">
          <Hero />
        </div>
      </div>

      <div className="ServicesMainContainer w-full  lg:py-[56px] relative">

        <img src={servicesBg} alt="" className='w-full max-w-[1920px] mx-auto z-0  m-0 p-0
       '/>
        <div className="w-full max-w-[1920px] py-[32px] p-0  mx-auto bg-gradient-to-b from-[#F1F8FE] to-[#F7F8F8]">
          <Services />
        </div>
      </div>

      <div className="StrategyMainContainer w-full my-[56px] ">
        <div className=' max-w-[1920px] mx-auto'>
          <Strategy />
        </div>
      </div>
      <div className="WhyChooseUsMainContainer w-full">
        <div className=' max-w-[1920px] mx-auto bg-gradient-to-b from-[#F6F6F6] to-[#F4F9FD] my-[12px] relative pb-[66px] lg:pb-[98px] 2xl:pb-[120px]'>
          <img src={bottomBorder} alt="" className=' absolute bottom-0 lg:bottom-[-15%]w-full z-0' />
          <WhyChooseUs />
        </div>
      </div>
      <div className="teamMainContainer w-full my-[56px]">
        <div className=' max-w-[1920px] mx-auto flex flex-col gap-[32px]' >
          <ProjectsData />
          <Team />
        </div>
      </div>
      <div className="LatestProjectMainContainer w-full my-[18px] md:my-[56px]">
        <div className="max-w-[1920px] mx-auto" id='projects'>
          <LatestProjects />
        </div>
      </div>
      <div className='CustomerMainContainer w-full flex-col flex gap-0 py-[18px]'>
        <img src={customerBg} alt="" className=' w-full max-w-[1920px] mx-auto' />
        <div className=' max-w-[1920px] mx-auto  bg-gradient-to-b from-[#F0F8FE] to-[#F6F6F6] w-full py-[18px]'>
          <Customers />
        </div>
      </div>

      <div className='FaqMainContainer w-full py-[18px]'>
        <div className='max-w-[1920px] mx-auto'>
          <Faqs />
        </div>
      </div>

      <div className="FooterMainContainer w-full pt-[18px] flex flex-col gap-0 relative">
        <div className='max-w-[1920px] mx-auto h-auto relative'>

        <img src={footerBg} alt="FooterBgImage" className='w-full object-cover' />
        {/* bg-gradient-to-t from-[#343F52] to-current */}
        <div className="absolute h-[8px] w-full bottom-0 bg-[#343F52]"></div>
        </div>

        <div className="max-w-[1920px] mx-auto bg-[#343F52] w-full py-[18px] " id='contact'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App