function circleArea(radius) {
    return new Promise((resolve, reject) => {
        if (radius !== 0) {
            let area = Math.PI * radius * radius;
            resolve('Circle area is calculated.')
            console.log('Area => ',area.toFixed(2));
        } else {
            reject('Error occured while circle area is calculating...')
        }
    });
}

function circleCircumference (radius) {
    let circumference = 2* Math.PI * radius;
    console.log('Circumference => ',circumference.toFixed(2));
}


module.exports = {circleCircumference, circleArea};
