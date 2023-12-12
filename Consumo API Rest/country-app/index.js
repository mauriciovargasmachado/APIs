const URL = "https://restcountries.com/v3.1/all";

function generateRandomCountry() {
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const countries = data;
            const randomSelection = Math.floor(Math.random() * countries.length);
            const randomCountry = countries[randomSelection];

            document.getElementById("name").innerHTML = "Nombre: " + randomCountry.name.common;
            document.querySelector("img").src = randomCountry.flags.png;
            document.getElementById("capital").innerHTML = "Capital: " + randomCountry.capital;
            document.getElementById("region").innerHTML = "Región: " + randomCountry.region;
            document.getElementById("languages").innerHTML = "Idiomas: " + randomCountry.languages[0];
            document.getElementById("continent").innerHTML = "Continente: " + randomCountry.continents;
            document.getElementById("currencies").innerHTML = "Moneda: " + randomCountry.currencies[0];
            const mapsLink = document.querySelector("a");
            mapsLink.href = randomCountry.maps.googleMaps;
            mapsLink.innerHTML = "Ubicacion: " + randomCountry.maps.googleMaps;
            document.getElementById("population").innerHTML = "Población: " + randomCountry.population;
            document.getElementById("timezones").innerHTML = "Zonas horarias: " + randomCountry.timezones;
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });
}

const generateButton = document.querySelector("button");
generateButton.addEventListener("click", generateRandomCountry);

generateRandomCountry();