
var words =   // Library or an array of singer names
[
    "rihana",
    "drake",
    "adam"
];

var win = 0;
var loss = 0;
var guessesLeft = 7;
var underScoreArray = [];
var userGuesses = [];
var wrongGuesses = [];
var randomWord;
var winCounter = 0;

/* .............................................. Start Game ..........................................................*/


function startGame(){

    /*..................................................RESET................................................................*/
    underScoreArray = [];
    // wins = 0;
    guessesLeft = 7;
    wrongGuesses = [];

    document.getElementById('remainingGuesses-text').innerHTML = guessesLeft;

    randomWord = words[Math.floor(Math.random() * words.length)]; // This is the random word
    console.log('Random Word -' + ' ' + randomWord);
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
                console.log(underScoreArray);
                document.getElementById('underscore-text').innerHTML =underScoreArray.join(' ');
                console.log('DEBUG win Counter -- ' + winCounter);
               
                }
        }
    }
    else { 
        guessesLeft--; 
        wrongGuesses.push(userGuesses);
       
        console.log('DEBUG Guess left ' + guessesLeft);
        console.log('DEBUG Wrong guesses ' + wrongGuesses);
        // checkWinLoss();
    }
    
   
    document.getElementById('remainingGuesses-text').innerHTML = guessesLeft;
    document.getElementById('letterGuessed-text').innerHTML = wrongGuesses;
        
}

/* .......................... Check win or loss ..........................*/

function checkWinLoss(){
    
    if(underScoreArray.indexOf("_") === -1){
        win++;
        document.getElementById('wins-text').innerHTML = win;
        console.log('wins -- ' + win);
        startGame();
    }
    else if (guessesLeft==0){
      
        loss++; 
        console.log('loss-- ' + loss);
        document.getElementById('loss-text').innerHTML = loss;
        startGame();
    }

}


document.onkeyup = function(event){
    
    if(event.keyCode >= 65 && event.keyCode <= 90) {  
        
            userGuesses = event.key.toLowerCase(); 
            checkGuesses();
            checkWinLoss();
        
       
        
        
    }
};


startGame();