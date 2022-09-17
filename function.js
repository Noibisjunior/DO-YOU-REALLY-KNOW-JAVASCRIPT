//function to log out factorial numbers
// function Noibi() {
//     if(num < 0){
//         return -1
//     };
// }
// Noibi();
// undefined + undefined = NAN

//function tenHi() {
//     for (let k = 0; k < 10; k++) {
//         console.log('i must finish my project');        
//     }
// }
// tenHi
// function repeat(name,number) {
//     for(var x=0;x<number;x++){
// console.log('hello',name,number)
//     }
    
// }
// repeat('kolasjunior',10)

//Assignment 1
// function loop( a ) {
//     for (var x = 0; x < a.length; x++) {
//         console.log('hello',a);
        
//     }
// }
// loop(['hamza', 'noibi', 'joseph', 'bunmi', 'Abdulsalaam'])
//answer

// function loops(a) {
//   a.forEach(function(a) {
//     console.log('hello',a )
//   })
//   }

// loops(['hamza', 'noibi', 'joseph', 'bunmi', 'Abdulsalaam'])

// correction
var friends = ['hamza', 'noibi', 'joseph', 'bunmi', 'Abdulsalaam']

function greetings(arr) {
  for(var i = 0;i<arr.length;i++){
    console.log('hello',arr[i]);
  }
}
greetings(friends)


//alternative Assignment2
// z
// function add(num1,num2) {
//  console.log(num1 + num2) 
// }

// add(10,10);

// function sub(num1, num2) {
//   console.log(num1 - num2)
// }

// sub(10, 10)

// function div(num1, num2) {
//   console.log(num1 / num2)
// }

// div(10, 10)

// function calc(operation,num1,num2) {
//   if (operation === '+') {
//     console.log(num1 + num2)
//   } else if (operation === '-') {
//     console.log(num1 - num2)
//   } else if (operation === '*') {
//     console.log(num1 * num2)
//   } else if (operation === '/') {
//     console.log(num1 / num2)
//   }
// }
// calc('+',10,5)
// //understanding a callback function
// function calc(operation, num1, num2) {
//   if (operation === '+') {
//     add(num1 + num2,num2)//calling the add function inside the calc function
//   } else if (operation === '-') {
//     console.log(num1 - num2)
//   } else if (operation === '*') {
//     console.log(num1 * num2)
//   } else if (operation === '/') {
//     console.log(num1 / num2)
//   }
// }
// calc()

function GPA(score,grade) {
  var score=prompt('enter your score humbly')
  if(score >= 70 && score<= 100){alert('distinction')}
  else if(score >= 60 && score <= 50){
    alert('upper credit')
  }
  return score
}
GPA()

// function names(name,grade) {
//   console.log(`hey ${name} your score is ${grade}`);
  
// }
// names('NOIBISJUNIOR','A')









