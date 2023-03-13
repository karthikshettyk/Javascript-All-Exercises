let num1 = prompt("Enter 1 number");
let num2 = prompt("Enter 2 number");
let operator = prompt ("Enter operator")

switch(operator){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "%":
        console.log(num1/num2);
        break;            
}