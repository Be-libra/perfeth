import React from 'react'
// import figureBg from '../../utils/figureBg.png'
import './style-comp/vision.scss'
// import visionRightBg from '../../utils/visionRightBg.png'
// import bag from '../../utils/bag.png'
// import like from '../../utils/like.png'
// import dots from '../../utils/dots.png'
import {FaThumbsUp} from 'react-icons/fa'
import {IoBriefcase} from 'react-icons/io5'

function Vision() {
    return (
        <div className='vision' id='about'>
            <div className='vision-figure'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/figureBg.png' alt='figure'/>
            </div>
            <div className='vision-rightBg'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/visionRightBg.png' alt='vision-right-bg' />
            </div>
            <div className='vision-container'>
                <div className='left'>
                    <p style={{fontSize:'1.2rem'}}>BOOST YOUR CARRER</p>
                    <h2>What Is Perfeth</h2>
                    <p>At <strong>Perfeth, </strong>we ensure the quality of community members by evaluating their profiles.</p>
                    <p>Engaging them through a <strong>meaningful relationship</strong> that leads to their professional success.</p>
                    <p>This is an <strong>invite only</strong> for <strong>experts</strong></p>
                    <a href='/contact-form'><button>Get Started</button></a>
                </div>
                <div className='right'>
                    <div className='top-dots'>
                        <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/dots.png'  alt='dots-bg'/>
                    </div>
                    <div className='bottom-dots'>
                        <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/dots.png'  alt='dots-bg'/>
                    </div>
                    <div className='vision-right'>
                        <div className='thumbs-up'>
                            <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/like.png' alt='bag' />
                        </div>
                        <div className='briefCase'>
                            <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/bag.png' alt='bag' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
