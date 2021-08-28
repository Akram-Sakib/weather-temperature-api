// const searchInput = document.getElementById("search-input");
// const searchBtn   = document.getElementById("search-btn");
// const weatherImg  = document.getElementById("weather-img");
// const city        = document.getElementById("city");
// const temperature = document.getElementById("temperature");
// const clouds      = document.getElementById("clouds");

const loadData = () => {
    const searchInput = document.getElementById("search-input");
    const locationName = searchInput.value
    if (locationName == "") {
        alert("Error Please Enter a Location Name")
    }else{
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=18965afce882febf9aadfd33cb00024d`
      ).then(res => res.json()).then(data => displayData(data));
    }
}

const displayData = (data) => {
    console.log(data);
    const city = document.getElementById("city");
    const temperature = document.getElementById("temperature");
    const clouds = document.getElementById("clouds");
    city.innerText = data.name;
    temperature.innerText = data.main.temp;
    clouds.innerText = data.weather[0].main;
} 