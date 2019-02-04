
var words =   // Library or an array of singer names
[
    "rihana",
    "drake",
    "adam"
];

var win = 0;
var loss = 0;
const maxTries = 9;         /* This is the maximum number of tries */
var guessesLeft = 9;
var underScoreArray = [];   /* Will store the under scores */
var userGuesses = [];       /* Will store the user Guesses */
var wrongGuesses = [];      /* Will store the wrong Guesses */
var randomWord;             /* This is the random word generated */


var wrongLetter = new Audio('assets/sounds/error.mp3');  /* This audio will play if the user enters wrong letter */
var rightLetter = new Audio('assets/sounds/right.mp3');  /* This audio will play if the user enters right letter */


/* ......................................... Start Game  Function..........................................................*/
function startGame(){

/*....................................................RESET................................................................*/
    underScoreArray = [];
    guessesLeft = 9;
    wrongGuesses = [];

    document.getElementById('remainingGuesses-text').innerHTML = guessesLeft;
    document.getElementById("hangmanImage").src = "";
    randomWord = words[Math.floor(Math.random() * words.length)]; // This is the random word
    console.log('DEBUG Random Word -' + ' ' + randomWord);
    for (var i = 0; i < randomWord.length; i++){
        underScoreArray.push('_');
    }
    document.getElementById('underscore-text').innerHTML = underScoreArray.join(' ');

}


/* .......................... Check if the user guess is same as the letter in random word ..........................*/
function  checkGuesses(){
    
    if(randomWord.indexOf(userGuesses) > -1){
        for(var i = 0; i < randomWord.length; i++){
                if(randomWord[i] === userGuesses){
                underScoreArray[i] = userGuesses;
                console.log('DEBUG UNDERSCORE ARRAY-- '+ underScoreArray.join(' '));
                console.log('DEBUG userGuesses ARRAY-- '+ userGuesses);
                document.getElementById('underscore-text').innerHTML =underScoreArray.join(' ');
                rightLetter.play();
                }
        }
    }
    else { 

         /* .. This will decrement guessesLeft only if the character is unique .. */
        if (wrongGuesses.indexOf(userGuesses) === -1){ 
            guessesLeft--; 
            updateHangmanImage();
            wrongGuesses.push(userGuesses);
            wrongLetter.play();
            
        }
        else{
            wrongLetter.play();
            alert("This letter is already GUESSED. Enter the other letter.")    
        }
        console.log('DEBUG Guess left == ' + guessesLeft);
        console.log('DEBUG Wrong guesses ARRAY == ' + wrongGuesses);

    }
    
    document.getElementById('remainingGuesses-text').innerHTML = guessesLeft;
    document.getElementById('letterGuessed-text').innerHTML = wrongGuesses;
        
}


/* .......................... Check win or loss ..........................*/

function checkWinLoss(){
    
    if(underScoreArray.indexOf("_") === -1){
        win++;
        document.getElementById('wins-text').innerHTML = win;
        console.log('DEBUFG wins ==  ' + win);
        // playMusic();
        startGame();
    }
    else if (guessesLeft==0){
        loss++; 
        console.log('DEBUG loss == ' + loss);
        document.getElementById('loss-text').innerHTML = loss;
        startGame(); 
    }

}


/* .......................... Update the hangman image ..........................*/
 function updateHangmanImage() {
     // this will update the image if the guess is wrong
    document.getElementById("hangmanImage").src = "assets/images/" + (maxTries-guessesLeft) + ".png";
}


// var drakeGuess = new Audio('assets/sounds/drake.mp3');
// function playMusic(){
//     for (var i = 0; i < randomWord.length; i++){
//         if(underScoreArray[i] == randomWord[i]){
//             drakeGuess.play();
//     }
    
//     }
// }

document.onkeyup = function(event){
    
    if(event.keyCode >= 65 && event.keyCode <= 90) {  
        
            userGuesses = event.key.toLowerCase(); 
            checkGuesses();
            checkWinLoss();   
        
    }
};


startGame();