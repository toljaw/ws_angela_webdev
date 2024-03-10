/* creating a Claas / Constructor Function */
function Car (color, wheels, doors) {
    /* Attributes */
    this.color = color;
    this.wheels = wheels;
    this.doors = doors;
    /* Methods */
    this.startEngine = function() {
        alert("Brumm brumm!");
    }
    this.stopEngine = function () {
        alert("You are ready to go!")
    }
}

const bmw = new Car("white",4,4);
alert("Hallo");
alert(`My color is ${bmw.color}.`);
alert(`I have ${bmw.wheels} wheels.`);
alert(`I have ${bmw.doors} doors.`);
bmw.startEngine();
bmw.stopEngine();