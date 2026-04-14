import React from 'react'
import '../../Font.css'
import imag1 from '../../assets/images/Customers/te1.jpg.png'
import imag2 from '../../assets/images/Customers/te2.jpg.png'
import imag3 from '../../assets/images/Customers/te3.jpg.png'
import imag4 from '../../assets/images/Customers/te4.jpg.png'
import imag5 from '../../assets/images/Customers/te5.jpg.png'
import imag6 from '../../assets/images/Customers/te6.jpg.png'
import CustomersCards from './CustomersCards'

const Customers = () => {
    const customersCardsData = [
        {
            "info": '“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”',
            "image": imag1,
            "NameOfCustomer": "Coriss Ambady",
            "customerWork": "Financial Analyst"

        },
        {
            "info": '“Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed.”',
            "image": imag2,
            "NameOfCustomer": "Cory Zamora",
            "customerWork": "Marketing Specialist"

        },
        {
            "info": '“Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.”',
            "image": imag3,
            "NameOfCustomer": "Nikolas Brooten",
            "customerWork": "Sales Manager"

        },
        {
            "info": '“Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum ac laoreet vitae.”',
            "image": imag4,
            "NameOfCustomer": "Coriss Ambady",
            "customerWork": "Financial Analyst"

        },

        {
            "info": '“Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.”',
            "image": imag5,
            "NameOfCustomer": "Laura Widerski",
            "customerWork": "Sales Specialist"
        },
        {
            "info": '“Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero.”',
            "image": imag6,
            "NameOfCustomer": "Jackie Sanders",
            "customerWork": "Investment Planner"
        }
    ]
    return (
        <div className='py-[18px] w-[85%] mx-auto flex  flex-col items-center gap-[12px]'>
            <h2 className=' text-[#5EB9F0] font-semibold font-[urbanist] text-[16px] leading-[21.1px] tracking-[0.4px]'>
                HAPPY CUSTOMERS
            </h2>
            <h3 className='hidden md:flex flex-col items-center'>
                <span className=' text-[#343F52] font-semibold text-[38px] lg:text-[42px] font-[urbanist] leading-[50.4px] tracking-[0%]'> Don't take our word for it. See what </span>
                <span className=' text-[#343F52] font-semibold text-[42px] font-[urbanist] leading-[50.4px] tracking-[0%]'>customers are saying about us. </span>
            </h3>
            <h3 className='flex md:hidden flex-col items-center'>
                <span className=' text-[#343F52] font-semibold text-[28px] text-center font-[urbanist] leading-[120%] tracking-[0%]'> Don't take our word for it. See what customers are saying about us.</span>
            </h3>
            {/* <div className="CustomersCards flex justify-center mt-[10px] lg:justify-between flex-wrap gap-[18px] lg:gap-0 lg:gap-y-[12px] items-start">
                {
                    customersCardsData.map((value) => {
                        return <CustomersCards
                            info={value.info} imag={value.image} NameOfCustomer={value.NameOfCustomer} customerWork={value.customerWork}
                        />
                    })
                }
            </div> */}
            <div className="CustomersCards columns-1 sm:columns-2 lg:columns-3 gap-[18px] space-y-[18px]">
                {
                    customersCardsData.map((value, index) => {
                        return <div key={index} className="break-inside-avoid mb-[18px]">
                            <CustomersCards
                                info={value.info}
                                imag={value.image}
                                NameOfCustomer={value.NameOfCustomer}
                                customerWork={value.customerWork}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default Customers