import React from 'react'
import figureBg from '../../utils/figureBg.png'
import './style-comp/vision.scss'
import visionRightBg from '../../utils/visionRightBg.png'
import bag from '../../utils/bag.png'
import like from '../../utils/like.png'
import dots from '../../utils/dots.png'
import {FaThumbsUp} from 'react-icons/fa'
import {IoBriefcase} from 'react-icons/io5'

function Vision() {
    return (
        <div className='vision'>
            <div className='vision-figure'>
                <img src={figureBg} alt='figure'/>
            </div>
            <div className='vision-rightBg'>
                <img src={visionRightBg} alt='vision-right-bg' />
            </div>
            <div className='vision-container'>
                <div className='left'>
                    <p>A VISIONARY MOVEMENT</p>
                    <p>We have created world's leading curriculum 
                        and real life projects exposure creating 
                        best engineers for new world companies.</p>
                    <button>Get Started</button>
                </div>
                <div className='right'>
                    <div className='top-dots'>
                        <img src={dots}  alt='dots-bg'/>
                    </div>
                    <div className='bottom-dots'>
                        <img src={dots}  alt='dots-bg'/>
                    </div>
                    <div className='vision-right'>
                        <div className='thumbs-up'>
                            <img src={like} alt='bag' />
                        </div>
                        <div className='briefCase'>
                            <img src={bag} alt='bag' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
