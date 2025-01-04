var sensorType; // Variable to store the current sensor type

        function showPopup(type) {
            sensorType = type; // Set the current sensor type
            var currentThreshold = document.getElementById(type + 'Threshold').innerText;
            document.getElementById('thresholdInput').value = currentThreshold;
            document.getElementById('overlay').style.display = 'flex';
        }
        
        // function saveThreshold() {
        //     var newThreshold = document.getElementById('thresholdInput').value;
        //     document.getElementById(sensorType + 'Threshold').innerText = newThreshold;
        //     closePopup();
        // }

        function closePopup() {
            document.getElementById('overlay').style.display = 'none';
        }

        // // Replace the following values with real-time data from your terrarium sensors
        // document.getElementById('lightIntensity').innerText = '500 Lux';
        // document.getElementById('humidity').innerText = '60%';
        // document.getElementById('moisture').innerText = '40%';
        // document.getElementById('temperature').innerText = '25°C';

        // // Replace the following values with your threshold values
        // document.getElementById('lightThreshold').innerText = '800 Lux';
        // document.getElementById('humidityThreshold').innerText = '70%';
        // document.getElementById('moistureThreshold').innerText = '50%';
        // document.getElementById('temperatureThreshold').innerText = '30°C';

//         // Function to update the sensor values
// function updateSensorValues(sensors) {
//     document.getElementById('lightIntensity').textContent = sensors.light_intensity + ' Lux';
//     document.getElementById('humidity').textContent = sensors.humidity + ' %';
//     document.getElementById('moisture').textContent = sensors.moisture + ' %';
//     document.getElementById('temperature').textContent = sensors.temperature + ' °C';
// }


// // Function to update the thresholds
// function updateThresholds(thresholds) {
//     document.getElementById('lightThreshold').textContent = thresholds.lightIntensity_thresholds + ' Lux';
//     document.getElementById('humidityThreshold').textContent = thresholds.humidity_thresholds + ' %';
//     document.getElementById('moistureThreshold').textContent = thresholds.moisture_thresholds + ' %';
//     document.getElementById('temperatureThreshold').textContent = thresholds.temperature_thresholds + ' °C';
// }