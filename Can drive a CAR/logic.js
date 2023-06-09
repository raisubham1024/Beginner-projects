// if user want's to check again-n-again result of age, then it click on 'Yes' in confirm window

let userInput = Number(prompt("What's your age ? "))
const validAge = 18

const canDrive = (age) => {
  let cal = age >= validAge ? true : false

  let result = cal === true ? "can" : "can't"

  return `User, ${result} drive a car`
}

if (userInput > 0) {
  console.log(canDrive(userInput))

  let seeYouagain = confirm("Do you want to input again ?")

  while (seeYouagain && userInput > 0) {
    userInput = Number(prompt("What's your age ? "))
    console.log(canDrive(userInput))
    seeYouagain = confirm("Do you want to input again ?")
  }
} else {
  console.log(`Please enter valid age`)
}
