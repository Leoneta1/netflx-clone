const API_KEY = "a2aa12a710d6097897d1a4ce22f79c94";
//https://api.themoviedb.org/3 base url

const requests = {
  fetchTrending: "/trending/movie/day?language=en-US",
  fetchNetflixOriginals:
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  fetchTopRated: "movie/top_rated?language=en-US&page=1",
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
