import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	const CheckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

	const CheckButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

	return (
		<Link>
			<button 
				className={`btn ${CheckButtonStyle} ${CheckButtonSize}`} 
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</Link>
	)
}

export default Button
