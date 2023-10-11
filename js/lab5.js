let miles
let gallons
let mpg
let again = 'y'
do {
    miles = parseFloat(prompt('Enter the miles driven.'))
    gallons = parseFloat(prompt('Enter the number of gallons fuel tank holds'))
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons
        console.log(`Your car gets ${mpg.toFixed(2)} miles to the gallon.`)
    } else {
        alert('One or both entries is invalid.')
    }
    do {
        again = prompt('Repeat entries? (y or n)')
    } while (!(again === 'y' || again === 'n'));

} while (again === 'y');

console.log('The program has been terminated.')