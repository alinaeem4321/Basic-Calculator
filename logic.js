// grab input box from the HTML into JS
  let input = document.getElementById("result")
  // Make an on-click functions
  function disp(n){
    // when it shows zero then change the value on display to the number keyed in
    if(input.value == 0){
      input.value = n
      // when any number greater than zero is keyed in, then keep on adding new numbers into the first number
    } else{
      input.value = input.value+n
    }
  }
  // equal button should evaluate numbers and operator and return the answer on the screen
function equal(){
  input. value = eval(input.value)
}
// All Clear will print zero on the screen
function clr(){
  input.value = 0;
}
// Clear should delete one number from the leftside regardless the number on display is (+)ve or (-)ve
function del(){
  if(input.value > 0 || input.value < 0  ){
  input.value = input.value.slice(0,-1)
  // when all numbers are deleted then the display should show a zero
  } else {
    input.value = 0;
  }
}