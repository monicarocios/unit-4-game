// add document .ready function for jquery to make sure javascript doesn't load before page itself in browser
   
document.getElementById("section-random-number").innerHTML =
Math.floor(Math.random() * 51);

$(document).ready(function() {
    
    let scoreWins = $('.scoreWins');
    scoreWins.html('<p>Wins: </p>');

    // if statement 

    let scoreLoss = $('.scoreLoss');
    scoreLoss.html('Losses: ');

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
    });

    $('.gem2').on('click', function(){
        gemScore = gemScore + randomGem2;
        $('.section-total-score-number').text(gemScore);
        console.log(randomGem2);
        
    });

    $('.gem3').on('click', function(){
        gemScore = gemScore + randomGem3;
        $('.section-total-score-number').text(gemScore);
        console.log(randomGem3);
        
    });

    $('.gem4').on('click', function(){
        gemScore = gemScore + randomGem4;
        $('.section-total-score-number').text(gemScore);
        console.log(randomGem4);
        
    });
// need to make this score increase every time a gem is clicked, not just add all random gem numbers together
    

// copy code for gem1 button to all 3 other gems
// make sure each click added onto button pressed

  });













