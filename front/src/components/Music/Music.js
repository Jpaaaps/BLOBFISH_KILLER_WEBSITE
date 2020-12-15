import React from 'react'
import Button from '../Button/Button'
import './Music.css'

const Music = () => {

	const btnClickPink = () => {
		window.open('https://blobfishkiller.bandcamp.com/album/s-t', '_blank')
	}

	const btnClickBlack = () => {
		window.open('https://blobfishkiller.bandcamp.com/album/between-the-fishes-and-me', '_blank')
	}

	return (
		<div className='music'>
			<h1 className='page_title'>Music</h1>
			<div className='cards__container'>
				<div className='container_pic'>
					<img className='album_pic' src='/photos/pochette1.jpg' alt='pochette 1er ep' />
					<div className='overlay'>
						<div className='text'>Eponym. First 3 songs EP recorded in late 2014 with Evan Heritage.</div>
						<Button className='btn_ep' onClick={btnClickPink}>Listen to that bitchin' EP</Button>
					</div>
				</div>
				<div className='container_pic'>
        	<img className='album_pic' src='/photos/pochette2.jpg' alt='pochette 2eme ep' />
					<div className='overlay'>
						<div className='text'>Between the fishes and Me. Second and last EP (for now) recorded in october 2015 at The Temple Studio by CNX Apocalypse.</div>
						<Button className='btn_ep' onClick={btnClickBlack}>Listen to that Fishin' EP</Button>
					</div>
				</div>		
			</div>
		</div>
	)
}

export default Music
