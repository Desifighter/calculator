
  
  document.addEventListener('keydown', function(event) {
    if (event.key === '=') {
      // Do something
      calculate();
    }
    else if (event.key === '1') {
        // Do something
        addNumToDisplay(1);
        
      }
      else if (event.key === '2') {
        // Do something
        addNumToDisplay(2);
        
      }
      else if (event.key === '3') {
        // Do something
        addNumToDisplay(3);
        
      }
      else if (event.key === '4') {
        // Do something
        addNumToDisplay(4);
      }
      else if (event.key === '5') {
        // Do something
        addNumToDisplay(5);
        
      }
      else if (event.key === '6') {
        // Do something
        addNumToDisplay(6);
        
      }
      else if (event.key === '7') {
        // Do something
        addNumToDisplay(7);
        
      }  
      else if (event.key === '8') {
        // Do something
        addNumToDisplay(8);
        
      }
      else if (event.key === '9') {
        // Do something
        addNumToDisplay(9);
        
      }
      else if (event.key === '0') {
        // Do something
        addNumToDisplay(0);
        
      }
      else if (event.key === '/') {
        // Do something
        divide();
        
      }
      else if (event.key === 'x') {
        // Do something
        multiply();
        
      }
      else if (event.key === '-') {
        // Do something
        minus();
        
      }
      else if (event.key === '+') {
        // Do something
        add();
        
      }
      else if (event.key === '.') {
        // Do something
        addNumToDisplay(10);

        
      }
      else if (event.key === 'Backspace') {
        // Do something
        backspace();
      }

  });
  

function addNumToDisplay(num) {
    var str = document.getElementById("overwrite-result").innerText;

    if (num===10) {
        num = ".";
    }
    document.getElementById("overwrite-result").innerHTML = str + num;

}
function backspace() {
    var str = document.getElementById("overwrite-result").innerText;

    document.getElementById("overwrite-result").innerHTML = str.substring(0,str.length-1);
}
function CE() {
    document.getElementById("overwrite-result").innerHTML = "";
    document.getElementById("overwrite-question").innerHTML = "";
}
function C() {
    document.getElementById("overwrite-result").innerHTML = "";
}

function add() {
    calculate();
    var str = document.getElementById("overwrite-result").innerText;
    if (str==="" || str.charAt(str.length-1)==='+' || str.charAt(str.length-1)==='-' ||str.charAt(str.length-1)==='*'||str.charAt(str.length-1)==='/' ){
        return;
    }
    document.getElementById("overwrite-question").innerHTML = str;
    document.getElementById("overwrite-result").innerHTML = str + "+";

}

function minus() {
    calculate();
    var str = document.getElementById("overwrite-result").innerText;
    if (str==="" ||str.charAt(str.length-1)==='+' || str.charAt(str.length-1)==='-' ||str.charAt(str.length-1)==='*'||str.charAt(str.length-1)==='/' ){
        return;
    }
    document.getElementById("overwrite-question").innerHTML = str;
    document.getElementById("overwrite-result").innerHTML = str + "-";
}
function multiply() {
    calculate();
    var str = document.getElementById("overwrite-result").innerText;
    if (str==="" || str.charAt(str.length-1)==='+' || str.charAt(str.length-1)==='-' ||str.charAt(str.length-1)==='*'||str.charAt(str.length-1)==='/' ){
        return;
    }
    document.getElementById("overwrite-question").innerHTML = str;
    document.getElementById("overwrite-result").innerHTML = str + "*";
}

function divide() {
    calculate();
    var str = document.getElementById("overwrite-result").innerText;
    if (str==="" || str.charAt(str.length-1)==='+' || str.charAt(str.length-1)==='-' ||str.charAt(str.length-1)==='*'||str.charAt(str.length-1)==='/' ){
        return;
    }
    document.getElementById("overwrite-question").innerHTML = str;
    document.getElementById("overwrite-result").innerHTML = str + "/";
}

function his(question,answer) {
    var str = document.getElementById("last").innerText;
    str = str + "<br>" + answer + " = " + question; 
    document.getElementById("last").innerHTML = str;
  }

function bindelete() {
    document.getElementById("last").innerHTML = "";
}  
function calculate() {
    var str = document.getElementById("overwrite-result").innerText;

    if (str==="") {
        return;
    }

    var num;
    if (str.includes("+")) {
        var arr = str.split("+");
        if (arr[1]==="") {
            return;
        }
        num = parseFloat(arr[0]) + parseFloat(arr[1]);
        document.getElementById("overwrite-result").innerHTML = num;

    }
    else if (str.includes("-")) {
        var arr = str.split("-");
        if (arr[1]==="") {
            return;
        }
        num = parseFloat(arr[0]) - parseFloat(arr[1]);
        document.getElementById("overwrite-result").innerHTML = num;
    }
    else if (str.includes("*")) {
        var arr = str.split("*");
        if (arr[1]==="") {
            return;
        }
        num = parseFloat(arr[0]) * parseFloat(arr[1]);
        document.getElementById("overwrite-result").innerHTML = num;
    }
    else if (str.includes("/")) {
        var arr = str.split("/");
        if (arr[1]==="") {
            return;
        }
        num = (parseFloat(arr[0]) / parseFloat(arr[1])).toFixed(3);
        document.getElementById("overwrite-result").innerHTML = num;
    }
    else{
        return;
    }
    his(num,str);
    document.getElementById("overwrite-question").innerHTML = str;

}

function onebyans() {
    calculate();
    var str = document.getElementById("overwrite-result").innerText;
    if (str===""){
        return;
    }
    if ( str.charAt(str.length-1)==='+' || str.charAt(str.length-1)==='-' ||str.charAt(str.length-1)==='*'||str.charAt(str.length-1)==='/') {
        str = str.substring(0,str.length-1);
    }
    document.getElementById("overwrite-question").innerHTML = "1/"+ str;
    var ans = 1/parseFloat(str);
    document.getElementById("overwrite-result").innerHTML = ans.toFixed(3);
}
function anspower2() {
    calculate();
    var str = document.getElementById("overwrite-result").innerText;
    if (str===""){
        return;
    }
    if ( str.charAt(str.length-1)==='+' || str.charAt(str.length-1)==='-' ||str.charAt(str.length-1)==='*'||str.charAt(str.length-1)==='/') {
        str = str.substring(0,str.length-1);
    }
    document.getElementById("overwrite-question").innerHTML = "square("+ str+")";
    var ans = parseFloat(str) * parseFloat(str);
    document.getElementById("overwrite-result").innerHTML = ans.toFixed(3);
}

function sqrtofans() {
    calculate();
    var str = document.getElementById("overwrite-result").innerText;
    if (str===""){
        return;
    }
    if ( str.charAt(str.length-1)==='+' || str.charAt(str.length-1)==='-' ||str.charAt(str.length-1)==='*'||str.charAt(str.length-1)==='/') {
        str = str.substring(0,str.length-1);
    }
    document.getElementById("overwrite-question").innerHTML = "sqrt("+ str+")";
    var ans = Math.sqrt(parseFloat(str)) ;
    document.getElementById("overwrite-result").innerHTML = ans.toFixed(3);
}
function percent() {
    
    var str = document.getElementById("overwrite-result").innerText;
    if (str===""){
        return;
    }
    if ( str.charAt(str.length-1)==='+' || str.charAt(str.length-1)==='-' ||str.charAt(str.length-1)==='*'||str.charAt(str.length-1)==='/') {
        str = str.substring(0,str.length-1);
    }
    


    if (str.includes("+")) {
        var arr = str.split("+");
       
        var num = parseFloat(arr[0]) + ((parseFloat(arr[1]) * parseFloat(arr[0]))/100);
        document.getElementById("overwrite-result").innerHTML = num.toFixed(3);

    }
    else if (str.includes("-")) {
        var arr = str.split("-");
    
        var num = parseFloat(arr[0]) - ((parseFloat(arr[1]) * parseFloat(arr[0]))/100);
        document.getElementById("overwrite-result").innerHTML = num.toFixed(3);
    }
    else if (str.includes("*")) {
        var arr = str.split("*");
        
        var num = parseFloat(arr[0]) * ((parseFloat(arr[1]) * parseFloat(arr[0]))/100);
        document.getElementById("overwrite-result").innerHTML = num.toFixed(3);
    }
    else if (str.includes("/")) {
        var arr = str.split("/");
        
        var num = parseFloat(arr[0]) / ((parseFloat(arr[1]) * parseFloat(arr[0]))/100);
        document.getElementById("overwrite-result").innerHTML = num.toFixed(3);
    }
    else{
        document.getElementById("overwrite-question").innerHTML = str+"/100";
        var ans = parseFloat(str)/100 ;
        document.getElementById("overwrite-result").innerHTML = ans.toFixed(3);
    }


    
}