//author: Logan Van Meter
//purpose: Add an image to the database linked to the user adding the image
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeImage } from "./ImageApiManager";

export const ImageForm = () => {
	const [image, updateImage] = useState({
		src: "",
		caption: "",
		userId: 0,
	});

	const [tags, updateTags] = useState({
		name: "",
	});

	const [imageTag, updateImageTag] = useState({
		imageId: 0,
		tagId: 0,
	});

	const navigate = useNavigate();
	const activeUser = localStorage.getItem("activeUser");
	const activeUserObject = JSON.parse(activeUser);

	const handleSaveButtonClick = (event) => {
		event.preventDefault();

		const imageToSendToAPI = {
			src: image.src,
			caption: image.caption,
			userId: activeUserObject.id,
		};
		// TODO: Perform the fetch() to POST the object to the API
		return makeImage(imageToSendToAPI).then(() => {
			navigate("/images");
		});
	};

	return (
		<form className='imageForm'>
			<h2 className='imageForm__title'>New Image</h2>
			<fieldset>
				<div className='form-group'>
					<label htmlFor='src'>Source URL:</label>
					<input
						required
						autoFocus
						type='text'
						className='form-control'
						placeholder='Image URL'
						value={image.src}
						onChange={(event) => {
							const copy = { ...image };
							copy.src = event.target.value;
							updateImage(copy);
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className='form-group'>
					<label htmlFor='name'>Caption:</label>
					<input
						type='text'
						value={image.caption}
						onChange={(event) => {
							const copy = { ...image };
							copy.caption = event.target.value;
							updateImage(copy);
						}}
					/>
				</div>
			</fieldset>
			<button
				className='btn btn-primary'
				onClick={(click) => handleSaveButtonClick(click)}
			>
				Save Image
			</button>
		</form>
	);
};
