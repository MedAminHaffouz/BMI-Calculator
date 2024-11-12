//console.log('Happy developing ✨')



document.addEventListener("DOMContentLoaded", function () {
    let w = prompt("Give weight:");
    let h = prompt("Give height:");

    let bmi = w / (h * h);
    bmi=bmi.toFixed(2);
    let paragraph = document.getElementById("paragraph");
    let res = "Your BMI is " + bmi;

    // Use double quotes around the style value and avoid curly braces
    //paragraph.innerHTML = "<p style='color:red;'>" + res + "</p>";
    alert(res);
});