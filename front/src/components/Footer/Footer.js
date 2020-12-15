import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          GO FISH YOURSELF
        </p>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
					<a
              className='social-icon-link facebook'
              href='https://www.facebook.com/blobfishkiller'
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/jpaaaps/?hl=fr'
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/channel/UC6aa1_W6O_Vm89WE5jLLKtQ'
              target='_blank'
              rel="noreferrer"
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
          </div>
					<div className='footer-logo'>
						<img className='logoblob3' src='/photos/blobagram.png' alt='logo blob pentagram' />
					</div>
					<small className='website-rights'>JP GERARD © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer
