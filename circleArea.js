const arg = process.argv.slice(2);
function areaCalculation(radius) {
    const pi = Math.PI;
    let area = pi * Math.pow(radius, 2);
    console.log(area.toFixed(2));
}
areaCalculation(arg * 1);