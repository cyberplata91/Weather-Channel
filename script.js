document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#submitButton");
    const input = document.querySelector("#cityInput");

    button.addEventListener("click", () => {
        const ciudad = input.value;
        cargarCiudad(ciudad);
    });

    function cargarCiudad(ciudad) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es`;

        // Realizar la solicitud AJAX 
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                document.querySelector(".container").style.visibility = "visible";
                document.querySelector("#ciudad").textContent = data.name;
                document.querySelector("#temperatura").innerHTML = `${Math.round(
                    data.main.temp
                )}<sup>°C</sup>`;
                const iconoId = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/w/${iconoId}.png`;
                document.querySelector("#wicon").src = iconUrl;
                document.querySelector("#descripcion").textContent =
                    data.weather[0].description;
            })
            .catch((error) => {
                console.error("Error al cargar la ciudad:", error);
            });
    }
});
