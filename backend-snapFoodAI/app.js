const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to snapFoodAI REST API");
});

app.get('/user', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Users api");
});

app.post('/image-recognition', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Welcome to root URL of Server");
});

app.get('/food_api', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Food Api");
});

app.get('/rewards', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Food Api");
});
