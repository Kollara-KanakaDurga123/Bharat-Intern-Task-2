const apikey = "9cb0f2da2957539097ff7fefac5f31ad"

async function searchWeather(city) {
    const response = await fetch( 
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    )
    const respData = await response.json()
    document.querySelector(".city").innerHTML = respData.name,
    document.querySelector(".country").innerHTML = respData.sys.country;
    document.querySelector(".icon").src = 
    `https://openweathermap.org/img/wn/${respData.weather[0].icon}@2x.png`;
    document.querySelector(".temp").innerHTML = Math.round(respData.main.temp - 273.15);
    document.querySelector(".description").innerHTML = respData.weather[0].main;
    document.querySelector(".wind").innerHTML = respData.wind.speed;
}

function changeCity(event) {
    if(event.key === "Enter") {
        const city = document.getElementById("search").value;
        searchWeather(city)
    }
}
