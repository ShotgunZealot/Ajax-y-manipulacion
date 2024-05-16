document.addEventListener('DOMContentLoaded', function () {
    const weatherForm = document.getElementById('weather-form');
    const weatherInfo = document.getElementById('weather-info');

    weatherForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const city = document.getElementById('city').value;
        getWeather(city);
    });

    function getWeather(city) {
        const apiKey = '53fb878c10b06d93b14576fdc175efda';  
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener la información del clima para esta ciudad.');
                }
                return response.json();
            })
            .then(data => {
                showWeather(data);
            })
            .catch(error => {
                console.error('Error:', error);
                weatherInfo.innerHTML = '<p>No se pudo obtener la información del clima para esta ciudad. Por favor, verifica el nombre de la ciudad e intenta nuevamente.</p>';
            });
    }

    function showWeather(data) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        const weatherHTML = `
            <p>El clima en ${cityName} es ${temperature}°C con ${weatherDescription}.</p>
        `;

        weatherInfo.innerHTML = weatherHTML;
    }
});
