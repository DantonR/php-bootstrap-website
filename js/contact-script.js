var btn = document.querySelector('#submitBtn');
console.log(btn);



btn.addEventListener('click', function(e){
  // e.preventDefault();
  var input = e.target.form["0"].value
  input += ' \n\t' + input[input.length - 1]
  console.log(input);
  

  console.log('working');
  
});

function testFunc(){
  var field = document.querySelector('#inputField');
  if(field.value.length < 4){
    field.style.backgroundColor = 'red'
  } else {
    field.style.backgroundColor = 'green'
  }
    

  
}