import React from 'react'
import course from '../../utils/course.png'
import {GiStopwatch} from 'react-icons/gi'
import pricingLeftBg from '../../utils/pricingLeftBg.png'
import pricingRightBg from '../../utils/pricingRightBg.png'
import hexagon from '../../utils/hexagon.png'
import {BiRupee} from 'react-icons/bi'

import './style-comp/pricing.scss'

function Pricing() {
    return (
        <div className='pricing'>
            <div className='left-bg'>
                <img src={pricingLeftBg} alt='bg' />
            </div>
            <div className='right-bg'>
                <img src={pricingRightBg} alt='right-bg' />
            </div>
            <div className='hexagon-1'>
                <img src={hexagon} alt='hexagon' />
            </div>
            <div className='hexagon-2'>
                <img src={hexagon} alt='hexagon' />
            </div>
            <div className='hexagon-3'>
                <img src={hexagon} alt='hexagon' />
            </div>
            <p>PRICING</p>
            <h1>We At Perfeth Invest In You</h1>
            <h3>You Pay 20% and rest paid by your employer when Perfeth gets you the job</h3>
            <div className='pricing-cards'>
                <div className='card'>
                    <img src={course} alt='course' />
                    <h2>Reactjs</h2>
                    <div className='price'>
                        <h2>You Pay <span><BiRupee/></span>99/wk</h2>
                    </div>
                    <div className='card-body'>
                        <div className='left'>
                            <p>Closes In</p>
                            <div className='line'></div>
                            <p style={{fontSize:'1.5rem',fontWeight:'600',padding:'0',marginTop:'3px'}}>5</p>
                            <p style={{marginTop:'3px'}}>Days</p>
                        </div>
                        <div className='right'>
                        <div className="single-chart">
                            <p>Booked</p>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                            <path className="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path className="circle"
                                stroke-dasharray="72, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="9" y="17.35" className="percentage" style={{fontSize:'8px'}}>72%</text>
                            </svg>
                        </div>
                        </div>
                    </div>
                    <div className='dura'>
                        <p className='duration'><span><GiStopwatch/> </span>Duration - 12 Weeks</p>
                    </div>                    
                    <button>Get Started</button>
                </div>
                <div className='card'>
                    <img src={course} alt='course' />
                    <h2>Reactjs</h2>
                    <div className='price'>
                        <h2>You Pay <span><BiRupee/></span>99/wk</h2>
                    </div>
                    <div className='card-body'>
                        <div className='left'>
                            <p>Closes In</p>
                            <div className='line'></div>
                            <p style={{fontSize:'1.5rem',fontWeight:'600',padding:'0',marginTop:'3px'}}>5</p>
                            <p style={{marginTop:'3px'}}>Days</p>
                        </div>
                        <div className='right'>
                        <div className="single-chart">
                            <p>Booked</p>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                            <path className="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path className="circle"
                                stroke-dasharray="64, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="9" y="17.35" className="percentage" style={{fontSize:'8px'}}>64%</text>
                            </svg>
                        </div>
                        </div>
                    </div>
                    <div className='dura'>
                        <p className='duration'><span><GiStopwatch/> </span>Duration - 12 Weeks</p>
                    </div>                    
                    <button>Get Started</button>
                </div>
                <div className='card'>
                    <img src={course} alt='course' />
                    <h2>Reactjs</h2>
                    <div className='price'>
                        <h2>You Pay <span><BiRupee/></span>99/wk</h2>
                    </div>
                    <div className='card-body'>
                        <div className='left'>
                            <p>Closes In</p>
                            <div className='line'></div>
                            <p style={{fontSize:'1.5rem',fontWeight:'600',padding:'0',marginTop:'3px'}}>5</p>
                            <p style={{marginTop:'3px'}}>Days</p>
                        </div>
                        <div className='right'>
                        <div className="single-chart">
                            <p>Booked</p>
                            <svg viewBox="0 0 36 36" className="circular-chart orange">
                            <path className="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path className="circle"
                                stroke-dasharray="54, 100"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="9" y="17.35" className="percentage" style={{fontSize:'8px'}}>54%</text>
                            </svg>
                        </div>
                        </div>
                    </div>
                    <div className='dura'>
                        <p className='duration'><span><GiStopwatch/> </span>Duration - 12 Weeks</p>
                    </div>                    
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Pricing
