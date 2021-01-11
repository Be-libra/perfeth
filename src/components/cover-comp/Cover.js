import React from 'react'
import {BsArrowRightShort,BsArrowRight} from 'react-icons/bs'
import './style-comp/cover.scss'
import coverRight from '../../utils/coverRight.png'
import graph from '../../utils/graph.png'

function Cover() {
    return (
        <div className='cover-container'>
           <div className='left'>
               <div className='cover-heading'>
                   <h1>Define your future with<br/><span>Experience</span></h1>
                   <p>Our comprehensive program takes you from foundations to specializations that create impacts.</p>
                   <div className='button'>
                        <p>get started</p>
                        <BsArrowRight className='arrow-on-hover' />
                   </div>
               </div>
            </div> 
           <div className='right'>
               <div className='right-image'>
                   <img src={coverRight} alt='coverRight' />
               </div>
               <div className='graph-image'>
                   <img src={graph} alt='graph' />
               </div>
           </div>
        </div>
    )
}

export default Cover
