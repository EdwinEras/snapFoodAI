const app = require("../app.js")

app.get('/user', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Welcome to root URL of Server");
});