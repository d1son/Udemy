// alert("HELLO!")

// Write a function isEven() which takes a single number and returns true if the numnber is even, false if if it isn't

function isEven(num) {
	if(num % 2 === 0) {
		return "true"
	} else {
		return "false"
	}
};

console.log(isEven(4));	
console.log(isEven(21));	
console.log(isEven(68));	
console.log(isEven(333));	

//There is a better way to write the code above, see the simplified version below. This is a better way to write the code since num % 2 === 0 is a boolean, which is a true or false statement, this then returns the value of the true or false boolean num % 2 === 0

function isEven(num) {
	return num % 2 === 0
};

// write a function factorial() which takes a single numeric argument and returns the factorial of that number

function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++) {
		result *= i
	}
	return result;
}

// write a function kebab-to-snake where it takes kebab statements and turns it into snake case

function kebabToSnake(str) {
	//replace all dashes "-" with underscores "_"
	var newStr = str.replace(/-/g, "_"); //str is the variable we pass through, therefore str.replace will replace things in the given str variable. the /-/g represents what we are looking to replace. Anything between the /???/ will be found and replaced with whatever is in the "???", this case being the "_".
	//return str
	return newStr;
}