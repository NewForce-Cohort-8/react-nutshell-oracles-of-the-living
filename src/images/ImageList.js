import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "./Image";

export const ImageList = ({ allImages, getAllImages }) => {
	const [filteredImages, setFiltered] = useState([]);
	const activeUser = localStorage.getItem("activeUser");
	const activeUserObject = JSON.parse(activeUser);
	const navigate = useNavigate();

	useEffect(() => {
		const myImages = allImages.filter(
			(image) => image.userId === activeUserObject.id
		);
		setFiltered(myImages);
	}, [allImages]);

	return (
		<>
			<button onClick={() => navigate("/image/create")}>Add Image</button>
			<h2>Images</h2>
			<article className='images container-fluid'>
				{filteredImages.map((image) => (
					<Image
						imageObject={image}
						getAllImages={getAllImages}
						key={`image--${image.id}`}
					/>
				))}
			</article>
		</>
	);
};
