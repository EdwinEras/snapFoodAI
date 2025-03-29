import axios from "axios";
const route = "http://localhost:3000"
const route2 = "http://192.168.2.143:3000"
const route3 = "http://172.20.10.5:3000"

const getNutritionalFacts = async (meal) =>{
    console.log(meal);
    console.log(`Searching for meal: ${meal}`);
    try {
        //Searching for the food
        const searchResponse = await axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
            params: {
                query: meal,
                api_key: 'L9Zh1jt7dyMSChVFsVWiz5hcmIAsnci34iftKCej'
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

        //Details of food information
        const detailResponse = await axios.get(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}`, {
            params: {
                api_key: 'L9Zh1jt7dyMSChVFsVWiz5hcmIAsnci34iftKCej'
            }
        });

        const rawNutrients = detailResponse.data.foodNutrients;

        //Map name, unit, and value
        const formattedNutrients = rawNutrients.map(nutrient => ({
            name: nutrient.nutrient.name,
            unit: nutrient.nutrient.unitName,
            amount: nutrient.amount
        }));
        console.log(formattedNutrients);
        // res.status(200).send(formattedNutrients);
        return formattedNutrients;
    } catch (error) {
        console.error('Error fetching food data:', error.message);
        // res.status(500).send({ error: 'Failed to fetch food data.' });
        return { error: 'Failed to fetch food data.' };
    }
    // const data = await axios.post(route3+`/food_api/${meal}`)
    // .then(response => response.data)
    // .catch(error => error)
    // console.log(data);
    
}

module.exports = getNutritionalFacts;
