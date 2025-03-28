const express = require('express');
const mealDetection = require('./google_vision')
// const admin = require('./firebaseAdmin');
const app = express();


app.use(express.json());
var cors = require('cors')
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.listen(PORT, '0.0.0.0', () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to snapFoodAI REST API");
});

// User HTTP requests

let users = [];

app.get('/user', async (req, res) => {
    console.log(users); 
    res.status(200).json(users); 
});

app.post('/user', async (req, res) => {
  console.log("Received Data:", req.body); 
  const { Email, Password, 'Confirm_Password': confirmPassword } = req.body;
  // if (!Email || !Password || !confirmPassword) {
  //   return res.status(400).send({ message: 'Missing email, password or confirm password' });
  // }
  // if (Password !== confirmPassword) {
  //   return res.status(400).send({ message: 'Passwords do not match' });
  // }
  // const user = users.find(user => user.email === Email);
  // if (user) {
  //   return res.status(400).send({ message: 'User already exists' });
  // }
  const newUser = { email: Email, password: Password };
  users.push(newUser); 
  return res.status(201).send({ message: 'User created successfully', user: newUser });
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
