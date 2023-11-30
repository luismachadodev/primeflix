import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL API: https://api.themoviedb.org/3/movie/550?api_key=e73ecba0dae54b7cc49794a25a512eee&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api;