// data files
const svgFile = "SVG/keys.svg";
const svgBoardFile = "SVG/board.svg";
const listFile = "JSON/codes.JSON";
const dataFile = "JSON/data.JSON";

// parent container
const figure = document.getElementById("svg-container");

// used for button popup
const btPopupSwitch = document.querySelector(".switch-button");
const btPopupColour = document.querySelector(".colour-button");
const btPopupShare = document.querySelector(".share-button");
const popupSwitchWrapper = document.querySelector(".popup-switchContainer");
const popupColourWrapper = document.querySelector(".popup-colourContainer");
const popupShareWrapper = document.querySelector(".popup-shareContainer");
const iconClose = document.querySelector(".ri-close-line");
const iconClose2 = document.querySelector(".icon-close2");
const iconClose3 = document.querySelector(".icon-close3");

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
let keyColorData = null; // list of all the color data

// selected keys array
let selectedKeys = [];

// color picker object
const colorPicker = new iro.ColorPicker("#picker", {
    width: 175,
    color: "#f00"
});

// initialization function
async function init() {
    svg = await getSVG(figure, svgFile);
    svgBoard = await getSVG(figure, svgBoardFile);
    svg.setAttribute("class", normalKeyClass);
    codeList = await getJSON(listFile);
    keyColorData = await getJSON(dataFile);
    resetColor();
}

// loads the svg into the parent container
async function getSVG(parent, file) {
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

// resets the colors based on the colors in the current list
function resetColor () {
    for (key in codeList) {
        if (codeList[key] == true) {
            changeColor(key, keyColorData[key].color)
        }
    }
}

// saves the color to the list
function saveColor () {
    for (key in codeList) {
        if (codeList[key] == true) {
            keyColorData[key].color = svg.getElementById(key).querySelector("rect").getAttribute("fill");
        }
    }
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
    if (element.style.visibility == "visible") { selectAll(false); resetColor()};
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
function selectAll(bool) {
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

// event listener for keydown
document.addEventListener("keydown", function(event){
    event.preventDefault();
    toggleShadow(event, true);
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