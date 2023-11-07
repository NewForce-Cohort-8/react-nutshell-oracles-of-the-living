import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getImageById, updateImageById } from "./ImageApiManager";

export const ImageEdit = () => {
	const { imageId } = useParams();
	const [image, updateImage] = useState({
		src: "",
		caption: "",
		userId: 0,
	});
	const navigate = useNavigate();
	useEffect(() => {
		getImageById(imageId).then((data) => {
			const singleImage = data[0];
			updateImage(singleImage);
		});
	}, [imageId]);

	const handleSaveButtonClick = (event) => {
		event.preventDefault();

		return updateImageById(imageId, image).then(() => {
			navigate("/images");
		});
	};

	return (
		<form className='imageForm'>
			<h2 className='imageForm__title'>Edit Image {imageId}</h2>
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
				Save Edit
			</button>
		</form>
	);
};
