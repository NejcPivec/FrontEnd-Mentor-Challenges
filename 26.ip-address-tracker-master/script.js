// Dom selectors
const form = document.getElementById("form");
const userInput = document.querySelector("#user-input");
const ipText = document.querySelector(".ip-text");
const cityText = document.querySelector(".city-text");
const timezoneText = document.querySelector(".timezone-text");
const ispText = document.querySelector(".isp-text");
const map = L.map("map");

// Initial values
let longitude = -122.032;
let latitude = 37.323;
const zoomValue = 10;

// Form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //user input
  const userValue = userInput.value;

  if (userValue !== "") {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_xFoSKwR1665Bc8GsetxkQEDOpJATq&domain=${userValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        handleResponse(data);
      });
  }
});

// Map

map.setView([latitude, longitude], zoomValue);

const loadMap = () => {
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoibmVwaSIsImEiOiJja2VoOG84bzkxa2E3MnlsdGF0OGptYWYxIn0.BJy49M9Hq67TcCqcFloYnw",
    }
  ).addTo(map);
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("Your searched Location")
    .openPopup();
};

loadMap();

// Response from API
const handleResponse = (data) => {
  ipText.innerText = data.ip;
  cityText.innerText = data.location.region;
  timezoneText.innerText = data.location.timezone;
  ispText.innerText = data.isp;
  longitude = data.location.lng;
  latitude = data.location.lat;

  map.setView([longitude, latitude], zoomValue);
  loadMap();
};
