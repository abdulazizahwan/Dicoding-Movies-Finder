import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import main from "./scripts/view/main";

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));
app.listen(PORT, () => console.log(`app listening on port ${PORT}`))

main();