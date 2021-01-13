import React from 'react'
import course from '../../utils/course.png'
import {BiRupee} from 'react-icons/bi'
import {GiStopwatch} from 'react-icons/gi'

const percentage = "54,100"
function Card(props) {
    console.log(props)
    return (
        <div className='card'>
                    <img src={course} alt='course' />
                    <h2>{props.Course}</h2>
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
                                strokeDasharray={percentage}
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="9" y="17.35" className="percentage" style={{fontSize:'8px'}}>{percentage.split(',')[0]}%</text>
                            </svg>
                        </div>
                        </div>
                    </div>
                    <div className='dura'>
                        <p className='duration'><span><GiStopwatch/> </span>Duration - 12 Weeks</p>
                    </div>                    
                    <button>Get Started</button>
                </div>
    )
}

export default Card
