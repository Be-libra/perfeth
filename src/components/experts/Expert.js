import React from 'react'
import './style-comp/expert.scss'

function Expert() {
    return (
        <div className='expert'>
            <div className='expert-figure'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/figureBg.png' alt='figure'/>
            </div>
            
            <h2>Meet our Experts</h2>
            <div className='expert-crd-cont'>
                <div className='expert-crd'>
                    <img src='https://perfeth.com/wp-content/uploads/2017/11/Mor_Sagmon_mentor.jpeg' alt='profile' />
                    <h3>Mor Sagmon</h3>
                    <h4>Software Engineer</h4>
                    <p>Managing Director of MorSagmon.com Business/ Tech Expert</p>
                </div>
                <div className='expert-crd'>
                    <img src='https://perfeth.com/wp-content/uploads/2020/09/isha.jpg' alt='profile' />
                    <h3>Isha Nema</h3>
                    <h4>Software Engineer</h4>
                    <p>Software engineer with experience in Python / algorithm / database / agile.</p>
                </div>
                <div className='expert-crd'>
                    <img src='https://perfeth.com/wp-content/uploads/2020/09/lauren.png' alt='profile' />
                    <h3>Lauren Hasson</h3>
                    <h4>Software Engineer</h4>
                    <p>Software developer at a fintech firm and founder of Develop Her</p>
                </div>
                <div className='expert-crd'>
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/shivam.jpeg' alt='profile' />
                    <h3>Shivam Sethi</h3>
                    <h4>Software Engineer</h4>
                    <p>Lead Engineer, Mzaalo. React and System designs enthusiast. Lifelong developer. Domains - OTT, Blockchain.</p>
                </div>
                <div className='expert-crd'>
                    <img src='https://perfeth.com/wp-content/uploads/2020/09/tushar.jpeg' alt='profile' />
                    <h3>Tushar Bhatnagar</h3>
                    <h4>Software Engineer</h4>
                    <p>Software Engineer with expertise in AI/ML and cofounder of AIotize</p>
                </div>
                <div className='expert-crd'>
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/profile-pictures/9f8f4eb0-615a-4e08-9be3-cd5de10b7abf.jpg' alt='profile' />
                    <h3>Shivam Verma</h3>
                    <h4>Software Engineer</h4>
                    <p>Senior software engineer - Google ,speaker at Global Blockchain Foundation 2018 ,speaker at PyCon
                    India 2014</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default Expert
