const weatherForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const firstMessage = document.querySelector("#message-1");
const secondMessage = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  firstMessage.textContent = "Loading...";
  secondMessage.textContent = null;

  const location = searchInput.value;
  fetchWeather(location);
});

const fetchWeather = (location) => {
  const url = `/weather?address=${location}`;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        firstMessage.textContent = data.error;
      } else {
        firstMessage.textContent = data.location;
        secondMessage.textContent = data.forecast;
      }
    });
  });
};
