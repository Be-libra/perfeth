import React from 'react'
import stepOne from '../../utils/stepOne.png'
import stepTwo from '../../utils/stepTwo.png'
import stepThree from '../../utils/stepThree.png'
import successBg from '../../utils/successBg.png'
import successRightBg from '../../utils/successRightBg.png'
import './style-comp/journey.scss'

function SuccessJourney() {
    return (
        <div className='success-journey'>
            <div className='wave-bg'>
                <img src={successBg} alt='wave-bg'/>
            </div>
            <div className='right-bg'>
                <img src={successRightBg} alt='waveRight-bg'/>
            </div>
            <p>YOUR journey to SUCCESS</p> 
            <div className='heading'>
                <h1>How Perfeth Academy Works</h1>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img src={stepOne} alt='stepone' />
                    <div className='card-body'>
                        <h3>Step One</h3>
                        <p>Learn how to code from trusted professionals and work on a real life project</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={stepTwo} alt='steptwo' />
                    <div className='card-body'>
                        <h3>Step Two</h3>
                        <p>Get Quality Work Exposure And Grow Your Connection or build a startup</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={stepThree} alt='stepthree' />
                    <div className='card-body'>
                        <h3>Step Three</h3>
                        <p>Get introduced to Perfeth partner companies for their openings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessJourney
