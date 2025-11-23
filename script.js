let celsius = document.getElementById('number1');
let fahrenheit = document.getElementById('number2');
let kelvin = document.getElementById('number3');
let error = document.getElementById('errorMsg');

celsius.addEventListener('input', function(event) {
    let num = parseFloat(event.target.value);
    if(!isNaN(num)) {
        error.innerText = '';
        let val1 = (num * 9/5) + 32;
        fahrenheit.value = val1 + '°F';
        let val2 = (num + 273.15);
        kelvin.value = val2 + 'K';
    }
    else {
        fahrenheit.value = "";
        kelvin.value = "";
        error.innerText = 'Please enter a valid number!';
    }
});

fahrenheit.addEventListener('input', function(event) {
        let num = parseFloat(event.target.value);
    if(!isNaN(num)) {
        error.innerText = '';
        let val1 = (num - 32) * 5/9;
        celsius.value = val1 + '°C';
        let val2 = (num - 32) * 5/9 + 273.15;
        kelvin.value = val2 + 'K';
    }
    else {
        celsius.value = "";
        kelvin.value = "";
        error.innerText = 'Please enter a valid number!';
    }
});

kelvin.addEventListener('input', function(event) {
    let num = parseFloat(event.target.value);
    if(!isNaN(num)) {
        error.innerText = '';
        let val1 = num - 273.15;
        celsius.value = val1 + '°C';
        let val2 = (num - 273.15) * 9/5 + 32;
        fahrenheit.value = val2 + 'F';
    }
    else {
        celsius.value = "";
        fahrenheit.value = "";
        error.innerText = 'Please enter a valid number!';
    }
});