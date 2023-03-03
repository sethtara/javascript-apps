const api='53d1fe82cd7d5d1d915f11c304da204e';
let searchBtn = document.getElementById("search-btn");
let cityname = document.getElementById("city");
let res = document.getElementById('name');


let getWeather = () => {

  let cityValue = cityname.value;
  //incase of empty field
  if (cityValue.length == 0) {
    cityname.placeholder="Search City";
  }
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api}&units=metric`;
    cityname.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        res.textContent=`${data.name}, ${data.sys.country}`;

        document.getElementById('temp').innerHTML=`${data.main.temp.toFixed(0)}&#176;C`;

        document.getElementById('feels').innerHTML=`<b>${data.weather[0].description}</b> &emsp;feels like: ${data.main.feels_like}&#176;C`;
        document.getElementById('img').innerHTML=`<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
        document.getElementById('max').innerHTML=`max-temp : ${data.main.temp_max.toFixed(1)}&#176;C`;
        document.getElementById('min').innerHTML=`min-temp : ${data.main.temp_min.toFixed(1)}&#176;C`;
        document.getElementById('hum').innerHTML=`humidity : ${data.main.humidity} %`;
        document.getElementById('pre').innerHTML=`wind: ${data.wind.speed} m/s`;
        cityname.placeholder="Search City";




       })
      //for invalid city or any error's
      .catch(() => {
        cityname.placeholder="Not a city !!";
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
