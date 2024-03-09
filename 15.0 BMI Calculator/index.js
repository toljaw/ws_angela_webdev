var weight = prompt("What's your weight in kg?");
var height = prompt("What's your height in m?");

function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);

    if (bmi < 18.5) {
        var interpretation = `Your BMI is ${bmi}, so you are underweight.`
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        var interpretation = `Your BMI is ${bmi}, so you have a normal weight.`
    }
    if (bmi > 24.9) {
        var interpretation = `Your BMI is ${bmi}, so you are overweight.`
    }
    return interpretation;
}
alert(bmiCalculator(weight,height));