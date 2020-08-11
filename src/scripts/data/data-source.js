require('dot-env').config();

class DataSource {
    static searchMovie(keyword) {
        const apiKey= process.env.API_KEY;
        const baseUrl = `https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&include_adult=false&query=`;


        // Gaya jQuery AJAX
        return $.ajax({
            method: 'GET',
            url: `${baseUrl}${keyword}`,
            dataType: 'json'
        }).then(responseJson => {
            if (responseJson.results.length > 0) {
                console.log(responseJson.results);
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        });
    }
}

// ES6 Module Exporting
export default DataSource;