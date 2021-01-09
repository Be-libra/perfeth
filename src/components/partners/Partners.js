import React from 'react'
import './style-comp/partners.scss'

function Partners() {
    return (
        <div className='partners'>
            <p>Top tech companies hire from us</p>
            <div className='all-partners'>
                <div className='mx-player'>
                    <img src='https://j2apps.s.llnwi.net/assets-origin/static/images/mx_footer_logo.png' alt='mx-player'/>
                </div>
                <div className='mx-player'>
                    <img src='https://www.codingninjas.com/assets-landing/images/CNLOGO.svg' alt='mx-player'/>
                </div>
                <div className='casaone'>
                    <img src='https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v2m47aj7ruh275slnhzr' alt='mx-player'/>
                </div>
                <div className='advenio'>
                    <img src='https://www.advenio.tech/images/logo.png' alt='mx-player'/>
                </div>
                <div className='infosys'>
                    <img src='https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo.png' alt='mx-player'/>
                </div>
            </div>
        </div>
    )
}

export default Partners
