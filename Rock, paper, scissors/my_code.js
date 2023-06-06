function rps(p1, p2) {
  // input value
  const inputs = [p1, p2]

  // all possible inputs value
  const allPossible = ["rock", "scissors", "paper"]

  // 1. find missing value
  const missingValue = allPossible.filter((item) => !inputs.includes(item))

  // Rock(winner) VS Scissors
  if (missingValue == "paper") {
    const find_ROCK_Winner = inputs.indexOf("rock") + 1
    return `Player ${find_ROCK_Winner} won!`
  }

  // Scissors(winner) VS Paper
  else if (missingValue == "rock") {
    const find_SCISSORS_winner = inputs.indexOf("scissors") + 1
    return `Player ${find_SCISSORS_winner} won!`
  }

  //Paper(winner) VS Rock
  else if (missingValue == "scissors") {
    const find_PAPER_winner = inputs.indexOf("paper") + 1
    return `Player ${find_PAPER_winner} won!`
  }

  // lastly == for Draw situation
  else if (p1 == p2) {
    return "Draw!"
  }
}
