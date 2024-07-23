
const express = require("express");
// const path = require("path");
const app = express();
const fs = require("fs")
port = 80;

// EPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));// For saving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')// set the templete enine as pug
app.set('views', './views')
// Endpoints
app.get('/', (req, res)=>{
    const con = "WE are a legends"
    const params = {'title': 'Pubg Game', 'content': con};
    res.render('index', params);
});
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    adress = req.body.adress
    more = req.body.more

    outputtowrite = `The name of the client is ${name}, ${age} year old, ${gender}, I relate to ${adress},
    more His/Her${more}`

    fs.writeFileSync('output.txt', outputtowrite);
    const params = {'message': 'Your Form has been submited SUCCESSFULLY'};
    res.render('index', params);
})
// Start the server
app.listen(port, ()=>{
    console.log(`This app successfully started on port ${port}`)
})