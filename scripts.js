const displayField = document.getElementById('display-field')
const operators = ['+', '-', '*', '/', '.']

function updateDisplayField(button) { 
  if (displayField.innerHTML.length == 0 && operators.indexOf(button) == -1) {
  displayField.innerHTML += button
} else if (displayField.innerHTML.length >= 1) {
  displayField.innerHTML += button
}}

function getResult() {
  if (isNaN(eval(displayField.innerHTML))) {
  displayField.innerHTML = 'Error'
} else {
  displayField.innerHTML = eval(displayField.innerHTML)
}}

function clearDisplay() {
  displayField.innerHTML = ''
}

function delOne() {
  displayField.innerHTML = displayField.innerHTML.slice(0, -1)
}