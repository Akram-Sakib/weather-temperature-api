// const searchInput = document.getElementById("search-input");
// const searchBtn   = document.getElementById("search-btn");
// const weatherImg  = document.getElementById("weather-img");
// const city        = document.getElementById("city");
// const temperature = document.getElementById("temperature");
// const clouds      = document.getElementById("clouds");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
getLocation();

function showPosition(position) {
  console.log(
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude
  );
}


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

    let {name} = data;
    let {feels_like} = data.main
    let {main} = data.weather[0];

    city.innerText = name;
    temperature.innerText = Math.round(feels_like - 273);
    clouds.innerText = main;
} 