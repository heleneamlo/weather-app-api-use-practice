const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req,res)=>{
    console.log(req.body.cityName);
})

app.listen(3000, function(){
    console.log("the server is running on port 3000.")
});

// const query = "Oslo";
// const appID = "2ed06f3d16c548cad4bf62c9a5824dfd";
// const unit = "metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+units+"&appid="+appID+"";
// https.get(url, (response)  =>{
//     response.on("data", (data)=>{
//         let weatherData = JSON.parse(data)
//         console.log(weatherData.main.temp);
//         let weatherDescription = weatherData.weather[0].description;

//         const icon = weatherData.weather[0].icon;
//         const imageurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//         res.write('<head><meta charset="utf-8"></head>');
//         res.write("<h1>The temperature in Oslo is "+weatherData.main.temp+" degrees celsius</h1>");
//         res.write("<h3>The weather is now "+weatherDescription+"</h3>");
//         res.write(`<img src="`+imageurl +`" alt="current weather">`)
//         res.end();
//     })
// })