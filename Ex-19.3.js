const inputs = document.querySelectorAll(".container input");
const msg = document.querySelector(".msg");
msg.style.color = "red";

inputs[0].focus();

//! input by pasting code block
inputs[0].addEventListener("paste", function (event) {
  let paste = event.clipboardData.getData("text");

  //! check paste length
  if (paste.length !== 6) {
    msg.innerText = "Please Paste only 6 characters";
    setTimeout(() => {
      resetInput();
    }, 0);
  } else {
    setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        inputs[i].value = paste[i];
      }
      inputs[5].focus();
      //! check if its correct code
      if (checkInput()) {
        msg.innerText = "";
        setTimeout(() => {
          resetInput();
        }, 1000);
      } else {
        msg.innerText = "Code Does Not Match";
      }
    }, 0);
  }
});

//! regular typing input code block
for (let i = 0; i < 6; i++) {
  //! this if purpose is to check when i reach the last input box so i validate the input
  if (i < inputs.length - 1) {
    //! event to move focus from box to box
    inputs[i].addEventListener("keyup", () => {
      if (inputs[i].value.length === 1) {
        inputs[i + 1].focus();
        inputs[i + 1].value = "";
      }
    });
  } else {
    inputs[i].addEventListener("keyup", () => {
      //! validate input after last box input
      if (checkInput()) {
        resetInput();
        msg.innerText = "";
      } else {
        msg.innerText = "Code Does Not Match";
      }
    });
  }
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
    return true;
  }
  return false;
}

//! function to reset input elements
function resetInput() {
  for (let i = 0; i < 6; i++) {
    inputs[i].value = "";
  }
  inputs[0].focus();
}
