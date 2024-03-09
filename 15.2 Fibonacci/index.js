var n = prompt("How many fibonacci numbers you want to see?");
function fibonacciGenerator (n) {
    var fiboList = [];
    if (n === 1) {
        fiboList.push(0);
    } else if (n === 2) {
        fiboList.push(0, 1);
    } else if (n > 2) {
        fiboList.push(0, 1);
        for (var i = 1; i <= n - 2; i++) {
            fiboList.push(fiboList[fiboList.length - 2] + fiboList[fiboList.length - 1]);
        }
    }
    return fiboList;
}
alert(fibonacciGenerator(n));