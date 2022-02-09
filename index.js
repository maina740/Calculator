function calcNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
    }
    function perc() {
      var value = document.getElementById("output").innerHTML;
      value = value / 100;
      document.getElementById("output").innerHTML = value;
}