// Open weather api key:
let api_key = '2efa223f9ef044586ce8f83ccca64d0b'; 

// function to check if the data entered is shown -- not important
// const showData = () => {
//     let userInput = document.getElementById('city_id');
//     console.log(userInput.value)
// };

// function to get data from api
// let cityName = document.getElementById('#city_id').value
// console.log(cityName)

function getData() {
    let cityName = document.getElementById('city_id').value
    console.log(cityName)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('#name_city').innerHTML = cityName
        let hTemp = (data.main.temp_max)
        let lTemp = (data.main.temp_min)
        let forecast = (data.weather[0].main)
        let humidity = (data.main.humidity)
        let cTemp = (data.main.temp)
        document.querySelector('#highTemp').innerHTML = (hTemp + " °K")
        document.querySelector('#lowTemp').innerHTML = (lTemp + " °K")
        document.querySelector('#Forecast').innerHTML = forecast
        document.querySelector('#Humidity').innerHTML = (humidity + "%")
        document.querySelector('#cTemp').innerHTML = (cTemp + " °K")
    });
};

function celsius() {
    let hTemp = parseFloat(document.getElementById('highTemp').innerHTML.split(' °')[0])
    let lTemp = parseFloat(document.getElementById('lowTemp').innerHTML.split(' °')[0])
    let cTemp = parseFloat(document.getElementById('cTemp').innerHTML.split(' °')[0])
    // console.log(document.getElementById('highTemp').innerHTML.split(' °'))
    let cctemp = cTemp
    let chtemp = hTemp
    let cltemp = lTemp

    // Fahrenheit to Celsius:
    if(document.getElementById('highTemp').innerHTML.split(' °')[1] === 'F') {
        cctemp = ((cTemp - 32)*5)/9
        chtemp = ((hTemp - 32)*5)/9
        cltemp = ((lTemp - 32)*5)/9
    }
    // Kelvin to Celsius
    else if(document.getElementById('highTemp').innerHTML.split(' °')[1] === 'K') {
        cctemp = cTemp - 273.15
        chtemp = hTemp - 273.15
        cltemp = lTemp - 273.15
    }
    document.querySelector('#cTemp').innerHTML = (cctemp.toFixed(2) + " °C")
    document.querySelector('#highTemp').innerHTML = (chtemp.toFixed(2) + " °C")
    document.querySelector('#lowTemp').innerHTML = (cltemp.toFixed(2) + " °C")
};

function fahrenheit() {
    let hTemp = parseFloat(document.getElementById('highTemp').innerHTML.split(' °')[0])
    let lTemp = parseFloat(document.getElementById('lowTemp').innerHTML.split(' °')[0])
    let cTemp = parseFloat(document.getElementById('cTemp').innerHTML.split(' °')[0])
    // console.log(document.getElementById('highTemp').innerHTML.split(' °'))
    let cctemp = cTemp
    let chtemp = hTemp
    let cltemp = lTemp

    // Celsius to Fahrenheit:
    if(document.getElementById('highTemp').innerHTML.split(' °')[1] === 'C') {
        cctemp = cTemp * (9/5) + 32
        chtemp = hTemp * (9/5) + 32
        cltemp = lTemp * (9/5) + 32
    }
    // Kelvin to Fahrenheit
    else if(document.getElementById('highTemp').innerHTML.split(' °')[1] === 'K') {
        cctemp = (cTemp * (9/5)) - 459.67
        chtemp = (hTemp * (9/5)) - 459.67
        cltemp = (lTemp * (9/5)) - 459.67
    }
    document.querySelector('#cTemp').innerHTML = (cctemp.toFixed(2) + " °F")
    document.querySelector('#highTemp').innerHTML = (chtemp.toFixed(2) + " °F")
    document.querySelector('#lowTemp').innerHTML = (cltemp.toFixed(2) + " °F")
}

