const API_KEY = "854b5728a6d8248376c7e0b7934787f0";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const today = new Date().toISOString().split('T')[0];
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=hi&sort_by=release_date.desc&primary_release_date.lte=${today}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
