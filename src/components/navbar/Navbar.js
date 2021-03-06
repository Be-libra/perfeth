import React,{useEffect,useState} from 'react'
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
// import {AiOutlineTwitter} from 'react-icons/ai'
import {BiMenuAltRight} from 'react-icons/bi'
// import logo from '../../utils/logo.svg'
import {Link} from 'react-router-dom'

// import perfeth from './perfeth.svg'

import './style-comp/navbar.scss'


function Navbar() {

    const [mobileNavState,setMobileNavState] = useState(true)

    useEffect(() => {
        
        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll',listenToScroll)
        }
    }, [mobileNavState])
const listenToScroll = ()=>{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.querySelector('.navbar').style.boxShadow=' 0px 3px 1px 1px rgba(212,210,212,0.56)'
        document.querySelector('.navbar').style.backgroundColor='rgba(6, 6, 6,0.98)'
    }
    else{
        document.querySelector('.navbar').style.boxShadow='none'
        document.querySelector('.navbar').style.backgroundColor='rgba(6, 6, 6,0.98)'
    }
}

const changeActiveState=async()=>{
    await setMobileNavState(!mobileNavState)
    openMobileNav()
}
const openMobileNav =()=>{
    if(mobileNavState){
        document.querySelector('.nav-links').style.display='flex'
        document.querySelector('.social-links').style.display='flex'
        document.querySelector('.navbar').style.height='100vh'
        document.querySelector('.navbar').style.backgroundColor='rgba(6,6,6,0.98)'
        document.querySelector('body').style.overflowY='hidden'
        document.querySelector('.logo').style.display='none'
        document.querySelector('.mobile-menu').style.top='40px'
        document.querySelector('.mobile-menu').style.height='100px'
    }
    else{
        if(window.innerWidth <=1000){
            document.querySelector('.nav-links').style.display='none'
            document.querySelector('.social-links').style.display='none'
            document.querySelector('.logo').style.display='flex'
            document.querySelector('.navbar').style.height='13vh'
            document.querySelector('body').style.overflowY='scroll'
            document.querySelector('.mobile-menu').style.top='25%'
            document.querySelector('.mobile-menu').style.height='50%'
        } 
        else{
            document.querySelector('.nav-links').style.display='flex'
            document.querySelector('.social-links').style.display='flex'
        } 
              
    }
}
    return (
        <div className='navbar'>
            <Link to='/' className='logo'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/logo.svg' alt='logo' />
            </Link>
            <div className='nav-components'>
                <div className='mobile-menu' onClick={changeActiveState}>
                    <BiMenuAltRight />
                </div>
                <div className='nav-links'>
                    <a href='/#about'>About</a>
                    <a href='/#pricing'>Courses</a>
                    <a href='https://app.perfeth.com/' target="_blank">Community</a>
                    <Link to='/contact-form'>Contact</Link>
                </div>
                <div className='social-links'>                   
                    <a href='https://www.linkedin.com/company/perfeth' className='facebook' target="_blank">
                        <FaLinkedinIn/>
                    </a>
                    <a href='https://www.facebook.com/perfeth' className='facebook' target="_blank">
                            <FaFacebookF />
                    </a>
                    <a href='https://twitter.com/Perfeth1' className='facebook' target="_blank">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
