import React from 'react';

const ImageList = (props) => {
	const images = props.images.map((image) => {
		return <img key={image.id} src={image.webformatURL} alt="image" width="350" height="300" />
	})
	
	return(
		<div>
			{images}
		</div>
	)
}

export default ImageList;