import React from 'react'
import './style-comp/footer.scss'
import {BiCopyright} from 'react-icons/bi'
import LogoP from '../../utils/LogoP.svg'
import {Link} from 'react-router-dom'

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
                        <Link to='/contact-form'><button>Get Started</button></Link>
                        <Link to='/contact-form'><button>Contact</button></Link>
                    </div>
                </div>
                <div className='two'>
                    <p>Apparently we had reached a great height in the atmosphere.</p>
                    <div className='contact'>
                        <h2>Contact</h2>
                        <p>Email: contact@perfeth.academy</p>
                        <p>Phone: +91 9711380903</p>
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
                        <Link to='/privacy-policy'>Privacy policy</Link>
                        <a href='#'>Terms and Condition</a>
                    </div>
                    <p><span><img src={LogoP} alt='logo'/>
                    </span>Copyright <span><BiCopyright /></span>2021-Perfeth Academy. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
