// import React from "react";
import Row from "../Row/Row"; // Adjust this path depending on where your Row component sits
import requests from "../../../api/Requests"; // Adjust this path to where your TMDB fetch URLs are defined

const RowList = () => {
  return (
    <>
      {/* The main featured row gets the 'isLargeRow' flag for tall vertical posters */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      
      {/* The rest of the rows default to wide backdrop thumbnails */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;