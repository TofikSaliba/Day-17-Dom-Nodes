const inputs = document.querySelectorAll(".container input");
const msg = document.querySelector(".msg");
msg.style.color = "red";

inputs[0].focus();

//! input by pasting code block
inputs[0].addEventListener("paste", function (event) {
  let paste = (event.clipboardData || window.clipboardData).getData("text");

  //! check paste length
  if (paste.length !== 6) {
    msg.innerText = "Please Paste only 6 characters";
    setTimeout(() => {
      resetInput();
    }, 0);
  } else {
    //! fill the input boxes with paste letters
    for (let i = 0; i < 6; i++) {
      inputs[i].value = paste[i];
    }
    inputs[5].focus();
    checkInput();
  }
});

//! regular typing input code block
for (let i = 0; i < 6; i++) {
  //! this if purpose is to check when i reach the last input box so i validate the input
  //! event to move focus from box to box
  inputs[i].addEventListener("keyup", () => {
    if (i < 5 && inputs[i].value.length === 1) {
      inputs[i + 1].focus();
      inputs[i + 1].value = "";
    } else if (i === 5) {
      checkInput();
    }
  });
}

//! function to check input validity
function checkInput() {
  if (
    inputs[0].value === "2" &&
    inputs[1].value === "4" &&
    inputs[2].value === "6" &&
    inputs[3].value === "8" &&
    inputs[4].value === "1" &&
    inputs[5].value === "0"
  ) {
    msg.innerText = "";
    setTimeout(() => {
      resetInput();
    }, 300);
    return true;
  }
  msg.innerText = "Code Does Not Match";
  return false;
}

//! function to reset input elements
function resetInput() {
  for (let i = 0; i < 6; i++) {
    inputs[i].value = "";
  }
  inputs[0].focus();
}
