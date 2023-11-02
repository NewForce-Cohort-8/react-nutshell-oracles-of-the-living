export const makeImage = (obj) => {
	return fetch(
		`http://localhost:8088/images
    `,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(obj),
		}
	).then((response) => response.json);
};

export const deleteImageById = (id) => {
	return fetch(`http://localhost:8088/images/${id}`, {
		method: "Delete",
	});
};

export const getAllImagesFromApi = () => {
	return fetch(`http://localhost:8088/images`).then((response) =>
		response.json()
	);
};
