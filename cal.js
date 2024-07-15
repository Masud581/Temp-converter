function convertTemperature() {
    const temperature = parseFloat(document.getElementById('inputTemperature').value);
    const unit = document.getElementById('inputUnit').value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(temperature)) {
        document.getElementById('output').innerText = "Please enter a valid temperature.";
        return;
    }

    switch (unit) {
        case 'celsius':
            celsius = temperature;
            fahrenheit = (temperature * 9/5) + 32;
            kelvin = temperature + 273.15;
            break;
        case 'fahrenheit':
            celsius = (temperature - 32) * 5/9;
            fahrenheit = temperature;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            celsius = temperature - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = temperature;
            break;
        default:
            break;
    }

    document.getElementById('output').innerText = 
        `${celsius.toFixed(2)} °C\n${fahrenheit.toFixed(2)} °F\n${kelvin.toFixed(2)} K`;
}
