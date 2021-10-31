const BASE_URL = 'https://api.themoviedb.org/3';
const key = 'f67f4d14d6b529f941fa4f285225b954';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'))
}

export function fetchPopularMovies() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${key}`)
}

export function fetchMoviesByRequest(search) {
    return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${search}`)
}

export function fetchMovieById(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${key}&language=en-US`)
}

export function fetchMovieCast(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/credits?api_key=${key}&language=en-US`)
}

export function fetchMovieReviews(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`)
}
