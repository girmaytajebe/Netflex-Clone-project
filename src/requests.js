

const API_KEY = "7005881bb67b0ac6bcdd9f53e936dae6";

const requests = {
	fetchTrendig: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

	fetchTopRatedMovices: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

	fetchComodyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

