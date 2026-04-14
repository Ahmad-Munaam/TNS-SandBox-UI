import React, {useState} from 'react'
import FaqCard from './FaqCard';
import '../../Font.css'
const Faqs = () => {
    const [getIndex, setGetIndex] = useState(null)
    const faqData = [
        {
            "Question": "How do I get my subscription receipt?",
            "Answer": "You can download your subscription receipt anytime from your account’s billing section."
        },
        {
            "Question": "Can I cancel my subscription at any time?",
            "Answer": "Yes, you can cancel whenever you want. Your plan will remain active until the current billing cycle ends."
        },
        {
            "Question": "Do you offer customer support?",
            "Answer": "Absolutely. Our support team is available 24/7 through live chat and email assistance."
        },
        {
            "Question": "Is my personal data secure?",
            "Answer": "Yes, we use advanced encryption and follow industry-standard security practices to protect all your data."
        }
    ];

    return (
        <div className='w-[85%] mx-auto flex justify-between gap-[48px] md:gap-[24px] lg:flex-row flex-col'>
            <div className="one w-full lg:w-[47%] flex flex-col lg:justify-center  gap-[12px] lg:gap-[18px] xl:w-[50%] ">
                <h2 className='text-[#5EB9F0] font-[urbanist] text-[16px] font-semibold leading-[120%] tracking-[0.4px] uppercase 3xl:text-[20px]'> FAQ</h2>
                <h3 className=' hidden xl:flex flex-col  font-[urbanist] text-[#343F52]'>
                    <span className='xl:text-[36px] 2xl:text-[42px]  tracking-[0%] font-semibold'>If you don't see an answer to</span>
                    <span className='xl:text-[36px] 2xl:text-[42px] leading-[50.4px] xl:leading-[42.4px] tracking-[0%] font-semibold'>your question, you can send us</span>
                    <span className='xl:text-[36px] 2xl:text-[42px]  tracking-[0%] font-semibold'>an email from your contact form</span>
                </h3>
                 <h3 className='xl:hidden flex flex-col font-[urbanist] text-[#343F52]'>
                    <span className='text-[28px]  tracking-[0%] font-semibold leading-[120%] md:leading-[140%] md:text-[30px]'>If you don't see an answer to your question, you can send us an email from your contact form</span>
                </h3>
                <p className='text-[#60697B] leading-[28.9px] 4xl:leading-[34.9px] tracking-[0%] font-medium text-[14px] md:text-[16px] 2xl:text-[18px] 4xl:text-[22px]'>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                    sem nec elit. Nullam quis risus eget urna mollis ornare.
                </p>

                <button className='bg-[#5EB9F0] lg:block hidden px-5 py-3 rounded-[56px] text-white text-[17px] leading-[28.9px] tracking-[0%] w-fit mt-[15px] 4xl:px-7 4xl:py-5 4xl:text-[22px] hover:bg-[#056a9c] transition-colors duration-500 ease-in'>ALL FAQ</button>

                <button className='bg-[#5EB9F0] lg:hidden px-5 py-3  rounded-[56px] text-white text-[14px] leading-[140%] tracking-[0%] w-fit mt-[5px] hover:bg-[#056a9c] transition-colors duration-500 ease-in'>ALL FAQ</button>
            </div>
            <div className="two w-full lg:w-[45%] flex flex-col justify-between gap-[12px] ">
                {
                    faqData.map((value, index) => 
                        <FaqCard key={index}
                            question={value.Question}
                            answer={value.Answer} 
                            indexOfQuestion={index}
                            getIndex={getIndex}
                            setGetIndex={setGetIndex}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default Faqs