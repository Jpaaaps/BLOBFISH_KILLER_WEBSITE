import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

import './Navbar.css'

const Navbar = () => {
	const [click, setClick] =  useState(false)
	
	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

  const toggleHome = () => {
		scroll.scrollToTop();
	}

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={toggleHome}>
					BLOBFISH KILLER
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-skull-crossbones' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link 
								to='/'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								className='nav-links'
								onClick={() => {
									toggleHome();
									closeMobileMenu();
								}}
							>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='about'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								About Us
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='pictures'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								Pictures
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='music'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								Music
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='video'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								Video
							</Link>
						</li>
						<li className='nav-item'>
							<Link 
								to='contact'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
