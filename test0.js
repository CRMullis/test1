/* Code by Collin Mullis
	CMP237 Exam 1 Practicum
	test 0 practicum
*/

// i variable used for counter
for (var i = 0; i <= 100; i++) {
// checks to see if "i" is even, then prints "I'm an even" if true.	
	if (i % 2 == 0)
		console.log("I'm an even" + " " + i);
// checks to see if "i" is odd, then prints "I'm an odd one" if true.		
	else if (i % 2 != 0) 
		console.log("I'm an odd one" + " " + i);
	}
// prints "Yay, you can count to 100 now!" After the for loop has finished.
	console.log("Yay, you can count to 100 now!")
	
