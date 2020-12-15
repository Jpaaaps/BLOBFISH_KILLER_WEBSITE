import React from 'react'
import Button from '../Button/Button'
import './VideoSection.css'

function VideoSection() {

  const btnClick = () => {
    window.open('https://www.youtube.com/watch?v=Stg9FgdP08E', '_blank')
  }

	return (
		<div className='video-container'>
      <video src='/video/clipBlob.mp4' autoPlay loop muted />
      <h1>SHUT YOUR F***ING MOUTH</h1>
      <p>featuring MALAKWA</p>
      <div className='video-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={btnClick}
        >
        WATCH VIDEO NOW! <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
	)
}

export default VideoSection
