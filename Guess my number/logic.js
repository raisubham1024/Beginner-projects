let randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)
let userInput

while (userInput != randomNumber) {
  if (userInput > randomNumber) {
    console.log("Greater than")
  } else if (userInput < randomNumber) {
    console.log("Less than")
  }

  userInput = Number(prompt("Enter any value : "))
}

if (userInput === randomNumber) {
  console.log("Correct Number")
}
