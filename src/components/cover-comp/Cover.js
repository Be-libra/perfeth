import React,{useState,useEffect} from 'react'
import {BsArrowRightShort,BsArrowRight} from 'react-icons/bs'
import './style-comp/cover.scss'
import coverRight from '../../utils/coverRight.png'
import graph from '../../utils/graph.png'
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Experience",
  "Knowledge",
  "Technique",
  "Coherence",
  "Perfeth Academy"
];

function Cover() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      5000 // every 3 seconds
    );
    },[]);
    return (
        <div className='cover-container'>
           <div className='left'>
                <div className='cover-heading'>
                   <h1>Define your future with</h1>
                   <span><TextTransition text={ TEXTS[index% TEXTS.length] } springConfig={ presets.gentle }
                    /></span>
                </div>
                   <p>Our comprehensive program takes you from foundations to specializations that create impacts.</p>
                   <div className='button'>
                        <p>get started</p>
                        <BsArrowRight className='arrow-on-hover' />
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
