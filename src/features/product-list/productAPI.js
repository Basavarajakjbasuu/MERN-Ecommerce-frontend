export function fetchAllProducts() {
  
	return new Promise( async (resolve) => {
		const response = await fetch('http://localhost:8080/products');
		const data = await response.json();
		resolve({ data });
	});
}

export function fetchProductsByFilters(filter) {
  
	// filter : {"category:"smartphone""}
	// console.log(filter)

	let queryString = '';

	for (let key in filter) {
		queryString += `${key}=${filter[key]}&`
	}

	console.log(queryString);
	return new Promise( async (resolve) => {
		const response = await fetch('http://localhost:8080/products?'+queryString);
		const data = await response.json();
		resolve({ data });
	});
}