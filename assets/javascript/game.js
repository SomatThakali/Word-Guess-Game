

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

document.getElementById("underscore-text").innerText = guessingArray;


function reset(){
    
    for (var i = 0; i < randomWord.length; i++) {
        guessingArray[i] = ("_")
    }
}
reset();


function display(){
   
    document.getElementById("underscore-text").innerText = guessingArray.join(" ");
   
} // End of display function



function  checkGuess(letter){
    
  if(randomWord.includes(letter)){
    for(var i = 0; i < randomWord.length; i++){
           if(randomWord[i] === letter){
             guessingArray[i] = letter;
           } 
    }
  }else{
    remainingGuesses--;
  }
}// End of checkGuess Function


// Functions that user will guess alphabet and will store in guessedLetters Array
function askGuess(letter){
   
    // if(remainingGuesses > 0){
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            checkGuess(letter);
        }
    // }
    display();
    document.getElementById("letterGuessed-text").innerText = guessedLetters;  
} // is working



document.onkeydown = function(event) {
    console.log('remainingGuesses = ', remainingGuesses);
    

    if(event.keyCode >= 65 && event.keyCode <= 90) {
        
        askGuess(event.key.toLowerCase());
        document.getElementById("remainingGuesses-text").innerText= remainingGuesses;
    }
        
        
    
    
    
};