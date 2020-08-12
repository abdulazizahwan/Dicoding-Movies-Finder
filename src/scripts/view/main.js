import '../component/dmf-app-bar.js';
import '../component/dmf-footer.js';
import DataSource from '../data/data-source.js';

const main = () => {
    /*
    Menggunakan gaya jQuery selector untuk searchElement dan searchButtonElement
    */
    const searchElement = $('#searchElement');
    const searchButtonElement = $('#searchButtonElement');
    const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=d7050fdc3d932b1e8295461726f73837&language=en-US`;
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";


    // Event tombol Search
    const onButtonSearchClicked = async () => {
        try {
            /*
            Mengecek jika input kosong akan menampilkan alert
            Inputan tidak boleh kosong
            */
            if ($.trim(searchElement.val()) == '') {
                alert('Input can not be left blank');
            } else {
                const result = await DataSource.searchMovie(searchElement.val());
                renderResult(result);
            }
        } catch (message) {
            fallbackResult(message);
        }
    };

    // Untuk mendapatkan list 20 film populer
    // Karena ketentuan dari TMDB maksimal 20 per page
    const getPopularMovie = async () => {
        // Menggunakan fetch() gaya async await
        try {
            const response = await fetch(baseUrl);
            const responseJson = await response.json();

            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderResult(responseJson.results);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    // Templating data dari API ke card
    const renderResult = (results) => {
        const listMovieElement = document.querySelector("#listMovie");
        listMovieElement.innerHTML = "";

        results.forEach(movie => {

            // Mengecek jika nilai poster path nya null maka set gambar default
            let imageSrc;
            if (movie.poster_path != null) {
                imageSrc = `${baseImageUrl}${movie.poster_path}`;
            } else {
                imageSrc = "https://blkbekasi.kemnaker.go.id/subbagiankeuangan/assets-back-end/dist/img/image-not-available.png";
            }

            /*
            Karena data tanggal rilis mempunyai format 1998-06-18
            Maka untuk mempercantik diperlukan pemformatan tanggal
            */
            const monthNames = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            let rawDate = new Date(movie.release_date);
            let formattedDate = `${monthNames[(rawDate.getMonth() + 1)]} ${rawDate.getDate()}, ${rawDate.getFullYear()}`;

            listMovieElement.innerHTML += `
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-12" id="cardElement">
                    <div class="card">
                        <img src="${imageSrc}"
                                class="card-img-top" alt="Image not found">
                        <div class="rating align-bottom">
                            <svg width="12px" height="12px" viewBox="0 0 16 16" class="bi bi-star-fill"
                                    fill="#FEBF00" xmlns="http://www.w3.org/2000/svg">
                                <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <p class="rating-text">&ensp;${movie.vote_average}</p>
                        </div>
                    </div>

                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${formattedDate}</p>
            </div>
            `;
        });
    }


    const fallbackResult = message => {
        alert(message);
    };

    /*
    jQuery Style
    Mengecek jika DOM sudah siap
    Makan menampilkan film populer
    */

    $(document).ready(function () {
        getPopularMovie();

        // Agar User Experience baik saya membuat footer tampil setelah 1 detik
        // Harapannya jika koneksi internet baik maka card movie akan tampil lebih dahulu
        setTimeout(() => {
            $('#footer').css('visibility', 'visible');
        }, 1000);
    });

    // Jika tombol enter ditekan maka fungsi pencarian film akan dijalankan
    searchElement.keyup(function (event) {
        if (event.keyCode === 13) {
            searchButtonElement.click();
        }
    });

    // Jika tombol Search ditekan maka fungsi pencarian film akan dijalankan
    searchButtonElement.click(onButtonSearchClicked);
}


// ES6 Module Exporting
export default main;