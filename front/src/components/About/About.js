import React from 'react'
import './About.css'

const About = () => {

	return (
		<div className='about_container'>
			<h1 className='about'>About The Fish</h1>
			<div className='about_container_bis'>
				<img className='logoblob' src='/photos/logo-blanc.png' alt='logo blobfish' />
				<div className='about_content'>
					<p className='about_description'>Formé en 2014 sur les cendres encore chaudes d'un précédent groupe, Flo, JP et César décident de former BLOBFISH KILLER à la suite de la rencontre avec Mika Bleu. Les barrières de style n'existent pas au sein du groupe, cela peut varier du gros rock qui tache au sludge tendance post black, ou encore au hardcore... la volonté étant de faire remuer les têtes. 
					Le groupe sort rapidement un premier EP trois titres, suivie de première partie importantes telles que l'ouverture pour The Arrs, Eths ou encore KVELERTAK! Début 2016 préparation de l'enregistrement du nouvel EP, date au Hellfest pour annoncer la sortie dudit EP, et malheureusement quelques semaines après, le chanteur Mika Bleu disparait dans un tragique accident.</p>
					<br/><br/>
					<p className='about_hope'>Après plusieurs années d'inactivité, le poisson essait de remonter des abysses une nouvelle fois... </p>
				</div>
			</div>
		</div>
	)
}

export default About
