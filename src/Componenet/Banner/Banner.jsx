import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../requests";

function Banner() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			
				const response = await axios.get(requests.fetchNetflixOriginals);
				setMovie(response?.data.results[Math.floor(Math.random() * response.data.results.length)]
				);
			return response;
		};
		fetchData();
	}, []);

	function truncate(str, n) {
		return str && str.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	// if (!movie) {
	// 	return null; // Return null or a loading indicator while waiting for the API response
	// }
	 

	// const backgroundImageUrl = movie?.backdrop_path
	// 	? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
	// 	: "fallback-image-url.jpg"; // Replace "fallback-image-url.jpg" with your desired fallback image URL

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">play</button>
					<button className="banner__button">my List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div className="banner__fadebuttom"></div>
		</header>
	);
}

export default Banner;
