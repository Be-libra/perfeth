import React from 'react'
// import stepOne from '../../utils/stepOne.png'
// import stepTwo from '../../utils/stepTwo.png'
// import stepThree from '../../utils/stepThree.png'
// import successBg from '../../utils/successBg.png'
// import successRightBg from '../../utils/successRightBg.png'
import './style-comp/journey.scss'
import 'pure-react-carousel/dist/react-carousel.es.css';

function SuccessJourney() {
    return (
        <div className='success-journey'>
            <div className='wave-bg'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/successBg.png' alt='wave-bg'/>
            </div>
            <div className='right-bg'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/successRightBg.png' alt='waveRight-bg'/>
            </div>
            <p  className='tag'>Your Journey to success</p> 
            <div className='heading'>
                <h1>How Does Perfeth Academy Works ?</h1>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/stepOne.png' alt='stepone' />
                    <div className='card-body'>
                        <h3>Step One</h3>
                        <p>  Learn to work on real-life projects and built a flourishing GitHub profile</p>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/stepTwo.png' alt='steptwo' />
                    <div className='card-body'>
                        <h3>Step Two</h3>
                        <p>Earn experience, exposure, and reputation with quality education under experts</p>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/stepThree.png' alt='stepthree' />
                    <div className='card-body'>
                        <h3>Step Three</h3>
                        <p>Extend your connections with prominent entrepreneurs and professional developers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessJourney
