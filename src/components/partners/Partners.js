import React from 'react'
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
// import m from './m.svg'
import './style-comp/partners.scss'

function Partners() {
    return (
        <div className='partners'>
            <h3>TOP TECH COMPANIES HIRE FROM US</h3>
            <div className='all-partners'>
                <div className='partner'>
                    <img src={airtel} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={brokers} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={casone} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={nobroker} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={technoserve} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={deepsource} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={loophole} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={onco} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={cleartax} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={saggezza} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={gromo} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={clinikk} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={landmark} alt='mx-player'/>
                </div>
                <div className='partner'>
                    <img src={stilt} alt='mx-player'/>
                </div>
                {/* <div className='partner'>
                    <img src={m} alt='mx-player'/>
                </div> */}
            </div>
        </div>
    )
}

export default Partners
