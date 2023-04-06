const scriptSelector = document.getElementById("script-selector");
const script = document.getElementById("my-script");

scriptSelector.addEventListener("change", function() {
  const selectedScript = scriptSelector.options[scriptSelector.selectedIndex].value;
  script.src = selectedScript;
});


// arrays of keys by row
//audio/topre/cream/cream_R1.mp3
const rowF = ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','Escape'];
//audio/topre/cream/cream_R1.mp3
const row0 = ['Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backquote'];
//audio/topre/cream/cream_R1.mp3
const row1 = ['KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Tab'];
//audio/topre/cream/cream_R2.mp3
const row2 = ['KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','CapsLock'];
//audio/topre/cream/cream_R3.mp3
const row3 = ['KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftLeft','ShiftRight'];
//audio/topre/cream/cream_R1.mp3
const otherKeys = ['ControlLeft','AltLeft','MetaLeft','MetaRight','AltRight','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];

/* 
 special key **
 let spaceKD = new Audio("audio/topre/cream/cream_space.mp3");
 let enterKD = new Audio("audio/topre/cream/cream_enter.mp3");
 let backspaceKD = new Audio("audio/topre/cream/cream_backspace.mp3");
*/

// audio elements on pressed 
// TOPRE
let row1KD = new Audio("audio/topre/cream/cream_R1.mp3");
let row2KD = new Audio("audio/topre/cream/cream_R2.mp3");
let row3KD = new Audio("audio/topre/cream/cream_R3.mp3");
let spaceKD = new Audio("audio/topre/cream/cream_space.mp3");
let enterKD = new Audio("audio/topre/cream/cream_enter.mp3");
let backspaceKD = new Audio("audio/topre/cream/cream_backspace.mp3");

// CREAM

// MXBLACK

// audio elements on release
// TOPRE
let rowKU = new Audio("audio/topre/cream/cream_release.mp3");
let spaceKU = new Audio("audio/topre/cream/cream_release_space.mp3");
let enterKU = new Audio("audio/topre/cream/cream_release_enter.mp3");
let backspaceKU = new Audio("audio/topre/cream/cream_release_backspace.mp3");

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