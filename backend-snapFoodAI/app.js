const express = require('express');
const mealDetection = require('./google_vision')
const cors = require("cors");
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
const upload = multer({ dest: 'uploads/' });

app.listen(PORT, '0.0.0.0', () => {
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
app.post('/image_recognition', upload.single('image'), async(req, res)=>{
    const filePath = path.join(__dirname, req.file.path);
    console.log(filePath);
    const labels = await mealDetection(filePath);
    res.status(200).send(labels);
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
