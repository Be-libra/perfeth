import React from 'react'
// import course from '../../utils/course.png'
import {BiRupee} from 'react-icons/bi'
import {GiStopwatch} from 'react-icons/gi'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './card.scss'

function CardV1() {
    return (
        <div className='courses'>
            <div className='courses-card'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/course.png' alt='course' />
                <div className='price'>
                    <h2>You Pay <span><BiRupee/></span>99/wk</h2>
                </div>
                <div className='crd-body'>
                    <div className='course-desc'>
                        <div className='course-name'>
                            <h3>Introduction to Reactjs</h3>
                            <p className='duration'><span><GiStopwatch/> </span>Duration - 12 Weeks</p>
                        </div>
                        <p>Get quality exposure and grow your connection or build startup connection or build a startup</p>
                    </div>
                    <Link to='/contact-form'><Button>Get Started</Button></Link>
                </div>
            </div>
            <div className='courses-card'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/course.png' alt='course' />
                <div className='price'>
                    <h2>You Pay <span><BiRupee/></span>99/wk</h2>
                </div>
                <div className='crd-body'>
                    <div className='course-desc'>
                        <div className='course-name'>
                            <h3>Introduction to Nodejs</h3>
                            <p className='duration'><span><GiStopwatch/> </span>Duration - 12 Weeks</p>
                        </div>
                        <p>Get quality exposure and grow your connection or build startup connection or build a startup</p>
                    </div>
                    <Link to='/contact-form'><Button>Get Started</Button></Link>
                </div>
            </div>
            <div className='courses-card'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/course.png' alt='course' />
                <div className='price'>
                    <h2>You Pay <span><BiRupee/></span>99/wk</h2>
                </div>
                <div className='crd-body'>
                    <div className='course-desc'>
                        <div className='course-name'>
                            <h3>Introduction to Python</h3>
                            <p className='duration'><span><GiStopwatch/> </span>Duration - 12 Weeks</p>
                        </div>
                        <p>Get quality exposure and grow your connection or build startup connection or build a startup</p>
                    </div>
                    <Link to='/contact-form'><Button>Get Started</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default CardV1
