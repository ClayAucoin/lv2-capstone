const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.open-meteo.com/v1/forecast?latitude=29.9547&longitude=-90.0751&daily=sunrise,sunset,daylight_duration&current=apparent_temperature,precipitation,rain,showers,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,temperature_2m,snowfall,is_day&timezone=America%2FChicago&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));



function getPotion() {
    const potions = [
        { name: "Potion1 Name", desc: "This potion does this" },
        { name: "Potion2 Name", desc: "This potion does this" },
    ]
