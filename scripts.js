const displayField = document.getElementById('display-field')
const operators = ['+', '-', '*', '/', '.']

// update the display field initially only if the first button clicked is not an operator
function updateDisplayField(button) { 
  if (displayField.innerHTML.length == 0 && operators.indexOf(button) == -1) {
  displayField.innerHTML += button
} else if (displayField.innerHTML.length >= 1) {
  displayField.innerHTML += button
}}

//display the result of a calculation if it is a number
function getResult() {
  if (isNaN(eval(displayField.innerHTML))) {
  displayField.innerHTML = 'Error'
} else {
  displayField.innerHTML = eval(displayField.innerHTML)
}}

//remove what is shown in the display field
function clearDisplay() {
  displayField.innerHTML = ''
}

//remove one item from the display field
function delOne() {
  displayField.innerHTML = displayField.innerHTML.slice(0, -1)
}
