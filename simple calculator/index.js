function clearScreen() {
    
    document.querySelector('#result').value = "";
    
}
function display(value) {
   
    document.querySelector('#result').value += value;
    const disp = document.querySelector("#result");
    disp.style.color  = "orange";
    
}
function calculate() {
    var p = document.querySelector('#result').value;
    var q = eval(p);
    document.querySelector('#result').value = q;
    
}