// arrays of keys by row
const rowF = ['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','Escape'];
const row0 = ['Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backquote','Backspace'];
const row1 = ['KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Tab'];
const row2 = ['KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Enter','Quote','CapsLock'];
const row3 = ['KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftLeft','ShiftRight'];
const otherKeys = ['ControlLeft','AltLeft','MetaLeft','MetaRight','AltRight','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];


// audio elements on pressed 
const row1KD = new Audio("https://cdn.glitch.global/14f6277a-4737-44bb-9f79-8f0fc9ce983d/src_assets_audio_topre_press_GENERIC_R1.mp3?v=1680030921174");
const row2KD = new Audio("https://cdn.glitch.global/14f6277a-4737-44bb-9f79-8f0fc9ce983d/src_assets_audio_topre_press_GENERIC_R2.mp3?v=1680032471540");
const row3KD = new Audio("https://cdn.glitch.global/14f6277a-4737-44bb-9f79-8f0fc9ce983d/src_assets_audio_topre_press_GENERIC_R3.mp3?v=1680032469951");
const spaceKD = new Audio("https://cdn.glitch.global/14f6277a-4737-44bb-9f79-8f0fc9ce983d/src_assets_audio_topre_press_SPACE.mp3?v=1680031642388");

// audio elements on release
const rowKU = new Audio("https://cdn.glitch.global/14f6277a-4737-44bb-9f79-8f0fc9ce983d/src_assets_audio_topre_release_GENERIC.mp3?v=1680030926231");

const spaceKU = new Audio("https://cdn.glitch.global/14f6277a-4737-44bb-9f79-8f0fc9ce983d/src_assets_audio_topre_release_SPACE.mp3?v=1680031644194");

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