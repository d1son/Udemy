// print all numbers beteween -10 and 19
var counter = -10

while(counter <= 19) {
	console.log(counter);
	counter++;
};

// print all even numbers between 10 and 40
var counter = 10

while(counter <= 40) {
	console.log(counter);
	counter+=2;
};

//print all odd numbers between 300 and 333
var counter = 300

while(counter <= 333) {
	if (counter % 2 !== 0) {
		console.log(counter);
	}
	counter+=1;
}

//print all numbers divisible by 5 AND 3 between 5 and 50
 var counter = 5

 while(counter <= 50) {
 	if (counter % 5 === 0 && counter % 3 === 0) {
 		console.log(counter);
 	}
 	counter+=1;
 };