document.getElementById("calculate").addEventListener("click", function() {

    let electricity = Number(document.getElementById("electricity").value);
    let transport = document.getElementById("transport").value;
    let flights = Number(document.getElementById("flights").value);

    if (electricity <= 0 || flights < 0) {
        document.getElementById("result").textContent = "Please enter valid input values.";
        return;
    }

    let transportFactor = 0;

    if (transport === "car") transportFactor = 200;
    if (transport === "bus") transportFactor = 80;
    if (transport === "bike") transportFactor = 20;
    if (transport === "walk") transportFactor = 0;

    let electricityCO2 = electricity * 0.5 * 12;
    let flightsCO2 = flights * 150;

    let total = electricityCO2 + flightsCO2 + transportFactor;

    document.getElementById("result").textContent =
        "Estimated Annual Carbon Footprint: " + total.toFixed(2) + " kg CO2";
});
