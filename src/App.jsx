import React from "react";
import Row from "./Componenet/Row/Row";
import requests from "./requests";
import Banner from "./Componenet/Banner/Banner";
import "./app.css";
import Nav from "./Componenet/Nav/Nav";

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />

			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrendig} />
			<Row title="Top Rated Movices" fetchUrl={requests.fetchTopRatedMovices} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comody Movies" fetchUrl={requests.fetchComodyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
