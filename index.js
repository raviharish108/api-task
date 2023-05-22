let apikey="70d0b45f258b0119bfe407dc9443aeb0";
let url="https://api.openweathermap.org/data/2.5/weather?q=";




let cityname= document.getElementById("inp");
console.log(cityname.value);


  

let getweather=async()=>{
    try{
    let response=await fetch(`${url}${cityname.value}&appid=${apikey}`);
    let data=await response.json();
    console.log(data);
    await displayResults(data);

    }catch(err){
       await console.log(err)
    }}
    let btn=document.getElementById("button");

    btn.addEventListener("click",getweather);


    function displayResults (weather) {
        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;
      
        let now = new Date();
        let date = document.querySelector('.location .date');
        console.log(now);
        date.innerText = dateBuilder(now);
      
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
      
        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = weather.weather[0].main;
      
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
      }

    function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${day} ${date} ${month} ${year}`;
      }