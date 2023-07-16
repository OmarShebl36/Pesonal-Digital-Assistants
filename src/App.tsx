import React from 'react';
import 'bulma/css/bulma.css';

import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
	// *Based on this reference: https://stackoverflow.com/questions/44312170/displaying-a-static-image-using-react-typescript-and-webpack
	// *We need to either add a d.ts file to the images directory or use the following code to add images in typescript
	// const AlexaImage = require('./images/alexa.png');
	// const CortanaImage = require('./images/cortana.png');
	// const SiriImage = require('./images/siri.png');

	return (
		<div>
			<section className='hero is-primary'>
				<div className='hero-body'>
					<p className='title'>Personal Digital Assistants</p>
				</div>
			</section>

			<div className='container'>
				<section className='section'>
					<div className='columns'>
						<div className='column is-4'>
							<ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} description='Alexa was created by Amazon and helps you buy things.'/>
						</div>
						<div className='column is-4'>
							<ProfileCard title='Cortana' handle='@cortana32' image={CortanaImage} description='Cortana was made by Microsoft. Who knows what it does?' />
						</div>
						<div className='column is-4'>
							<ProfileCard title='Siri' handle='@siri01' image={SiriImage} description='Siri was made by Apple, and is being phased out.' />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
