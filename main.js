const byDefult = () => {
  const url = `https://api.weatherapi.com/v1/current.json?key=c2332aa5f0464d69a1660750222802&q=Dhaka&aqi=no`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showLoadData(data));
};
byDefult();

const loadApi = () => {
  const searchBox = document.getElementById("search-box");
  const url = `https://api.weatherapi.com/v1/current.json?key=c2332aa5f0464d69a1660750222802&q=${searchBox.value}&aqi=no`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showLoadData(data));
  searchBox.value = "";
};
const setText = (id, text, img = false) => {
  const setText = document.getElementById(id);
  if (img == true) {
    setText.setAttribute("src", text);
    // setText.setAttribute("src", text);
    return setText;
  } else {
    setText.innerText = text;
    return setText;
  }
};

const showLoadData = (data) => {
  console.log(data);
  // console.log(data.condition.icon, false);
  setText("city-name", data.location.name);
  setText("weather-img-heding", data.current.condition.icon, true);
  setText("temp", data.current.temp_c);
  setText("current-taxt", data.current.condition.text);
  setText("wind", data.current.wind_kph);
  setText("hum", data.current.humidity);
};
