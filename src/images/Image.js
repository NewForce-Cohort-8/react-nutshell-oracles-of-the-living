import { useNavigate } from "react-router-dom";
import { deleteImageById } from "./ImageApiManager";

export const Image = ({ imageObject, getAllImages }) => {
	const navigate = useNavigate();
	const deleteImage = (obj) => {
		return (
			<button
				className='image__delete'
				onClick={() => {
					deleteImageById(obj.id).then(getAllImages);
				}}
			>
				Delete
			</button>
		);
	};
	const editImage = (obj) => {
		return (
			<button
				className='image__edit'
				onClick={() => {
					navigate(`/images/${imageObject.id}/edit`);
				}}
			>
				Edit Image
			</button>
		);
	};

	return (
		<>
			<section className='image card'>
				<img className='card-img-top' src={imageObject.src} />
				<div className='card-body'>
					<p className='card-text'>{imageObject.caption}</p>
					{editImage(imageObject)}
					{deleteImage(imageObject)}
				</div>
			</section>
		</>
	);
};
