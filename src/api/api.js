import axios from 'axios';

const BASE_URL = '';

/**
 * API.
 *
 * @param {string} text
 * @public
 */
export default axios.create({
    baseURL: BASE_URL,
});
