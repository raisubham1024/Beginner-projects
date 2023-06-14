let a = setInterval(function () {
  i += 10
  if (i != 110) {
    console.log(
      `%cstart hacking "Facebook" --> %c${i}%`,
      `color : #cff74f`,
      "color : red"
    )
  } else {
    console.log(
      "%c Sucessfully Facebook Hacked ! 😂",
      "color : #66ff34; font-weight: bold"
    )
    clearInterval(a)
  }
}, 500)