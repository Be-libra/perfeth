import React from 'react'
import './style-comp/expert.scss'

function Expert() {
    return (
        <div className='expert'>
            <div className='expert-figure'>
                <img src='https://perfeth.s3.ap-south-1.amazonaws.com/academy/static/figureBg.png' alt='figure'/>
            </div>
            
            <h2>Meet Some Experts</h2>
            <div className='expert-crd-cont'>
                <div className='expert-crd'>
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/profile-pictures/c7ab4d18-997f-47be-a118-95044c0a7a4e' alt='profile' />
                    <h3>Mor Sagmon</h3>
                    <h4>Software Engineer</h4>
                    <p>Managing Director of MorSagmon.com Business/ Tech Expert</p>
                </div>
                <div className='expert-crd'>
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/profile-pictures/1cfa06a2-1170-4210-a682-c692076c1a38.jpg' alt='profile' />
                    <h3>Isha Nema</h3>
                    <h4>Software Engineer</h4>
                    <p>Software engineer with experience in Python / algorithm / database / agile.</p>
                </div>
                <div className='expert-crd'>
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/profile-pictures/f6c6d0f0-1e74-4576-8093-4fd0930e99a8.png' alt='profile' />
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
                    <img src='https://perfeth.s3.ap-south-1.amazonaws.com/profile-pictures/ffa4db5e-c8e5-45f7-b773-43e4b57d946b' alt='profile' />
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
