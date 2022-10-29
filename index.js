// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));
 console.log(Array.isArray(buttons));

// buttons.map((button) => {
//   button.addEventListener('click', (e) => {
//     // console.log(e.target.innerText); //output the button value
//     switch (
//       e.target.innerText //element user clicks on
//     ) {
//       case 'C':
//         display.innerText = '' //this line of code clears all value
//         break;

//       case '←':
//         if (display.innerText !== '') {
//           display.innerText = display.innerText.slice(0, -1);//this line of code delete each value
//         }
//         break;
//       case '=':
//         try {
//           display.innerText = eval(display.innerText);//this line of code calculate the mathematical expression
//         } catch (error) {
//           display.innerText =
//             error.message = `(${display.innerText}) is a syntax error`;
//         }

//         break;

//       default:
//         display.innerText += e.target.innerText;//this line of code pass the value into the display container
//     }
//   });
// });

const display = document.getElementById('display');

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        if (display.innerText !== '') {
          display.innerText = '';
        } else {
          display.innerText = `${display.innerText} is not valid`;
        }
        break;

      case '←':
        display.innerText = display.innerText.slice(0, -1);
        break;

      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText =
            error.message = `(${display.innerText}) is a syntax error`;
        }
        break;
      default:
        display.innerText += e.target.innerText;
        break;
    }
  });
});
