class DataSource {
    static searchMovie(keyword) {
        const baseUrl = process.env.API_SEARCH_URL;


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