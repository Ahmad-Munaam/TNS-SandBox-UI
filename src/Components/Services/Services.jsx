import React from 'react'
import Card from './Card'
import image1 from '../../assets/images/Services/CardImages/Figure → i19.png.png'
import image2 from '../../assets/images/Services/CardImages/Figure → i24.png.png'
import image3 from '../../assets/images/Services/CardImages/Figure → i18.png.png'
const Services = () => {
    return (
        <div className='z-50 w-[85%] mx-auto my-[56px] flex flex-col items-center gap-[24px]'>
            <div className="w-full lg:w-full  flex flex-col items-center gap-[8px] lg:gap-[12px]">
                <h2 className=' text-[#5EB9F0] text-[16px] font-[urbanist] font-semibold leading-[21.6px] tracking-[0.4px]'>WHAT WE DO?</h2>
                <p className=' text-[#343F52] flex flex-col font-[urbanist] text-[26px]  md:text-[32px] leading-[100%] lg:text-[42px] font-semibold lg:leading-[50.4px] tracking-[0%] text-center'>
                    <span> The service we offer is specifically  </span>
                    <span> designed to meet your needs. </span>
                </p>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                <Card
                    images={image1}
                    hContent="Web Design"
                    pContent="Nulla vitae elit libero, a pharetra augue.
                Donec id elit non mi porta gravida at eget.
                Fusce dapibus tellus."
                />
                <Card
                    images={image2}
                    hContent="Graphic Design"
                    pContent="Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur."
                />

                <Card
                    images={image3}
                    hContent="3D Animation"
                    pContent="Cras justo odio, dapibus ac facilisis in,
egestas eget quam. Praesent commodo
cursus magna scelerisque."
                />
            </div>

        </div>
    )
}
export default Services