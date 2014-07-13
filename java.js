

function run1(){
	document.calc.result.value +="1";
 }
function run2(){
	document.calc.result.value +="2";
 }
 function run3(){
	document.calc.result.value +="3";
 }
 function run4(){
	document.calc.result.value +="4";
 }
 function run5(){
	document.calc.result.value +="6";
 }
 function run6(){
	document.calc.result.value +="6";
 }
 function run7(){
	document.calc.result.value +="7";
 }
 function run8(){
	document.calc.result.value +="8";
 }
 function run9(){
	document.calc.result.value +="9";
 }
 function run0(){
	document.calc.result.value +="0";
 }
 
 
 
 
 
  function runadd(){
	document.calc.result.value +="+";
 }

 function runsub(){
	document.calc.result.value +="-";
 }

 function runmult(){
	document.calc.result.value +="*";
 }

 function rundiv(){
	document.calc.result.value +="/";
 }

 function rundot(){
	document.calc.result.value +=".";
 }

 function runperc(){
	document.calc.result.value +="%";
 }




 function runclear(){
	document.calc.result.value ="";
 }

 function runequ(){
	 var equ = eval(document.calc.result.value);
	 runclear();
	document.calc.result.value +=equ;
 }


