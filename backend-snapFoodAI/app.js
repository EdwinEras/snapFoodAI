const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) =>{
    if(!error){
        console.log("Server listening on port: "+ PORT)
    }else{ 
        console.log("Server error: ", error);
    }
});

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to snapFoodAI REST API");
});

module.exports = app;