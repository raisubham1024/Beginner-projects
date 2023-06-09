let randomNumber = Math.ceil(Math.random() * 100)
let valueInput_times = 0
let limit = 2
console.log(randomNumber)
let userInput

while (userInput != randomNumber && valueInput_times !== limit) {
  valueInput_times++
  if (userInput > randomNumber) {
    console.log("Greater than")
  } else if (userInput < randomNumber) {
    console.log("Less than")
  }

  userInput = Number(prompt("Enter any value : "))
}
if (valueInput_times == 0) {
  console.log(`Your chances over !!`)
}
if (userInput === randomNumber) {
  console.log("Correct Number")
}
