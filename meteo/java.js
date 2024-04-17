const box = document.getElementById("searchBox");
const cherche = document.getElementById("recherche");
const ville = document.getElementById("city");
const temps = document.getElementById("temp");
const humiditer = document.getElementById("humidity");
const vent = document.getElementById("wind");
const APIKEY = "8cad8d6ddb1b6454f66e3cb8f682b6b9";

let apiCall = function (MyCity) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url)
    .then((Response) =>
      Response.json().then((data) => {
        ville.innerHTML = data.name;
        temps.innerHTML =
          "<i class='fa-solid fa-temperature-three-quarters'></i>" +
          data.main.temp +
          "°";
        humiditer.innerHTML =
          "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + "%";
        vent.innerHTML =
          "<i class='fa-solid fa-wind'></i>" + data.wind.speed + "Km/h";
      })
    )
    .catch((err) => console.log("erreur :" + err));
};
console.log(vent);

cherche.addEventListener("click", function (e) {
  e.preventDefault();
  let TaVille = box.value;
  console.log(TaVille);
  apiCall(TaVille);
});
