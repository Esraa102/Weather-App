// const weather_http = 'https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=0a935e23cf03452932dc6699a6c8c525&units=metric';
const api_key = "0a935e23cf03452932dc6699a6c8c525";
const weather_url = "https://api.openweathermap.org/data/2.5/weather?";
let seachIinput = document.querySelector(".search-box input");
let searchBtn = document.querySelector("button.searchBtn");
let temp = document.querySelector("h1.temp");
let cityName = document.querySelector("h2.city-name");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
let weatherImage = document.querySelector("img.weather-image");
 const weatherImg = {
    "Clouds" : "images/cloudy.png",
    "Rain" : "images/raining.png",
    "Snow": "images/snow.png",
    "Clear" : "images/sun.png",
    "Mist" : "images/icons8-mist-96.png",
    "Drizzle": "images/rainy-day.png",
 }
 searchBtn.addEventListener("click",() => {
  if(seachIinput.value.length) {
    console.log(seachIinput.value);
    fetch(weather_url + new URLSearchParams({
        "q" : seachIinput.value,
        appid:api_key,
        units:'metric',
      
    })).then(response => {
         return response.json();
    })
    .then(data => {
        if(data.cod != "404")   {
            document.querySelector(".error").style.display = "none";
            document.querySelector(".weather-status").classList.remove("hidden");
            temp.innerHTML = `${Math.round(data.main.temp)} °c`;
            cityName.innerHTML = data.name;
            humidity.innerHTML = `${data.main.humidity}%`;
            windSpeed.innerHTML = `${data.wind.speed} km/h`;
            weatherImage.src = weatherImg[data.weather[0].main];
            seachIinput.value = "";
            seachIinput.focus();
        } else {
        console.log("error");
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-status").classList.add("hidden");
        seachIinput.value = "";
}
}) 
}
});
 

//End :)