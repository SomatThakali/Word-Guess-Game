
var words =   // Library or an array of singer names
[
    "rihana",
    "drake",
    "adam"
];

var win = 0;
var loss = 0;
const maxTries = 9;
var guessesLeft = 9;
var underScoreArray = [];
var userGuesses = [];
var wrongGuesses = [];
var randomWord;




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
                document.getElementById('underscore-text').innerHTML =underScoreArray.join(' ');
                }
        }
    }
    else { 

         /* .. This will decrement guessesLeft only if the character is unique .. */
        if (wrongGuesses.indexOf(userGuesses) === -1){ 
            guessesLeft--; 
            updateHangmanImage();
            wrongGuesses.push(userGuesses);
            
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


document.onkeyup = function(event){
    
    if(event.keyCode >= 65 && event.keyCode <= 90) {  
        
            userGuesses = event.key.toLowerCase(); 
            checkGuesses();
            checkWinLoss();   
        
    }
};


startGame();