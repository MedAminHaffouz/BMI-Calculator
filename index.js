//console.log('Happy developing ✨')



/*document.addEventListener("DOMContentLoaded", function () {
    let w = prompt("Give weight:");
    let h = prompt("Give height:");

    let bmi = w / (h * h);
    bmi=bmi.toFixed(2);
    let paragraph = document.getElementById("paragraph");
    let res = "Your BMI is " + bmi;


    //paragraph.innerHTML = "<p style='color:red;'>" + res + "</p>";
    alert(res);
});*/

function calculateBMI() {
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const roundedBMI = bmi.toFixed(2);

    // Determine BMI status
    let status;
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    // Display results
    document.getElementById("bmiValue").innerText = roundedBMI;
    document.getElementById("bmiStatus").innerText = status;
}
