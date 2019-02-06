
var words =   // Library or an array of singer names
[
    "rihana",
    "drake",
    "adam",
    "justin",
    "usher",
    "beyonce",
    "eminem",
    "ariana",
    "taylor",
    "adele"
];

var win = 0;
var loss = 0;
const maxTries = 7;         /* This is the maximum number of tries */
var guessesLeft = 7;
var underScoreArray = [];   /* Will store the under scores */
var userGuesses = [];       /* Will store the user Guesses */
var wrongGuesses = [];      /* Will store the wrong Guesses */
var randomWord;             /* This is the random word generated */
var hasFinished = true;

var wrongLetter = new Audio('assets/sounds/error.mp3');  /* This audio will play if the user enters wrong letter */
var rightLetter = new Audio('assets/sounds/right.mp3');  /* This audio will play if the user enters right letter */
var winner = new Audio('assets/sounds/win.mp3') /* This will play when the player wins */
var looser = new Audio('assets/sounds/looser.wav') /* This will play when the player loose */

/* ......................................... Start Game  Function..........................................................*/
function startGame(){
     
    underScoreArray = [];
    guessesLeft = 7;
    wrongGuesses = [];

    document.getElementById('remainingGuesses-text').innerHTML = guessesLeft;
    document.getElementById("hangmanImage").src = "";
    randomWord = words[Math.floor(Math.random() * words.length)]; // This is the random word
    console.log('DEBUG Random Word -' + ' ' + randomWord);
    
    for (var i = 0; i < randomWord.length; i++){
        underScoreArray.push('_');
    }
    document.getElementById('underscore-text').innerHTML = underScoreArray.join(' ');

    document.getElementById("win-message").style.cssText= "display: none";
    document.getElementById("loss-message").style.cssText= "display: none";
    
    hasFinished=false;  
    
}


function display(){
   
       // will display only if the player wins ot loose the game. Other time it will not display
        document.getElementById("win-message").style.cssText= "display: none";
        document.getElementById("loss-message").style.cssText= "display: none";    
    
    }

    display();


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
    
    if(underScoreArray.indexOf("_") === -1){ // if there is no more underscore 
        win++;
        document.getElementById('wins-text').innerHTML = win;
        console.log('DEBUFG wins ==  ' + win);
        winner.play(); // will play the winnig audio
        hasFinished = true; // it will restart the game
        document.getElementById("win-message").style.cssText= "display: block";
    }
    else if (guessesLeft==0){ // if the number of guesses is zero
        loss++; 
        console.log('DEBUG loss == ' + loss);
        document.getElementById('loss-text').innerHTML = loss;
        looser.play();
        hasFinished = true;
        document.getElementById("loss-message").style.cssText= "display: block";
        
    }

}


/* .......................... Update the hangman image ..........................*/
 function updateHangmanImage() {
     // this will update the image if the guess is wrong
    document.getElementById("hangmanImage").src = "assets/images/" + (maxTries-guessesLeft) + ".png";
}



document.onkeyup = function(event){
    if(hasFinished) { // if the game finish is true then it will restart the game 
        startGame();
        hasFinished = false; 
    } else // if the game has not finished then the user is allowed to enter and guess the word
    {
    if(event.keyCode >= 65 && event.keyCode <= 90) {  
        
            userGuesses = event.key.toLowerCase(); 
            checkGuesses();
            checkWinLoss();   
        
    }
}
};

