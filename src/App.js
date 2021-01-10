import React from 'react'
import Cover from './components/cover-comp/Cover.js'
import Partners from './components/partners/Partners.js'
import Vision from './components/vision/Vision.js'
import SuccessJourney from './components/successJourney/SuccessJourney.js'
import Testimonial from './components/testimonial/Testimonial.js'
import './App.scss'

function App() {
    return (
        <div>
            <Cover/>
            <Partners />
            <Vision />
            <SuccessJourney/>
            <Testimonial />
        </div>
    )
}

export default App
