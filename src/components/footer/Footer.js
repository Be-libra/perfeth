import React from 'react'
import './style-comp/footer.scss'
import {BiCopyright} from 'react-icons/bi'
import LogoP from '../../utils/LogoP.svg'

function Footer() {
    return (
        <div className='footer'>

            <div className='footer-container'>
                <div className='one'>
                    <div className='left'>
                        <h1>Begin Your Journey</h1>
                        <p>By the same illusion which lifts the horizon of the sea to the level of the spectator.</p>
                    </div>
                    <div className='right'>
                        <button>Get Started</button>
                        <button>Contact</button>
                    </div>
                </div>
                <div className='two'>
                    <p>Apparently we had reached a great height in the atmosphere.</p>
                    <div className='contact'>
                        <h2>Contact</h2>
                        <p>Email: contact@perfeth.academy</p>
                        <p>Phone: +1 (234) 567-89-00</p>
                    </div>
                    <div className='subscribe'>
                        <h2>subscribe</h2>
                        <div className='form'>
                            <input type='text' placeholder='Email'/>   
                            <button className='submit'>Submit</button> 
                        </div>
                    </div>
                </div>
                <div className='three'>
                    <div className='privacyPolicy'>
                        <a href='/privacy-policy'>Privacy policy</a>
                        <a href='#'>Terms and Condition</a>
                    </div>
                    <p><span><img src={LogoP} alt='logo'/></span>Copyright <span><BiCopyright /> </span>2021-Perfeth Academy LLC. All rights reserved.
 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
