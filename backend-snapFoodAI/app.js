const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios');
const API_KEY = 'L9Zh1jt7dyMSChVFsVWiz5hcmIAsnci34iftKCej'; 
const PORT = process.env.PORT || 3000;

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
app.get('/image-recognition', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Google API");
});

app.post('/image-recognition', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Welcome to root URL of Server");
});


// FoodAPI HTTP requests
app.get('/food_api/:meal', async (req, res) => {
    const meal = req.params.meal;
    console.log(`Searching for meal: ${meal}`);

    try {
        //Searching for the food
        const searchResponse = await axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
            params: {
                query: meal,
                api_key: API_KEY
            }
        });

        const foods = searchResponse.data.foods;

        const filteredFoods = foods.filter(f => 
            f.description.toLowerCase().includes(meal.toLowerCase())
        );

        if (!filteredFoods || filteredFoods.length === 0) {
            return res.status(404).send({ error: 'No food found with that name.' });
        }
        
        const fdcId = filteredFoods[0].fdcId;

        // console.log(foods.map(f => f.description));

        //Details of food information
        const detailResponse = await axios.get(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}`, {
            params: {
                api_key: API_KEY
            }
        });

        const rawNutrients = detailResponse.data.foodNutrients;

        //Map name, unit, and value
        const formattedNutrients = rawNutrients.map(nutrient => ({
            name: nutrient.nutrient.name,
            unit: nutrient.nutrient.unitName,
            amount: nutrient.amount
        }));

        res.status(200).send(formattedNutrients);

    } catch (error) {
        console.error('Error fetching food data:', error.message);
        res.status(500).send({ error: 'Failed to fetch food data.' });
    }
});


// Rewards HTTP requests
app.get('/rewards', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Rewards API");
});
