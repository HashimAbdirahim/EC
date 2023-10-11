// GLOBAL VARIABLE
let futureValue
let investmnet
let rate
let years
let i

// COLLECT VALUES FROM USER
do {
    investmnet = parseFloat(prompt('How much do you want to invest? (xxxx.xx)'))
} while (isNaN(investmnet));
do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'))
} while(!(rate > 0 && rate < 6) || isNaN(rate));
do {
    years = parseFloat (prompt('Enter the number of years you want to invest for'))  
} while (isNaN(years) || !(years > 0 && years <= 30));


// CALCULATE FUTURE VALUE
futureValue = investmnet
for(i = 0; i < years; i++){
    futureValue = futureValue + (futureValue * rate / 100)
}

// DISPLAY THE RESULT
document.write(`Investment amount : $${investmnet.toFixed(2)}<br>`)
document.write(`Interest rate : ${rate.toFixed(2)}%<br>`)
document.write(`Years : ${years}<br>`)
document.write(`Future Value : $${futureValue.toFixed(2)}`)