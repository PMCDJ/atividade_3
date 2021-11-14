const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const PORTA = process.env.PORT || 8080;

app.listen(8080,() =>{
    console.log(`a ouvir na porta ${PORTA}`)
});
    
app.use(express.static("public"));    
