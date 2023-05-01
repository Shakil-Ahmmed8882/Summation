// declaring variables
const parent = document.getElementById('parent')
const numberInput =parent.children[0]
const calculateButton =parent.querySelector('div #nextBtn')
const clearBtn =parent.querySelector('div #clearBtn')
//counter for checking conditions
let count = 0;
let num1, num2;
//autofocus without having to click
numberInput.focus()
//event handler
calculateButton.addEventListener('click', () => {
  if (count === 0) {
    num1 = Number(numberInput.value);
    numberInput.value = '';
//counter value is one now
    count++;
    numberInput.focus()
  } else if (count === 1) {//checking second condition
    num2 = Number(numberInput.value);
    numberInput.value = '';
    count++;
    const result = num1 + num2 + Number(numberInput.value)
    numberInput.value = result
  } 
});

// clear the input
clearBtn.addEventListener('click', () =>{
    numberInput.value = ""
    count = 0
    numberInput.focus()
})


























