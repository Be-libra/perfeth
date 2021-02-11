import React,{useState} from 'react'
import ReactPlayer from 'react-player/youtube'
import {AiFillPlayCircle} from 'react-icons/ai'
import './style-comp/shecodes.scss'

function SheCodes() {

    const [playVideo,setPlayVideo] = useState(false)

    const handlePlayClick=()=>{
        setPlayVideo(true)
        document.querySelector('.video-cover').style.display='none'

    }

    return (
        <div className='she-codes'>
                <ReactPlayer 
                url='https://www.youtube.com/watch?v=tX-carsCwds'     
                width='100%'
                height='100%'
                pip={true}
                controls={true}
                playing={playVideo}
                className='she-codes-video'
                />
                <div className='video-cover'>
                    <AiFillPlayCircle 
                    className='play-btn'
                    onClick={handlePlayClick}
                    />
                    <h2>She Codes</h2>
                    <p>She Codes is an initiative by Perfeth to promote women engineers
                    through a video interview format done by Swati Sinha, Perfeth Council lead.
                    </p>
                 </div>
            
            

        </div>
    )
}

export default SheCodes
