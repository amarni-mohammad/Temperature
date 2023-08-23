const apiKey="fb9ca7777f73a195831170229936f315";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  searchBox=document.querySelector(".search input");
  searchBtn=document.querySelector(".search button");

async function checkWether(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data= await response.json()
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
}
searchBtn.addEventListener("click",()=>{

    checkWether(searchBox.value)
});





