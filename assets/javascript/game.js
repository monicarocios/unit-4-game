// add document .ready function for jquery to make sure javascript doesn't load before page itself in browser  
$(document).ready(function() {

    let randomNum = Math.floor(Math.random() * 101);
    $('.section-random-number').text('Add up gems to equal this number: ' + randomNum)
    
    // rules for score counter
    let scoreWins = 0;
    
    let scoreLoss = 0 

    function win(){
        alert('Nice job');
        scoreWins++;
        $('.scoreWins').text('Wins: ' + scoreWins)
    }

    function loss(){
        alert('You lose');
        scoreLoss++;
        $('.scoreLoss').text('Losses: ' + scoreLoss);
    }

    // might be if statement combined with wins (if number counter for gems === random number, then +1 wins)
    // if number counter for gems !== random number, then Losses -- (create variable for losses and then LossVariable--)

    // program crystal one and then score counter to see if it's showing up
    
    let gemScore = 0 
    $('.section-total-score-number').text(gemScore);


    let randomGem1 = Math.floor(Math.random() * 50);
    let randomGem2 = Math.floor(Math.random() * 50);
    let randomGem3 = Math.floor(Math.random() * 50);
    let randomGem4 = Math.floor(Math.random() * 50);

    // is there a for loop for this?
    // create an array for the variables randomGem[i]

    $('.gem1').on('click', function(){
        gemScore = gemScore + randomGem1;
        $('.section-total-score-number').text(gemScore);
        console.log(randomGem1);
        if (gemScore == randomNum){
            win();
        }
        
        else if (gemScore > randomNum){
            loss();
        }
    });

    $('.gem2').on('click', function(){
        gemScore = gemScore + randomGem2;
        $('.section-total-score-number').text(gemScore);
        console.log(randomGem2);
        if (gemScore == randomNum){
            win();
        }
        
        else if (gemScore > randomNum){
            loss();
        }
        
    });

    $('.gem3').on('click', function(){
        gemScore = gemScore + randomGem3;
        $('.section-total-score-number').text(gemScore);
        console.log(randomGem3);
        if (gemScore == randomNum){
            win();
        }
        
        else if (gemScore > randomNum){
            loss();
        }
        
    });

    $('.gem4').on('click', function(){
        gemScore = gemScore + randomGem4;
        $('.section-total-score-number').text(gemScore);
        console.log(randomGem4);
        if (gemScore == randomNum){
            win();
        }
        
        else if (gemScore > randomNum){
            loss();
        }
        
    });
// need to make this score increase every time a gem is clicked, not just add all random gem numbers together
    

// copy code for gem1 button to all 3 other gems
// make sure each click added onto button pressed

  });













