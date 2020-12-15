import React from 'react'
import ReactPlayer from 'react-player'

import './PlayerVid.css'

const PlayerVid = () => {

	const url = 'https://www.youtube.com/watch?v=c7EfexBHybQ'

	return (
		<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={url}
          width='100%'
					height='90vh'
					controls='true'
        />
      </div>
	)
}

export default PlayerVid
