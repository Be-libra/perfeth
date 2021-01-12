import React from 'react'
import './style-comp/footer.scss'
import {BiCopyright} from 'react-icons/bi'

function Footer() {
    return (
        <div className='footer'>

            <div className='footer-container'>
                <div className='one'>
                    <div className='left'>
                        <h1>Learning Now!</h1>
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
                        <p>Email: education@edu.com</p>
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
                    <div className='privacy-policy'>
                        <a href='#'>Privacy policy</a>
                        <a href='#'>Terms and Condition</a>
                    </div>
                    <p><span><BiCopyright /> </span>2021 Perfeth </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
