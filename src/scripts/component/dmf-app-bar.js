class DmfAppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Menggunakan AppBar atau NavBar dari submission kelas Web Dasar
        // https://github.com/abdulazizahwan/abdulazizahwan.github.io
        this.shadowDOM.innerHTML = `
        <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        a {
            text-decoration: none;
        }

        .container {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }

        .nav {
            padding: 8px 0px;
        }

        .nav .logo {
            display: block;
            float: left;
            font-size: 2em;
            text-decoration: none;
        }

        .nav .logo img {
            height: 30px;
            vertical-align: middle;
        }

        .brand-title{
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
        }

        /* Navigation */

        .nav ul {
            margin: 0;
            padding: 0;
            list-style: none;
            overflow: hidden;
            align-content: center;
        }

        .nav li a {
            display: block;
            text-decoration: none;
            color: white;
            font-weight: bold;
            padding: 10px 10px;
        }

        .nav .menu {
            clear: both;
            max-height: 0;
            transition: max-height .2s ease-out;
        }

        /* Navigation icon */
        /* Appear when mobile mode */
        .nav .menu-icon {
            cursor: pointer;
            display: block;
            float: right;
            padding: 28px 0px;
            position: relative;
            user-select: none;
        }

        .nav .menu-icon .navicon {
            background: #fff;
            display: block;
            height: 2px;
            position: relative;
            transition: #fff .2s ease-out;
            width: 18px;
        }

        .nav .menu-icon .navicon:before,
        .nav .menu-icon .navicon:after {
            background: #fff;
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all .2s ease-out;
            width: 100%;
        }

        .nav .menu-icon .navicon:before {
            top: 5px;
        }

        .nav .menu-icon .navicon:after {
            top: -5px;
        }

        /* End Navigation icon */

        /* Setting for menu botton */
        /* Using checkbox condition */

        .nav .menu-btn {
            display: none;
        }

        .nav .menu-btn:checked~.menu {
            max-height: 240px;
        }

        .nav .menu-btn:checked~.menu-icon .navicon {
            background: transparent;
        }

        .nav .menu-btn:checked~.menu-icon .navicon:before {
            transform: rotate(-45deg);
        }

        .nav .menu-btn:checked~.menu-icon .navicon:after {
            transform: rotate(45deg);
        }

        .nav .menu-btn:checked~.menu-icon:not(.steps) .navicon:before,
        .nav .menu-btn:checked~.menu-icon:not(.steps) .navicon:after {
            top: 0;
        }

        /* End menu button */

        .container-fluid,
        .container-lg,
        .container-md,
        .container-sm,
        .container-xl {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto
        }

        @media (min-width:576px) {

            .container,
            .container-sm {
                max-width: 540px
            }
        }

        @media (min-width:768px) {

            .container,
            .container-md,
            .container-sm {
                max-width: 720px
            }

            .nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .nav li {
                float: left;
            }

            .nav li a {
                padding: 10px 0px 10px 20px;
            }

            .nav .menu {
                clear: none;
                float: right;
                max-height: none;
            }

            .nav .menu-icon {
                display: none;
            }
        }

        @media (min-width:992px) {

            .container,
            .container-lg,
            .container-md,
            .container-sm {
                max-width: 960px
            }
        }

        @media (min-width:1200px) {

            .container,
            .container-lg,
            .container-md,
            .container-sm,
            .container-xl {
                max-width: 1140px
            }
        }

        </style>

        <div class="nav container-sm">
            <a href="index.html" class="logo"><img src="https://image.flaticon.com/icons/svg/876/876331.svg" alt="Logo"><span class="brand-title">&ensp;DMovies Finder</span></a>

            <!-- Icon -->
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>


            <ul class="menu">
                <li><a href="index.html">Popular</a></li>
            </ul>

        </div>
        `;
    }
}

customElements.define("dmf-app-bar", DmfAppBar);