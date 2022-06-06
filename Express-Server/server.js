const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

const app=express();

app.use(bodyParser.json());
app.use(cors());

app.get('',(req,res)=>{
    res.send('Hello from the server');
});

app.post('http://localhost:3000/enroll',(req,res)=>{
    console.log(req.body);
    res.status(200).send(" message: data received");
});

app.listen(PORT,()=>{console.log("server running on localhost:"+PORT)});