const express = require('express');
const mealDetection = require('./google_vision')
// const admin = require('./firebaseAdmin');
const app = express();

var cors = require('cors')
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to snapFoodAI REST API");
});

// User HTTP requests
app.get('/user', async (req, res)=>{
    console.log(req.body);
    res.status(200).send("Users API");
});

app.post('/user', async (req, res) => {
    const data = req.body;
    console.log(data);
    const users = await createUser(data);
    res.send(users);
});


// Google HTTP requests
app.get('/image-recognition', async (req, res)=>{
    console.log(req.body);
    res.status(200).send("Google API");
});

app.post('/image-recognition', async(req, res)=>{
    const uri = req.body.uri;
    console.log(uri);
    // await mealDetection(uri);
    res.status(200).send(uri);
});


// FoodAPI HTTP requests
app.get('/food_api', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Food Api");
});


// Rewards HTTP requests
app.get('/rewards', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Rewards API");
});
