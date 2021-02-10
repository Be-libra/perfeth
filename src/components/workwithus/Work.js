import React from 'react'
import './style-comp/work.scss'
import {MdDescription,MdVideocam} from 'react-icons/md'
import {RiAccountPinBoxFill} from 'react-icons/ri'
import {SiGooglescholar} from 'react-icons/si'
import {FaDollarSign} from 'react-icons/fa'
import {BsClock} from 'react-icons/bs'

function Work() {
    return (
        <div className='work'>
            <h1>Work with us to build a team</h1>
            <p>Many companies are working with us to build their engineering teams 
                with our consulting services in HR recruitment through our platform
            </p>
            <div className='work-crd-cont'>
                <div className='work-crd'>
                    <div className='icon'>
                        <MdDescription/>
                    </div>
                    <div className='crd-body'>
                        <h4>Refined Job Description</h4>
                        <p>We work with you and start with the refined job description that is apt and attractive
                             for the engineering community. Just send us job title !
                        </p>
                    </div>
                </div>
                <div className='work-crd'>
                    <div className='icon'>
                        <RiAccountPinBoxFill/>
                    </div>
                    <div className='crd-body'>
                        <h4>Delivery Manager</h4>
                        <p>Our dedicated Delivery Manager works with you in terms of managing the entire 
                            project end to end. The DM engages with recruiters and clients for a particular project.
                        </p>
                    </div>
                </div>
                <div className='work-crd'>
                    <div className='icon'>
                        <SiGooglescholar/>
                    </div>
                    <div className='crd-body'>
                        <h4>Expert Recruiters</h4>
                        <p>Our in-house recruiters are highly trained in engineering recruitment and follow 
                            the OTIF (One time in full) philosophy of project delivery.
                        </p>
                    </div>
                </div>
                <div className='work-crd'>
                    <div className='icon'>
                        <MdVideocam/>
                    </div>
                    <div className='crd-body'>
                        <h4>Community and Beyond</h4>
                        <p>Due to outreach of our community and networks of our 
                            DM/recruiters, our search is not just limited to Perfeth community for recruitment
                        </p>
                    </div>
                </div>
                <div className='work-crd'>
                    <div className='icon'>
                        <BsClock/>
                    </div>
                    <div className='crd-body'>
                        <h4>Faster Delivery</h4>
                        <p>Through our extended network, we are able to close roles very fast for our
                             clients so you can focus on the things that matter most – BUSINESS
                        </p>
                    </div>
                </div>
                <div className='work-crd'>
                    <div className='icon'>
                        <FaDollarSign/>
                    </div>
                    <div className='crd-body'>
                        <h4>Flat Financials</h4>
                        <p>Our financials are flat %age for a role and does not vary even if the 
                            role is for a CXO/Sr. Management resource unlike other recruitment firms
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
