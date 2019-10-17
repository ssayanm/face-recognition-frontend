import React from 'react';
import './FaceRecognition.css';

const FaceRcognition = ({ imageUrl, box }) => {
	return (
		<div className='ma center'>
			<div className='absolute mt2'>
				<img id ='inputimage' src={imageUrl} alt="" width='500px' height='auto'/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>			
		</div>
		)
}

export default FaceRcognition;