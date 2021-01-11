import React,{useEffect,useState} from 'react'
import {FaFacebookF,FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BiMenuAltRight} from 'react-icons/bi'

import './style-comp/navbar.scss'


function Navbar() {

    const [mobileNavState,setMobileNavState] = useState(false)

    useEffect(() => {
        console.log(window.innerWidth)
        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll',listenToScroll)
        }
    }, [])
const listenToScroll = ()=>{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.querySelector('.navbar').style.boxShadow=' 0px 3px 1px 1px rgba(212,210,212,0.56)'
        document.querySelector('.navbar').style.backgroundColor='rgba(6, 6, 6,0.94)'
    }
    else{
        document.querySelector('.navbar').style.boxShadow='none'
        document.querySelector('.navbar').style.backgroundColor='rgba(6, 6, 6,0)'
    }
}

const changeActiveState=()=>{
    setMobileNavState(!mobileNavState)
    openMobileNav()
}
const openMobileNav =()=>{
    if(mobileNavState){
        document.querySelector('.nav-links').style.display='flex'
        document.querySelector('.social-links').style.display='flex'
        document.querySelector('.navbar').style.height='100vh'
        document.querySelector('.navbar').style.backgroundColor='rgba(6,6,6,0.98)'
    }
    else{
        if(window.innerWidth <=1000){
            document.querySelector('.nav-links').style.display='none'
            document.querySelector('.social-links').style.display='none'
            document.querySelector('.navbar').style.height='10vh'
        }        
    }
}
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>Perfeth</h1>
            </div>
            <div className='nav-components'>
                <div className='mobile-menu' onClick={changeActiveState}>
                    <BiMenuAltRight />
                </div>
                <div className='nav-links'>
                    <a href='#'>About</a>
                    <a href='#'>Courses</a>
                    <a href='#'>Community</a>
                    <a href='#'>Contact</a>
                </div>
                <div className='social-links'>
                    <a href='#' className='facebook'>
                            <FaFacebookF />
                    </a>                   
                    <a href='#' className='facebook'>
                        <AiFillInstagram />
                    </a>
                    <a href='#' className='facebook'>
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
