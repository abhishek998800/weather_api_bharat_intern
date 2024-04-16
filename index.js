const API_KEY = "387a2563e48ab0ba659ae28e029a254a";
let inputValue = document.getElementById("input");
let submit = document.getElementById('submit');
let name = document.getElementById('name')
let desc = document.getElementById('description')
let temperature = document.getElementById('temperature')
let wind = document.getElementById('wind')

submit.addEventListener("click",()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=' +API_KEY)
    .then(res => res.json())
    .then(data => 
        {
            var description = data['weather']['0']['description']
            var windspeed = data['wind']['speed']
            var temparature = data['main']['temp']
            var nameval = data['name']

            name.innerHTML = nameval;
            desc.innerText = "Description : " + description;
            temperature.innerHTML = "Temperature : " + temparature;
            wind.innerText = "Wind Speed  : " + windspeed;

        })
    })
