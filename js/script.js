var ans = 0;
var text = "";
//set_display puts the text in the display, the text it gets from the add_to_string function
function set_display(text) {
    document.getElementById("display").innerHTML = text;
    
}

//read_display reads the text that is already in the display
function read_display() {
    return document.getElementById("display").innerHTML;
}

//add_to_string builds the string that is displayed
//if the display says "Answer" it is cleared otherwise it adds to the display depending on which button is clicked
//"( read_display() + input.toString() );" becomes "text" in the set_display function
function add_to_string(input) {
    if ( read_display().trim() == "Answer"){ set_display(""); }
    
    set_display( read_display() + input.toString() );
}

//removes all the text inside the display
function all_clear() {
    set_display(""); 
}

//makes the string in the display into numbers and calculates, also changes my fabulous math symbols into the symbols 
//js uses to do math
function calculate(ans){
    text = document.getElementById("display").innerHTML;
    console.log(text);
    text= text.replace("×", "*");
    text = text.replace("÷", "/");
    text = text.replace("^", "**");
//    text = text.replace("√", ...);  not sure how to replace √ with math.sqrt() and place the number within the parentheses
    console.log(text)
    ans = eval(text);
    console.log(ans);
    set_display(ans.toString());
}

//deletes the last character of the string
function delete_input(){
    text = document.getElementById("display").innerHTML;
    text = text.substring(0,text.length - 1);
    console.log(text);
    set_display(text);
}

//buttons which give input to the add-to-string function
document.getElementById("btnPlus").onclick = function(){
    add_to_string("+");
}
document.getElementById("btnMinus").onclick = function(){
    add_to_string("-");
}
document.getElementById("btnMultiply").onclick = function(){
    add_to_string("×");
}
document.getElementById("btnDivide").onclick = function(){
    add_to_string("÷");
}
document.getElementById("btnPower").onclick = function(){
    add_to_string("^");
}
document.getElementById("btnRoot").onclick = function(){
    add_to_string("√");
}
document.getElementById("btnDecimal").onclick = function(){
    add_to_string(".");
}
document.getElementById("btn1").onclick = function(){
    add_to_string(1);
}
document.getElementById("btn2").onclick = function(){
    add_to_string(2);
}
document.getElementById("btn3").onclick = function(){
    add_to_string(3);
}
document.getElementById("btn4").onclick = function(){
    add_to_string(4);
}
document.getElementById("btn5").onclick = function(){
    add_to_string(5);
}
document.getElementById("btn6").onclick = function(){
    add_to_string(6);
}
document.getElementById("btn7").onclick = function(){
    add_to_string(7);
}
document.getElementById("btn8").onclick = function(){
    add_to_string(8);
}
document.getElementById("btn9").onclick = function(){
    add_to_string(9);
}
document.getElementById("btn0").onclick = function(){
    add_to_string(0);
}
document.getElementById("btnAllClear").onclick = function(){
    all_clear();
}
document.getElementById("btnDelete").onclick = function(){
    delete_input();
}
document.getElementById("btnEquals").onclick = function(){
    calculate();
}