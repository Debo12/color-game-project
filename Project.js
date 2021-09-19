var numOfSquare = 6;
var colors = generateRandomColor(numOfSquare); // Random Color Generate and Store in colors variable
var pickedColor = pick_color(); // Color Picked
var clickedColor;

var squares = document.querySelectorAll(".square"); // All Square Selection
var displayMessage = document.querySelector("#displayMessage"); // Try again or Correct message
var rgbValue = document.querySelector("#rgb-Text"); // rgb Value Selection
var refreshButton = document.querySelector("#refresh-button"); // Reset Button selection
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var h1_color = document.querySelector("h1");

hardButton.classList.add("selected");

easyButton.addEventListener("click", function(){
    numOfSquare = 3;
    colors = generateRandomColor(numOfSquare);
    pickedColor = pick_color();
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");

    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.backgroundColor = "#232323";
        }
    }
    rgbValue.textContent = pickedColor;
});

hardButton.addEventListener("click", function(){
    numOfSquare = 6;
    colors = generateRandomColor(numOfSquare);
    pickedColor = pick_color();
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");

    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.backgroundColor = "#232323";
        }
    }
    rgbValue.textContent = pickedColor;
});

// Pick a color
function pick_color(){
    var randomNum = Math.floor(Math.random() * numOfSquare);
    return colors[randomNum];
}

// Generate Random Color and rerturn to Colors Variable
function generateRandomColor(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

// Return Random Color 
function randomColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return ( "rgb("+r+", "+g+", "+b+")" );
}

// Change Color of Every Box the Same as picked Color
function squareColorChange(){
    for(var i=0; i<numOfSquare; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}


for(var i=0; i<numOfSquare; i++){
    squares[i].style.backgroundColor = colors[i]; // Assigning different colors to different boxes
    rgbValue.textContent = pickedColor;

    squares[i].addEventListener("click",function(){
        clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            displayMessage.textContent = "Correct!!";
            refreshButton.textContent = "Play Again?";       
            squareColorChange();   
        }
        else{
            displayMessage.textContent = "Try Again!!";
            this.style.backgroundColor = "#232323";
        }
    });
}

// Refresh Button 
refreshButton.addEventListener("click",function(){
    colors = generateRandomColor(numOfSquare);
    pickedColor = pick_color();

    for(var i=0; i<numOfSquare; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    rgbValue.textContent = pickedColor;
    refreshButton.textContent = "NEW COLORS";
});