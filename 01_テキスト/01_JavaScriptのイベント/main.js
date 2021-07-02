//button 要素と click イベント
const alertMessage = function() {
  alert("クリックしたね")
}

alertMessage() //アラートが表示される
// イベントが発生する要素を取得する
const button = document.getElementById("button")

const alertMessage = function() {
  alert("クリックしたね")
}

//関数を登録
button.onclick = alertMessage

const button = document.getElementById("button")

button.onclick = function() {
  alert("クリックしたね")
}

const button = document.getElementsByClassName("button")

const alertMessage = function() {
  alert("クリックしたね")
}

button.onclick = alertMessage

//input 要素と　input イベント
const inputText = document.getElementsByClassName("input-text")
const inputData = document.getElementsByClassName("input-data")

const sayHello = function() {
  console.log("hello")
}

inputText.oniput = sayHello
inputData.oniput = sayHello

const inputText = document.getElementsById("inout-text")
const inputData = document.getElementsById("input-data")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oniput = logValue
inputData.oniput = logValue

document.onkeydown = function(e) {
  console.log(e.key)
}
