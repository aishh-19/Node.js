const express = require("express")
const PORT = 3000;
const bodyParser = require("body-parser")
const App = express();
App.use(express.json());
const validateReqBody =(req , res , next)=>{
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;
    const error = [];
    if (typeof ID !== number){
        error.push("Must be number")
    }
    if(typeof Name !== string){
        error.push("Must be a string")
    }
    if(typeof Rating !==  number){
        error.push("Must be number")
    }
    if (typeof Description !== 'string') {
        error.push("Description must be a string.");
    }

    if (typeof Genre !== 'string') {
        error.push("Genre must be a string.");
    }

    if (!Array.isArray(Cast) || !Cast.every(item => typeof item === 'string')) {
        error.push("Cast must be an array of strings.");
    }

    App.use(bodyParser.json())
    App.post("/" , validateReqBody , (res,req)=>{
        res.status(200).json({message : "data recieved"})
    })
}
App.listen(PORT , ()=>{
    console.log("server is working")
})