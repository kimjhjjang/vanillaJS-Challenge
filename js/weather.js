const API_KEY = "70c6b2121e65b25a6af99576e3f45c45";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => { 
            const weather = document.querySelector("#weather span:last-child");
            const city = document.querySelector("#weather span:first-child");
            console.log(data);
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} /  기온 : ${Math.floor(data.main.temp)}°C`;
        });
}

function onGeoError(){
    alert("can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

