

var words =   // Library or an array of singer names
[
    "rihana",
    "drake",
    "adam"
];

// This generates the random word from the above array
var randomWord = words[Math.floor(Math.random() * words.length)]; 
console.log(randomWord);


var wins = 0;
var remainingGuesses = 15;
var guessingArray = []; // Empyt now but when the user gueses == current word then the letters will be stored
var guessedLetters  = []; // This will store the letters that user already guessed
var remainingLetters = words.length;
var guessingWordText;



function display(){
    for (var i = 0; i < randomWord.length; i++) {
        guessingArray[i] = ("_")
    }
    document.getElementById("underscore-text").innerText = guessingArray.join(" ");
    // guessingWordText = guessingArray.join(" ");
    // document.getElementById("currentWord-text").innerText = guessingWordText;
    
   
} // its working 

document.getElementById("remainingGuesses-text").innerText= remainingGuesses;

function  checkGuess(alphabet){
var tem = [];
    
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === alphabet) {
            guessingArray[i] = alphabet;
            //  alphabet = tem[i];
            //  temp[i] = guessingArray[i];
            // guessingWordText+=guessingArray[i];   
        }
    else remainingGuesses--;
 }
 
}



// Functions that user will guess alphabet and will store in guessedLetters Array
function askGuess(alphabet){
    if(remainingGuesses > 0){
        if (guessedLetters.indexOf(alphabet) === -1) {
            guessedLetters.push(alphabet);
            checkGuess(alphabet);
        }
    }
    display();
    document.getElementById("letterGuessed-text").innerText = guessedLetters;  
} // is working



document.onkeydown = function(event) {
    console.log('remainingGuesses = ', remainingGuesses);
    console.log('remainingGuesses = ', remainingGuesses);
    console.log('remainingGuesses = ', remainingGuesses);
    console.log('remainingGuesses = ', remainingGuesses);

    if(event.keyCode >= 65 && event.keyCode <= 90) {
        askGuess(event.key.toLowerCase());
    }
        
        
    
    
    
};