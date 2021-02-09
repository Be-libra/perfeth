import React,{useState,useEffect} from 'react'
import airtel from './airtel.svg'
import brokers from './brokers.svg'
import casone from './casone.svg'
import nobroker from './nobroker.svg'
import technoserve from './technoserve.svg'
import deepsource from './deepsource.svg'
import loophole from './loophole.svg'
import cleartax from './cleartax.svg'
import saggezza from './saggezza.svg'
import gromo from './gromo.svg'
import onco from './onco.svg'
import landmark from './landmark.svg'
import clinikk from './clinikk.svg'
import stilt from './stilt.svg'
import m from './m.svg'
import mxplayer from './mxplayer.svg'
import './style-comp/partners.scss'
import CrossfadeImage from 'react-crossfade-image'


const IMAGES=[
    mxplayer,
    m,
    airtel,
]
const IMAGES2=[
    stilt,
    landmark,
    onco,
]
const IMAGES3=[
    brokers,
    casone,
    nobroker,
]
const IMAGES4=[
    cleartax,
    mxplayer,
    deepsource,
]
const IMAGES5=[
    technoserve,
    gromo,
    saggezza,
]
const IMAGES6=[
    m,
    loophole,
    clinikk,
]


function Partners() {

    const [index,setIndex]=useState(0)
    // const [image,setImage] =()
    useEffect(() => {
        const intervalId = setTimeout(() => {
            setIndex(index=>index+1)
        },4000);
        // console.log('hello')
    }, [index])

    return (
        <div className='partners'>
            <h3>TOP TECH COMPANIES HIRE FROM US</h3>
            <div className='all-partners'>
                <div className='partner'>
                    <img src={IMAGES[index%3]} />
                </div>
                <div className='partner'>
                    <img src={IMAGES2[index%3]} />
                </div>
                <div className='partner'>
                    <img src={IMAGES3[index%3]} />
                </div>
                <div className='partner'>
                    <img src={IMAGES4[index%3]} />
                </div>
                <div className='partner'>
                    <img src={IMAGES5[index%3]} />
                </div>
                <div className='partner'>
                    <img src={IMAGES6[index%3]} />
                </div>
            </div>
        </div>
    )
}

export default Partners
