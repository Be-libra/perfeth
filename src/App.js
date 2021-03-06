import React,{Suspense,useEffect,useState} from 'react'
import Cover from './components/cover-comp/Cover.js'
import Partners from './components/partners/Partners.js'
import Vision from './components/vision/Vision.js'
import SuccessJourney from './components/successJourney/SuccessJourney.js'
import Testimonial from './components/testimonial/Testimonial.js'
import Pricing from './components/pricing/Pricing.js'
import Navbar from './components/navbar/Navbar.js'
import ScrollAnimation from 'react-animate-on-scroll'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import CC from "CookieConsent"


import "animate.css/animate.min.css"
import './App.scss'
import Footer from './components/footer/Footer.js'
import PrivacyPolicy from './PrivacyPolicy.js'
import Hubspot from './components/cover-comp/Hubspot.js'
import Expert from './components/experts/Expert.js'
import Work from './components/workwithus/Work.js'
import SheCodes from './components/she-codes/SheCodes.js'
import CookieConsent from "react-cookie-consent";

function App() {
     
    
    
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://js.hsforms.net/forms/v2.js';
    //     document.body.appendChild(script);
    //     console.log('heolloo live')
    //     script.addEventListener('load', () => {
    //         if(window.hbspt) {
    //           window.hbspt.forms.create({
    //             portalId: '9292665',
    //           formId: '13c814da-d045-4682-be31-5d9b7b1a4531',
    //           target: '#hubspotForm'
    //         })
    //       }
    //     });
    // }, [])

    return (
        <div style={{padding:'0',margin:'0',width:'100%'}}>
            <CookieConsent
                location="bottom"
                buttonText="OK"
                buttonStyle={{
                    background:'#4E65BC',
                    color:'#ffffff',
                    fontFamily:"'Montserrat',sans-serif",
                    fontSize:'16px',
                    fontWeight:'500'
                }}
                cookieName="cookie-consent"
                style={{ background: "#2B373B",fontSize:'18px',fontFamily:"'Montserrat',sans-serif",textAlign:'center' }}
                expires={150}
                >
                We use cookies to ensure that we give you the best experience on our website. If you 
                continue to use this site we will assume that you are happy with it.
            </CookieConsent>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/privacy-policy'>
                        <PrivacyPolicy />
                    </Route>
                    <Route path='/contact-form'>
                        <Hubspot/>
                    </Route>
                    <Route path='/'>
                        <>
                            <Cover/>
                            <Partners />
                            <ScrollAnimation animateIn='fadeIn' delay={200} duration={4}>
                                <Vision/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <SuccessJourney/>
                            </ScrollAnimation>
                            {/* <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <Testimonial/>
                            </ScrollAnimation> */}
                            <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <Pricing/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <Expert />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <SheCodes />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <Work/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <Footer/>
                            </ScrollAnimation>
                        </>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
