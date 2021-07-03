const number = 24

if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}

//ｎに入っている値を１から、numberまで、１ずつ増やしながら、｛｝の中身を繰り返す
for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
}

//引数numberを受け取る関数
const genkiFunction = function(number) {
  //ｎを１から、numberまで、値を1ずつ増やしながら、forの｛｝の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.loh(n)
    }
  }
}
genkiFunction(24)
genkiFunction(100)
