var age = prompt("How old are you in years?");
var lifeExpect = prompt("For how long are you expecting to live?");
function lifeInWeeks(age, lifeExpect) {
    var days = (lifeExpect*365)-(age*365);
    var weeks = (lifeExpect*52)-(age*52);
    var month = (lifeExpect*12)-(age*12);
    alert(`You have ${days} days, ${weeks} weeks or ${month} month left.`);
}
lifeInWeeks(age, lifeExpect);