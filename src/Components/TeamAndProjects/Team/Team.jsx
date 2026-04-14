import React from 'react'
import TeamCards from './TeamCards'
import profile1 from '../../../assets/images/TeamCards/te1.jpg (1).png'
import profile2 from '../../../assets/images/TeamCards/te2.jpg.png'
import profile3 from '../../../assets/images/TeamCards/te3.jpg.png'
import profile4 from '../../../assets/images/TeamCards/te4.jpg.png'
const Team = () => {
    const teamCardsData = [
        {
            "profile": profile1,
            "Name": "Coriss Ambady",
            "role": "Financial Analyst",
            "description": "Fermentum massa justo sit amet risus morbi leo."
        },
        {
            "profile": profile2,
            "Name": "Cory Zamora",
            "role": "Marketing Specialist",
            "description": "Fermentum massa justo sit amet risus morbi leo."
        },
        {
            "profile": profile3,
            "Name": "Nikolas Brooten",
            "role": "Sales Manager",
            "description": "Fermentum massa justo sit amet risus morbi leo."
        },
        {
            "profile": profile4,
            "Name": "Jackie Sanders",
            "role": "Investment Planner",
            "description": "Fermentum massa justo sit amet risus morbi leo."
        }
    ]
    return (
        <div className=' w-[85%] mx-auto grid grid-cols-1 place-items-center 2xl:place-items-stretch  sm:grid-cols-2 mdmid:grid-cols-3  2xl:grid-cols-4 gap-[24px] py-[12px]'>

            {
                teamCardsData.map((value, index) => {
                    return <div key={index}>
                        <TeamCards
                            profile={value.profile}
                            Name={value.Name}
                            role={value.role}
                            description={value.description} />
                    </div>
                })
            }
        </div>
    )
}

export default Team