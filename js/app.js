const display = document.querySelector("#display");
display.innerHTML = "";
const btnsContainer  = document.querySelector("#btnsContainer");

const pressZero=()=>{
	display.innerHTML += "0";
}

const pressOne =()=> {
	display.innerHTML += "1";
}

const pressClear =()=>{
	display.innerHTML = "";
}

const pressSum = () => {
	display.innerHTML += "+";
} 

const pressSubtract = () => {
	display.innerHTML += "-";
}; 

const pressMultiply = () => {
	display.innerHTML  += "*";
}

const pressDivide = () => {
	display.innerHTML += "/";
} 

const operatorsRegExp = /[\+\-\/\*]/;

const testForOps = () => {return operatorsRegExp.test(display.innerHTML)} 

const pressEqual = () => {
	// separate operand1 , operator, operand2
	//if operator exists continue steps
	const operator = display.innerHTML.match(operatorsRegExp)[0];
	const [operand1,operand2] = display.innerHTML.split(operatorsRegExp);
	//code throws Uncaught TypeError: Cannot read property '0' of null
	//implement try catch [finally]
	
	if(operand1 && operator && operand2){
		// switch cases for which operator to use in equation
		// convert from binary string, equate
		// return correct binary
		switch(operator){
			case "+" :
				display.innerHTML = ( parseInt(operand1,2) + parseInt(operand2,2) ).toString(2);
				break;
			case "-" :
				display.innerHTML = ( parseInt(operand1,2) - parseInt(operand2,2) ).toString(2); 
				break;
			case "*" :
				display.innerHTML = ( parseInt(operand1,2) * parseInt(operand2,2) ).toString(2);
				break;
			case "/" :
				display.innerHTML = ( parseInt(operand1,2) / parseInt(operand2,2) ).toString(2);
				break;
		}
	} else console.error("op1,op, or op2 is missing")
	
} 

const btnsPressed=(btnID)=>{
	switch (btnID) {
		case "btn0" :
			console.log(`${btnID} was pressed.`);
			pressZero();
			break;
		case "btn1" :
			console.log(`${btnID} was pressed.`);
			pressOne();
			break;
		case  "btnClr" :
			console.log(`${btnID} was pressed.`);
			pressClear()
			break;
		case "btnEql" :
			console.log(`${btnID} was pressed.`);
			pressEqual();
			break;
		case "btnSum" :
			console.log(`${btnID} was pressed.`);
			if(testForOps()) {pressEqual()} ;
			pressSum();
			break;
		case "btnSub" :
			console.log(`${btnID} was pressed.`);
			testForOps() ? pressEqual() :
			pressSubtract();
			break;
		case "btnMul" :
			console.log(`${btnID} was pressed.`);
			testForOps() ? pressEqual() :
			pressMultiply();
			break;
		case "btnDiv":
			console.log(`${btnID} was pressed.`);
			testForOps() ? pressEqual() :
			pressDivide();
			break;
	}
}






btnsContainer.addEventListener( "click", (event) => btnsPressed(event.target.id) )