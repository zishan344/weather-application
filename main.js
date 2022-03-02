const loadApi = () => {
  const searchBox = document.getElementById("search-box");
  const url = `https://api.weatherapi.com/v1/current.json?key=c2332aa5f0464d69a1660750222802&q=${searchBox.value}&aqi=no`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showLoadData(data));
  searchBox.value = "";
};
const showLoadData = (data) => {
  const searchResults = document.getElementById("weather-card");
};
