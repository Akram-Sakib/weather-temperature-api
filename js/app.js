// const searchInput = document.getElementById("search-input");
// const searchBtn   = document.getElementById("search-btn");
// const weatherImg  = document.getElementById("weather-img");
// const city        = document.getElementById("city");
// const temperature = document.getElementById("temperature");
// const clouds      = document.getElementById("clouds");

function getLocation() {
  console.log(navigator.geolocation);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
getLocation();

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=18965afce882febf9aadfd33cb00024d`
  )
    .then((res) => res.json())
    .then((data) => loadData(data));

}



const loadData = (currentCity) => {
  const searchInput = document.getElementById("search-input");
  const locationName = searchInput.value;
  
  var CityName = locationName != "" ? locationName : currentCity.name;
  
  if (CityName == "") {
    alert("Error Please Enter a Location Name");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=18965afce882febf9aadfd33cb00024d`
    )
      .then((res) => res.json())
      .then((data) => displayData(data));
  }
};

const displayData = (data) => {
  console.log(data);
  const city = document.getElementById("city");
  const temperature = document.getElementById("temperature");
  const weatherImg = document.getElementById("weather-img");
  const clouds = document.getElementById("clouds");

  let { name } = data;
  let { temp } = data.main;
  let { main, icon } = data.weather[0];

  weatherImg.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${icon}@2x.png`
  );
  city.innerText = name;
  temperature.innerText = Math.round(temp - 273);
  clouds.innerText = main;
};
