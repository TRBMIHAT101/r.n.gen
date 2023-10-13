document.getElementById('generateBtn').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 10000000) + 1; // Generates a random number between 1 and 10000000
    document.getElementById('randomNumber').textContent = 'Random Number: ' + randomNumber;
});
