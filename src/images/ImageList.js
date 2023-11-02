import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllImagesFromApi } from "./ImageApiManager";

export const ImageList = () => {
	const [images, setImages] = useState([]);
	const [filteredImages, setFiltered] = useState([]);
	const activeUser = localStorage.getItem("activeUser");
	const activeUserObject = JSON.parse(activeUser);
	const navigate = useNavigate();

	const getAllImages = () => {
		getAllImagesFromApi().then((imagesArray) => {
			setImages(imagesArray);
		});
	};

	useEffect(() => {
		const myImages = images.filter(
			(image) => image.userId === activeUserObject.id
		);
		setFiltered(myImages);
	}, [images]);

	return (
		<>
			<button onClick={() => navigate("/image/create")}>Add Image</button>
			<h2>Images</h2>;
			<article className='imagess'>
				{filteredImages.map((image) => (
					<Image
						imageObject={ticket}
						getAllImages={getAllImages}
						key={`image--${image.id}`}
					/>
				))}
			</article>
		</>
	);
};
