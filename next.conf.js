require('dotenv').config();

module.exports = {
    env: {
        API_KEY = process.env.API_KEY,
        API_SEARCH_URL = process.env.API_SEARCH_URL
    },
};