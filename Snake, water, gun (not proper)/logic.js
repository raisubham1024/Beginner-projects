let values = ["S", "W", "G"]
let userInput = prompt("Enter : S or W or G")
let computer = values[Math.ceil(Math.random() * 2)].toLowerCase()
//checking...
let userInputCheck = /^[swg]$/i.test(userInput)

const match = (userInput, computer) => {
  if (userInputCheck !== false) {
    if (computer === userInput) {
      return "Nobody"
    } else if (computer === "s" && userInput === "w") {
      return "computer"
    } else if (computer === "s" && userInput === "g") {
      return "user"
    } else if (computer === "g" && userInput === "w") {
      return "user"
    } else if (computer === "g" && userInput === "s") {
      return "computer"
    } else if (computer === "w" && userInput === "s") {
      return "computer"
    } else if (computer === "w" && userInput === "g") {
      return "computer"
    }
  } else {
    console.log("Not valid input")
  }
}

let result = match(userInput, computer)
console.log(`User : ${userInput}\nComputer : ${computer}\n\nWinner : ${result}`)
