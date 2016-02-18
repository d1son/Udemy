//VERSION 1, the answer needs to be "yes" or "yeah"

// var answer = prompt("are we there yet?");

// while(answer !== "yes" && "yeah") {
// 	var answer = prompt("are we there yet?");
// }

// alert("YAY!, WE MADE IT!!!");


//VERSION 2, the answer can have the string "yes" anywhere in the answer 

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}

alert("YAY!, WE MADE IT!!!");