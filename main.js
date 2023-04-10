/* key presses -> audio */
// Load the JSON data from a file
fetch('JSON/keydb.json')
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
  
    // Default to button1
    let keySounds = keySounds1;
    let keySoundsUp = keySoundsUp1;
  
    //event listeners to the buttons to switch between sound sets
    document.getElementById("switch-button1").addEventListener("click", function() {
      keySounds = keySounds1;
      keySoundsUp = keySoundsUp1;
    });
    document.getElementById("switch-button2").addEventListener("click", function() {
      keySounds = keySounds2;
      keySoundsUp = keySoundsUp2;
    });
      document.getElementById("switch-button3").addEventListener("click", function() {
      keySounds = keySounds3;
      keySoundsUp = keySoundsUp3;
    });
  
    // event listener to detect key presses
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

  // music player
const audioBtn = document.getElementById("music-button");
const audioPlayer = document.getElementById("music-player");
let isPlaying = false;

audioBtn.addEventListener("click", function() {
  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    musicbutton.src="images/music_on.png";
    audioPlayer.volume = 0.04;
  } else {
    audioPlayer.play();
    isPlaying = true;
    musicbutton.src="images/music_off.png";
    audioPlayer.volume = 0.04;
  }
});

  // get the textbox element
const textbox = document.querySelector('.textbox');
const clearBtn = document.getElementById("clearbutton");

// listen for input events on the textbox
textbox.addEventListener('input', function() {
  // get the text content of the textbox
  const text = textbox.textContent;

  console.log(text);
});
// clears textbox content
clearBtn.addEventListener('click', function() {
  textbox.textContent = '';
});

// text and draw modes
const displayCheckbox = document.getElementById("displayCheckbox");

displayCheckbox.addEventListener("change", function() {
  if (this.checked) {
    // text mode selected
    document.getElementById("textbox").classList.remove("hidden");
    document.getElementById("drawMode").classList.add("hidden");
    // clears the drawing canvas when text selected
    clear();
  } else {
    // draw mode selected
    document.getElementById("textbox").classList.add("hidden");
    document.getElementById("drawMode").classList.remove("hidden");
  }
});

let isTyping = true;

// p5.js stuff

function setup() {
  createCanvas(250, 175);
}

function draw() {
  if (!isTyping && keyIsPressed) {
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(random(width), random(height), random(50, 100));
  }
}

displayCheckbox.addEventListener('click', function() {
  isTyping = this.checked;
});


// data files
const svgFile = "SVG/keys.svg";
const svgBoardFile = "SVG/board.svg";
const listFile = "JSON/codes.JSON";
const dataFile = "JSON/data.JSON";

// parent container
const figure = document.getElementById("svg-container");

// used for button popup
const btPopupSwitch = document.getElementById("switch-button"); //
const btPopupColour = document.getElementById("colour-button"); // 
const btPopupShare = document.getElementById("share-button"); //
const popupSwitchWrapper = document.getElementById("popup-switchContainer"); //
const popupColourWrapper = document.getElementById("popup-colourContainer"); //
const popupShareWrapper = document.getElementById("popup-shareContainer"); //
const iconClose = document.getElementById("ri-close-line"); //
const iconClose2 = document.getElementById("icon-close2"); //
const iconClose3 = document.getElementById("icon-close3"); //

//share button

const shareBtn = document.querySelector(".share-btn");
const shareOptions = document.querySelector(".share-options");

// classes used
let shadowClass = "shadowKeys";
let normalKeyClass = "normalKeys";
let editingModeKeyClass = "editingModeKeys";
let selectedClass = "selectedKeys";

// Important information about the keys
let svg = null; // container for all the key elements
let svgBoard = null;
let codeList = null; // list of all the active keys
let boardID = "Board";
let keyColorData = null; // list of all the color data

// selected keys array
let selectedKeys = [];

// color picker object
const colorPicker = new iro.ColorPicker("#picker", {
    width: 175,
    color: "#f00"
});

const colorPickerBoard = new iro.ColorPicker("#pickerBoard", {
    width: 175,
    color: "#f00",
});


// initialization function
async function __init() {
    svg = await getSVG(figure, svgFile);
    svgBoard = await getSVG(figure, svgBoardFile);
    svg.setAttribute("class", normalKeyClass);
    codeList = await getJSON(listFile);
    keyColorData = await getJSON(dataFile);
    resetColor();
}

// loads the svg into the parent container
async function getSVG(parent, file) {
    console.log("in get svg");
    console.log(parent);
    console.log(file);
    const response = await fetch(file);
    const data = await response.text();
    parent.insertAdjacentHTML("afterbegin", data);
    return figure.querySelector("svg");
}

// loads the code list from the JSON file
async function getJSON(file) {
    const response = await fetch(file)
    const data = await response.json();
    return data;
}

// changes one key's color
function changeColor (key, hex) {
    svg.getElementById(key).querySelector("rect").setAttribute("fill", hex);
}

function changeColorBoard (hex) {
    svgBoard.setAttribute("fill", hex);
}

// resets the colors based on the colors in the current list
function resetColor () {
    for (key in codeList) {
        if (codeList[key] == true) {
            changeColor(key, keyColorData[key].color);
        }
    }

    changeColorBoard(keyColorData[boardID].color);
}

// saves the color to the list
function saveColor () {
    for (key in codeList) {
        if (codeList[key] == true) {
            keyColorData[key].color = svg.getElementById(key).querySelector("rect").getAttribute("fill");
        }
    }

    keyColorData[boardID].color = svgBoard.getAttribute("fill");
}

// toggles key shadow class On/Off
function toggleShadow (event, bool) {
    let key = event.code;

    if (!codeList.hasOwnProperty(key) || codeList[key] == false) {
        return;
    }

    if (bool == true && svg.getElementById(key).childElementCount < 2) {
        copyRect(svg.getElementById(key));
    }

    else if (bool == false) {
        deleteRect(svg.getElementById(key));
    }
}

// duplicates the rectangle for the shadow layer
function copyRect (key) {
    rect = key.querySelector("rect").cloneNode();
    key.appendChild(rect);
    rect.classList.add(shadowClass);
}

// deletes the shadow layer rectangle
function deleteRect (key) {
    let s = ".";
    rect = key.querySelector(s.concat(shadowClass));
    key.removeChild(rect);
}

// displays the edit dialog box and runs functions in case
function displayEdit () {
    element = document.getElementById("edit");
    element.style.visibility == "visible" ? svg.setAttribute("class", normalKeyClass) : svg.setAttribute("class", editingModeKeyClass);
    element.style.visibility == "visible" ? removeKeyListeners() : addKeyListeners();
    if (element.style.visibility == "visible") { selectAllItems(false); resetColor()};
    element.style.visibility = element.style.visibility == "visible" ? "hidden" : "visible";
}

// runs the select key function (selects or deselects key when clicked)
function runonclick(elem) {
    if (selectedKeys.includes(elem)) {
        selectItem(elem, false);
    }

    else {
        selectItem(elem, true);
    }

}

// selects all keys
function selectAllItems(bool) {
    for (key in codeList) {
        if (codeList[key] == true) {
            elem = svg.getElementById(key);
            selectItem(elem, bool);
        }
    }
}

// selects a key item
function selectItem(elem, bool) { 
    if (bool == false && selectedKeys.includes(elem)) {
        selectedKeys.splice(selectedKeys.indexOf(elem), 1);
        elem.classList.remove(selectedClass);
    }

    else if (bool == true && !selectedKeys.includes(elem)){
        selectedKeys.push(elem);
        elem.classList.add(selectedClass);
    }
}

// adds key listeners (click) to all keys
function addKeyListeners() {
    for (key in codeList) {
        if (codeList[key] == true) {
            elem = svg.getElementById(key);
            elem.setAttribute("onclick", "runonclick(this)");
        }
    }
}

// removes key listeners  (click) to all keys
function removeKeyListeners() {
    for (key in codeList) {
        if (codeList[key] == true) {
            elem = svg.getElementById(key);
            elem.removeAttribute("onclick");
        }
    }
}

// typing *********************************************************
function insertText(char) {

    p = document.getElementById("textbox");

    if (char == "CapsLock" || char == "Shift" || char == "Meta" || char == "Alt" || char == "Control") {
        return;
    }

    else if (char == "Backspace") {
        p.innerHTML = p.innerHTML.substring(0, p.innerHTML.length-1);
    }

    else if (char == "Enter") {
        p.innerHTML+= "<br>";
    }

    else {
        p.innerHTML += char;
    }

}

// event listener for keydown
document.addEventListener("keydown", function(event){
    event.preventDefault();
    toggleShadow(event, true);
    insertText(event.key);
});

// event listener for keyup
document.addEventListener("keyup", function(event){
    event.preventDefault();
    toggleShadow(event, false);
});

//
function changeImage() {
    if (document.getElementById("clearbutton").src == "images/clear_button.png"){
        document.getElementById("clearbutton").src = "images/clear_button_clicked.png";
    } else {
        document.getElementById("clearbutton").src = "images/clear_button.png";
    }
}

btPopupSwitch.addEventListener("click", ()=>{
    popupSwitchWrapper.classList.add("active-popup");
  });
  
  iconClose.addEventListener("click", ()=>{
    //console.log("hello");
    popupSwitchWrapper.classList.remove("active-popup");
  });

  btPopupColour.addEventListener("click", ()=>{
    popupColourWrapper.classList.add("active-popup");
  });
  
  iconClose2.addEventListener("click", ()=>{
    //console.log("hello");
    popupColourWrapper.classList.remove("active-popup");
  });

  btPopupShare.addEventListener("click", ()=>{
    popupShareWrapper.classList.add("active-popup");
  });

  iconClose3.addEventListener("click", ()=>{
    //console.log("hello");
    popupShareWrapper.classList.remove("active-popup");
  });
// event listener for color wheel change
colorPicker.on('color:change', function(color) {
    for (var i = 0; i < selectedKeys.length; i++) {
        changeColor(selectedKeys[i].id, color.hexString);
    }
});


//Share buttons
shareBtn.addEventListener("click", ()=>{
    //console.log("hello");
    shareOptions.classList.toggle("active");
  });

colorPickerBoard.on('color:change', (color) => {
    changeColorBoard(color.hexString);
});

//music button?
/*const musicbutton = document.getElementById("musicbutton");
musicbutton.addEventListener("click", function() {
  const myImage = myButton.querySelector("img");
  myImage.src = "images/music_off.png";
});*/
