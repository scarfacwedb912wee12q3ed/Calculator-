const Numbers = document.querySelectorAll("[data-number]");
const Operators = document.querySelectorAll(".operatorr");
const AllClear = document.getElementById("allClear");
const Oneclear = document.getElementById("OneCLear");
const Decimal = document.getElementById("decimal");
const Equals = document.getElementById("equals");
const privous = document.getElementById("privous");
var CurrentNumber = document.getElementById("current-number");



Numbers.forEach(function(item){
    item.addEventListener("click", function(){
        if(CurrentNumber.textContent == "0"){
        
            CurrentNumber.textContent = item.textContent;

            privous.textContent=""

            result = null
            
            checkDecimal = false;
        }
        else if(CurrentNumber.textContent == result){
            
            
            
            CurrentNumber.textContent = item.textContent;
            privous.textContent=""

            result = null
            checkDecimal = false;
            
        }
        else{
            CurrentNumber.textContent += item.textContent;


        }
    })
})



var firstNum = null;
var secondNum = null;
var operator;
var result;


Operators.forEach(function(item){
    item.addEventListener("click",function(){
        if(CurrentNumber.textContent == "0")return;

        else if(firstNum === null){
            firstNum = CurrentNumber.textContent;
            operator = item.textContent;
            CurrentNumber.textContent = "";

            privous.textContent = firstNum +" "+ operator;

            checkDecimal = false;
            checkEquals = false;
            resetNumber = false;

        }
        
        else if(firstNum !== null && secondNum === null){
            if(CurrentNumber.textContent ===""){
                operator = item.textContent;
                privous.textContent =firstNum +" "+ operator;
            }
            
            else {
                secondNum = CurrentNumber.textContent;
    
                result  = sum(Number(firstNum), Number(secondNum), operator);
            
                firstNum = result;
                operator = item.textContent;

                privous.textContent =firstNum +" "+ operator;

                secondNum = null;
                CurrentNumber.textContent = "";

                checkDecimal = false;
                checkEquals = false;
                
            }
            
        }
    })
})


var checkDecimal = false;
Decimal.addEventListener("click", function(){
    if(checkDecimal === false){
        if(CurrentNumber.textContent === ""){
            CurrentNumber.textContent += "0" + Decimal.textContent;
            checkDecimal = true;


        }
        else if(CurrentNumber.textContent == result){
            checkDecimal = true;


        }
        else{
            CurrentNumber.textContent += Decimal.textContent;
            checkDecimal = true
        }
        
    }
    else return;
    
})


var checkEquals = false;
Equals.addEventListener("click", function(){
    if(firstNum === null)return;
    
    else if(checkEquals === false){
        if(CurrentNumber.textContent == ""){
        
            secondNum = firstNum;
            result  = sum(Number(firstNum), Number(secondNum), operator);
            privous.textContent = firstNum +" "+operator+" "+secondNum + " =";

            CurrentNumber.textContent = result;
            
            secondNum = null;
            firstNum = null;
        }

        else{
            if(secondNum === null){

                
                secondNum = CurrentNumber.textContent;
                
                if(operator==="÷" && secondNum == "0")reset()
                    

                else{
                result  = sum(Number(firstNum), Number(secondNum), operator);
                privous.textContent = firstNum +" "+operator+" "+secondNum + " =";
        
                CurrentNumber.textContent = result;


                secondNum = null;
                firstNum = null;
                checkEquals = true;
                }
                
                
            }
        }
    }
})




AllClear.addEventListener("click", function(){
    reset()
})
function reset(){
    firstNum = null;
    secondNum = null;
    CurrentNumber.textContent="0";
    privous.textContent="";

    checkDecimal = false;
    checkEquals = false;
    result = null;
    operator = "";
}

Oneclear.addEventListener("click", function(){
    var newtext = CurrentNumber.textContent.slice(0,CurrentNumber.textContent.length-1);
    
    CurrentNumber.textContent = newtext
    if(CurrentNumber.textContent.length == 0){
        CurrentNumber.textContent="0"
    }
})




   



function sum(num1, num2, oper){
    if(oper === "+"){
        return num1 + num2;
    }
    else if(oper === "-"){
        return num1 - num2;
    }
    else if(oper === "⨯"){
        return num1 * num2;
    }
    else if(oper === "÷"){
        return num1 / num2;
    }
}









var moon = document.getElementById("MOON");
var greenBTN = document.querySelectorAll(".grn");

var redBTN = document.querySelectorAll(".operatorr");

var calculator = document.querySelector(".calculator");

var output = document.querySelector(".output");

var body = document.body;

var counter = 0;
moon.addEventListener("click", function(){
    counter++;
    if(counter % 2 != 0){
        
        moon.classList.remove("fa-sun");
        moon.classList.add("fa-moon");
        moon.style.color="#137fdd";
    }
    else{
        moon.classList.add("fa-sun");
        moon.classList.remove("fa-moon");
        moon.style.color="gold"
    }

    greenBTN.forEach(function(item){
        item.classList.toggle("grren")
    });

    redBTN.forEach(function(item){
        item.classList.toggle("rred")
    })

    Equals.classList.toggle("equal2");

    calculator.classList.toggle("calculator2")

    output.classList.toggle("output2")

    body.classList.toggle("body2")
    
})
