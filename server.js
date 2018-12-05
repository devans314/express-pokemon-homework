const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js')
const methodOverride = require('method-override')
const bodyParser = require("body-parser");


app.use(express.static('./public'))
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


app.get("/pokemon", (req, res) => {
    res.send(Pokemon);
})










app.listen(3000, ()=>{
    console.log('app is running on port 3000')
})