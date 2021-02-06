//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {

    var result=Number(req.body.num1)+Number(req.body.num2);

    res.send("The answer is "+result);
});

app.get("/bmiCalculator",function(req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res) {
    var result=Number(req.body.weight)/(Number(req.body.height)*Number(req.body.height));
    res.send("Your BMI is : " + result);
});

app.listen(3000,function() {
    console.log("listening at port 3000");
});