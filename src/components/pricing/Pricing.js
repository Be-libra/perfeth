import React,{useState,useEffect} from 'react'
// import course from '../../utils/course.png'
import {GiStopwatch} from 'react-icons/gi'
// import pricingLeftBg from '../../utils/pricingLeftBg.png'
// import pricingRightBg from '../../utils/pricingRightBg.png'
// import hexagon from '../../utils/hexagon.png'
import {BiRupee} from 'react-icons/bi'

import './style-comp/pricing.scss'
import Card from './Card.js'
import CardV1 from './CardV1'

const courses=[
    'Reactjs',
    'Nodejs',
    'Python',
    'Data Analysis'
]
function Pricing() {
    console.log(courses[0])
    const [loadCount,setLoadCount] = useState(3)

    const loadMore=()=>setLoadCount(loadCount+1)


    return (
        <div className='pricing' id='pricing'>
            <div className='left-bg'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/pricingLeftBg.png' alt='bg' />
            </div>
            <div className='right-bg'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/pricingRightBg.png' alt='right-bg' />
            </div>
            <div className='hexagon-1'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/hexagon.png' alt='hexagon' />
            </div>
            <div className='hexagon-2'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/hexagon.png' alt='hexagon' />
            </div>
            <div className='hexagon-3'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/hexagon.png' alt='hexagon' />
            </div>
            <p >PRICING</p>
            <h1>We At Perfeth Invest In You</h1>
            <h3>Start your perfect course by paying just 20% and the rest after you get a successful placement.</h3>
            {/* <div className='pricing-cards'>
               { 
               Array.apply(null, {length: loadCount }).map((e,i)=><Card key={i} courseNo={i} Course={courses[i]}/>)
               }
            </div>     */}
            <CardV1 />
            <button className='load-more' onClick={loadMore}>Load More</button>
        </div>
    )
}

export default Pricing
