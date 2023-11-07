import { useState, useEffect } from "react";
import { ImageList } from "./ImageList";
import { getAllImagesFromApi } from "./ImageApiManager";

export const ImageContainer = () => {
	const [images, setImages] = useState([]);
	const getAllImages = () => {
		getAllImagesFromApi().then((imagesArray) => {
			setImages(imagesArray);
		});
	};

	useEffect(() => {
		getAllImages();
	}, []);

	return <ImageList allImages={images} getAllImages={getAllImages} />;
};
