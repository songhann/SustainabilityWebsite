
/* Display slider value*/

var slider = document.getElementById("customRange1");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
/* Display a window message whe nsubmitted*/

const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
  window.alert("Thanks for submitting!")
})
