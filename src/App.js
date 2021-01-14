import React,{Suspense} from 'react'
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


import "animate.css/animate.min.css"
import './App.scss'
import Footer from './components/footer/Footer.js'
import PrivacyPolicy from './PrivacyPolicy.js'

function App() {
    return (
        <div style={{padding:'0',margin:'0',width:'100%'}}>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/privacy-policy'>
                        <PrivacyPolicy />
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
                            <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <Testimonial/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeIn' delay={100} duration={4}>
                                <Pricing/>
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
