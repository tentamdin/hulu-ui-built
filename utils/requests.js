const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&languege=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&languege=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?with_genres=35&api_key=${API_KEY}`,
  },
  fetchTHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?with_genres=9648&api_key=${API_KEY}`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?with_genres=878&api_key=${API_KEY}`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?with_genres=37&api_key=${API_KEY}`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?with_genres=16&api_key=${API_KEY}`,
  },
  fetchTV: {
    title: "TV Show",
    url: `/discover/movie?with_genres=10770&api_key=${API_KEY}`,
  },
};
