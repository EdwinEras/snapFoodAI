const app = require("../app.js")

app.post('/image-recognition', (req, res)=>{
    console.log(req.body);
    res.status(200).send("Welcome to root URL of Server");
});