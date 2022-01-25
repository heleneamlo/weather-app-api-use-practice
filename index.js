const express = require("express");
const https = require("https");
const app = express();



app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=2ed06f3d16c548cad4bf62c9a5824dfd";
    https.get(url, (response)  =>{
        response.on("data", (data)=>{
            let weatherData = JSON.parse(data)
            console.log(weatherData.main.temp);
            let weatherDescription = weatherData.weather[0].description;

            const icon = weatherData.weather[0].icon;
            const imageURL = `http://openweathermap.org/ing/wn/${icon}@2x.png`;
            res.write('<head><meta charset="utf-8"></head>');
            res.write("<h1>The temperature in Oslo is "+weatherData.main.temp+" degrees celsius</h1>");
            res.write("<h3>The weather is now "+weatherDescription+"</h3>");
            res.write(`<h1></h1><img src="${imageURL}" alt="current weather">`)
            res.end();
        })
    })
});

app.listen(3000, function(){
    console.log("the server is running on port 3000.")
});

