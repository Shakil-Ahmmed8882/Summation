// declaring variables
const parent = document.getElementById("parent");
const numberInput = parent.children[0];
const calculateButton = parent.querySelector("div #nextBtn");
const clearBtn = parent.querySelector("div #clearBtn");
//counter for checking conditions
let count = 0;
let num1, num2, num3;
//autofocus without having to click
numberInput.focus();
//event handler
calculateButton.addEventListener("click", () => {
  if (count === 0) {
    num1 = Number(numberInput.value);
    numberInput.value = "";
    //counter value is one now
    count++;
    numberInput.focus();
  } else if (count === 1) {
    //checking second condition
    num2 = Number(numberInput.value);
    numberInput.value = "";
    count++;
    numberInput.value = "";
    numberInput.focus();
  } else if (count === 2) {
    //checking third condition
    count++
    num3 = Number(numberInput.value);
    //invoking the function with three arguments
    let result = add(num1, num2, num3);
    numberInput.value = result;
  }
});
// Function here receives the arguments
// and produces the result
function add(firstnumber, secondnumber, thirdnumber) {
  let result = firstnumber + secondnumber + thirdnumber;
  return result;
}

// clear the input
clearBtn.addEventListener("click", () => {
  numberInput.value = "";
  count = 0;
  numberInput.focus();
});
