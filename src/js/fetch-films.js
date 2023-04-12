import axios from 'axios'
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, ID_URL } from './api-vars';

export { getTrendFilms }


async function getTrendFilms(page) {
    try {
        const { data } = await axios.get(
            `${TREND_URL}?api_key=${API_KEY}&page=${page}`,
        );

        return data;
    } catch (error) {
        console.error('Error');
    }
}