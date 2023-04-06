// Load the JSON data from a file
fetch('keydb.json')
  .then(response => response.json())
  .then(keyData => {
    // Create an object to map key codes to audio files
    const keySounds1 = {};
    const keySoundsUp1 = {};
  
    const keySounds2 = {};
    const keySoundsUp2 = {};
  
    const keySounds3 = {};
    const keySoundsUp3 = {};
  
    for (let i = 0; i < keyData.key_sound1.length; i++) {
      // topre
      keySounds1[keyData.key_sound1[i].key_code] = keyData.key_sound1[i].sound_src;
      keySoundsUp1[keyData.key_sound1[i].key_code] = keyData.key_sound1[i].sound_up_src;
      // cream
      keySounds2[keyData.key_sound2[i].key_code] = keyData.key_sound2[i].sound_src;
      keySoundsUp2[keyData.key_sound2[i].key_code] = keyData.key_sound2[i].sound_up_src;
      // mxblack
      keySounds3[keyData.key_sound3[i].key_code] = keyData.key_sound3[i].sound_src;
      keySoundsUp3[keyData.key_sound3[i].key_code] = keyData.key_sound3[i].sound_up_src;
      
    }
  
    // Default to sound set 1
    let keySounds = keySounds1;
    let keySoundsUp = keySoundsUp1;
  
    // Add event listeners to the buttons to switch between sound sets
    document.getElementById("button1").addEventListener("click", function() {
      keySounds = keySounds1;
      keySoundsUp = keySoundsUp1;
    });
    document.getElementById("button2").addEventListener("click", function() {
      keySounds = keySounds2;
      keySoundsUp = keySoundsUp2;
    });
      document.getElementById("button3").addEventListener("click", function() {
      keySounds = keySounds3;
      keySoundsUp = keySoundsUp3;
    });
  
  
    // Add an event listener to detect key presses
    document.addEventListener("keydown", function(event) {
      const keyCode = event.code;
      if (keySounds[keyCode]) {
        const audio = new Audio(keySounds[keyCode]);
        audio.currentTime = 0;
        audio.play();
      }
    });
  
      document.addEventListener("keyup", function(event) {
      const keyCode = event.code;
      if (keySoundsUp[keyCode]) {
        const audio = new Audio(keySoundsUp[keyCode]);
        audio.currentTime = 0;
        audio.play();
      }
    });
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

