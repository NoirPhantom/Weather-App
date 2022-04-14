const weatherBtn = document.getElementById('show-weather')
const userInput = document.getElementById('zipcode')
const api_Key = '2509ec90a8034ff2caa33987f3801a09'
let zip;

let cityName = document.getElementById('city-name')
let latitude = document.getElementById('lat')
let longitude = document.getElementById('lon')
let main = document.getElementById('weather-main')
let description = document.getElementById('weather-desc')
let windSpeed = document.getElementById('wind-speed')
let degree = document.getElementById('wind-degree')
let currentTemp = document.getElementById('temp-current')
let minTemp = document.getElementById('temp-min')
let maxTemp = document.getElementById('temp-max')
let humidity = document.getElementById('humidity')

weatherBtn.addEventListener('click', () => {
  zip = userInput.value
  showWeather(zip)
})

async function showWeather(param) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${param},us&units=imperial&appid=${api_Key}`
  );

     if (response.ok) {
        let json = await response.json()

        cityName.innerHTML = json.name
        latitude.innerHTML = json.coord.lat
        longitude.innerHTML = json.coord.lon
        main.innerHTML = json.weather[0].main
        description.innerHTML = json.weather[0].description
        windSpeed.innerHTML = json.wind.speed
        degree.innerHTML = json.wind.deg
        currentTemp.innerHTML = json.main.temp
        minTemp.innerHTML = json.main.temp_min
        maxTemp.innerHTML = json.main.tamp_max
        humidity.innerHTML = json.main.humidity

      } else {
        alert("Invalid Zipcode Entry!")
    }
}
