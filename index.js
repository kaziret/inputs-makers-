function go() {
  var number1 = document.getElementById('submit1').value;
  var number2 = parseInt(document.getElementById('submit2').value);
  
  if(number2 < 0 ){
    alert('-1');
  } else if(number1.length < number2){
    alert('0');
  } else {
  alert (number1[number1.length-number2])
  } 
}
    