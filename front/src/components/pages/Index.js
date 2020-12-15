import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Music from '../Music/Music'
import Navbar from '../Navbar/Navbar'
import Pictures from '../Pictures/Pictures'
import Video from '../Video/Video'
import VideoSection from '../VideoSection/VideoSection'

function Index() {

	return (
		<div>
			<Navbar />
			<VideoSection />
			<About />
			<Pictures />
			<Music />
			<Video />
			<Contact />
			<Footer />
		</div>
	)
}

export default Index
