

// arrays of keys by row
const rowF = ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','Escape'];
const row0 = ['Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backquote'];
const row1 = ['KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Tab'];
const row2 = ['KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','CapsLock'];
const row3 = ['KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftLeft','ShiftRight'];
const otherKeys = ['ControlLeft','AltLeft','MetaLeft','MetaRight','AltRight','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];


// audio elements on pressed 
// TOPRE
const row1KD = new Audio("audio/topre/mxblack/mxblack_R1.mp3");
const row2KD = new Audio("audio/topre/mxblack/mxblack_R2.mp3");
const row3KD = new Audio("audio/topre/mxblack/mxblack_R3.mp3");
const spaceKD = new Audio("audio/topre/mxblack/mxblack_space.mp3");
const enterKD = new Audio("audio/topre/mxblack/mxblack_enter.mp3");
const backspaceKD = new Audio("audio/topre/mxblack/mxblack_backspace.mp3");

// CREAM

// MXBLACK

// audio elements on release
// TOPRE
const rowKU = new Audio("audio/topre/mxblack/mxblack_release.mp3");
const spaceKU = new Audio("audio/topre/mxblack/mxblack_release_space.mp3");
const enterKU = new Audio("audio/topre/mxblack/mxblack_release_enter.mp3");
const backspaceKU = new Audio("audio/topre/mxblack/mxblack_release_backspace.mp3");

// CREAM

// MXBLACK

// event listener to the document to detect when a key is pressed
document.addEventListener("keydown", function(event) {
  // Play the audio file if the "a" key is pressed
  if (rowF.includes(event.code)) {
    row1KD.currentTime = 0;
    row1KD.play();
  }
    else if (row0.includes(event.code)) {
    row1KD.currentTime = 0;
    row1KD.play();
  }
    else if (row1.includes(event.code)) {
    row1KD.currentTime = 0;
    row1KD.play();
  }
      else if (row2.includes(event.code)) {
      row2KD.currentTime = 0;
      row2KD.play();
  }
      else if (row3.includes(event.code)) {
      row3.currentTime = 0;
      row3KD.play();
  }
      else if (otherKeys.includes(event.code)) {
      row3.currentTime = 0;
      row1KD.play();
  }
    else if (event.code === 'Space') {
      spaceKD.currentTime = 0;
      spaceKD.play();
  }
    else if (event.code === 'Enter') {
      enterKD.currentTime = 0;
      enterKD.play();
  }
    else if (event.code === 'Backspace') {
    backspaceKD.currentTime = 0;
    backspaceKD.play();
  }
  
  
});

// event listener to the document to detect when a key is pressed
document.addEventListener("keyup", function(event) {
  // Play the audio file if the "a" key is pressed
  if (rowF.includes(event.code)||row0.includes(event.code)||row1.includes(event.code)||row2.includes(event.code)||row3.includes(event.code)||otherKeys.includes(event.code)) {
    rowKU.currentTime = 0;
    rowKU.play();
  }
    else if (event.code === 'Space') {
      spaceKU.currentTime = 0;
      spaceKU.play();
  }
  else if (event.code === 'Enter') {
    enterKU.currentTime = 0;
    enterKU.play();
}
else if (event.code === 'Backspace') {
  backspaceKU.currentTime = 0;
  backspaceKU.play();
}
  
  
});

// get the textbox element
const textbox = document.querySelector('.textbox');
const clearBtn = document.querySelector('.clearBtn');

// listen for input events on the textbox
textbox.addEventListener('input', function() {
  // get the text content of the textbox
  const text = textbox.textContent;

  console.log(text);
});


clearBtn.addEventListener('click', function() {
  textbox.textContent = '';
});