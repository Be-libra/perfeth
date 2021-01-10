import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {RiArrowRightSLine,RiArrowLeftSLine} from 'react-icons/ri'
import invertedCommas from '../../utils/invertedCommas.png'
import hexagon from '../../utils/hexagon.png'
import testimonialRightBg from '../../utils/testimonialRightBg.png'

import './style-comp/testimonial.scss'

function Testimonial() {
    return (
        <div className='testimonial'>
            <div className='circle'></div>
            <div className='hexagon'>
                <img src={hexagon} alt='heaxgon' />
            </div>
            <div className='outer-circle'></div>
            <div className='left'>
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                className='carousel'
                >
                <Slider className='slider'>
                    <Slide className='slides' index={0}>
                        <div className='profile'>
                            <img src='https://cdn.pixabay.com/photo/2018/04/04/10/11/portrait-3289372_960_720.jpg' alt='profilepic-1' />
                        </div>
                        <div className='commas'>
                            <img src={invertedCommas} alt='commas' />
                        </div>
                        <p>Minuteness of the parts formed a great hindrance to my speed, I resolved, 
                            contrary to my first intention, to make the being of a gigantic stature that is to
                             say, about eight feet in height.
                        </p>
                        <div className='profile-detail'>
                            <h3>Chinmay Sarasvati</h3>
                            <p>Microsoft</p>
                        </div>
                    </Slide>
                    <Slide className='slides' index={1}>
                    <div className='profile'>
                            <img src='https://cdn.pixabay.com/photo/2018/04/04/10/11/portrait-3289372_960_720.jpg' alt='profilepic-1' />
                        </div>
                        <div className='commas'>
                            <img src={invertedCommas} alt='commas' />
                        </div>
                        <p>Minuteness of the parts formed a great hindrance to my speed, I resolved, 
                            contrary to my first intention, to make the being of a gigantic stature that is to
                             say, about eight feet in height.
                        </p>
                        <div className='profile-detail'>
                            <h3>Chinmay Sarasvati</h3>
                            <p>Microsoft</p>
                        </div>
                    </Slide>
                    <Slide className='slides' index={2}>
                    <div className='profile'>
                            <img src='https://cdn.pixabay.com/photo/2018/04/04/10/11/portrait-3289372_960_720.jpg' alt='profilepic-1' />
                        </div>
                        <div className='commas'>
                            <img src={invertedCommas} alt='commas' />
                        </div>
                        <p>Minuteness of the parts formed a great hindrance to my speed, I resolved, 
                            contrary to my first intention, to make the being of a gigantic stature that is to
                             say, about eight feet in height.
                        </p>
                        <div className='profile-detail'>
                            <h3>Chinmay Sarasvati</h3>
                            <p>Microsoft</p>
                        </div>
                        
                    </Slide>
                </Slider>
                <ButtonBack className='buttons-left'><RiArrowLeftSLine/></ButtonBack>
                <ButtonNext className='buttons-right'><RiArrowRightSLine/></ButtonNext>
                </CarouselProvider>
            </div>
            <div className='right'>
                <div className='right-bg'>
                    <img src={testimonialRightBg} alt='right-bg' />
                </div>
                <p>STUDENTS AT PERFETH</p>
                <h1>Success Stories</h1>
            </div>
            
        </div>
    )
}

export default Testimonial
