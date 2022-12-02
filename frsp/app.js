let action_msg_p=document.getElementById('action-msg')
console.log(action_msg_p);

let round_result_p=document.getElementById('round-result')
console.log(round_result_p);

let player_choice_img=document.querySelector('.player-choice')
console.log(player_choice_img);
let computer_choice_img=document.querySelector(".computer-choice")
console.log(computer_choice_img);

let player_score_span=document.querySelector('.player-score')
console.log(player_score_span);

let computer_score_span=document.querySelector('.computer-score')
console.log(computer_score_span);

let rock_div=document.getElementById('rock');
console.log(rock_div);
let scissor_div=document.getElementById('scissor');
console.log(scissor_div);
let paper_div=document.getElementById('paper');
console.log(paper_div);

let button_div=document.getElementById('btn')
console.log(button_div);

//write code below
let computerScore=0;
let userScore=0;
function getComputerChoice(){
    let choices=['Rock','Scissor','Paper'];
    let randomNumber=Math.floor((Math.random())*3);
    let computerChoice=choices[randomNumber];
    return computerChoice
}

function win(userChoice,computerChoice){
    userScore++;
    action_msg_p.innerHTML="You Won!!!"
    round_result_p.innerHTML=userChoice.toUpperCase()+' Beats '+computerChoice.toUpperCase();
    player_score_span.innerHTML=userScore;
    computer_score_span.innerHTML=computerScore;
    

    if(userScore>=5 ||computerScore>=5){
        if(userScore>computerScore){
            action_msg_p.innerHTML="You Won the Game"
        }
        else{
            action_msg_p.innerHTML="You lost the Game"
        }
        computerScore=0;
        userScore=0;
        player_score_span.innerHTML=userScore;
        computer_score_span.innerHTML=computerScore;
    }
   


}
function lose(userChoice,computerChoice){
    computerScore++;
    action_msg_p.innerHTML="You Lost ";
    round_result_p.innerHTML=computerChoice.toUpperCase()+' Beats '+userChoice.toUpperCase();
    player_score_span.innerHTML=userScore;
    computer_score_span.innerHTML=computerScore;


    if(userScore>=5 ||computerScore>=5){
        if(userScore>computerScore){
            action_msg_p.innerHTML="You Won the Game"
        }
        else{
            action_msg_p.innerHTML="You lost the Game"
        }
        computerScore=0;
        userScore=0;
        player_score_span.innerHTML=userScore;
        computer_score_span.innerHTML=computerScore;
    }
}
function tie(userChoice,computerChoice)
{
    action_msg_p.innerHTML="its Tie ";
    round_result_p.innerHTML=computerChoice.toUpperCase()+' Tie With '+userChoice.toUpperCase();


}





function game(userChoice){
    userChoice=userChoice.toLowerCase();
    console.log(userChoice);
    let computerChoice=getComputerChoice().toLowerCase();
    console.log(computerChoice);
    player_choice_img.src=userChoice+".png";
    computer_choice_img.src=computerChoice+".png";



    if(userChoice=='rock' && computerChoice=='scissor'){
        console.log("You WIN! ROCK beats SCISSOR");
        win(userChoice,computerChoice);
        
    }
    else if(userChoice=='scissor' && computerChoice=='paper'){

        console.log("You WIN! SCISSOR beats PAPER");
        win(userChoice,computerChoice);
        
    }
    else if(userChoice=='paper' && computerChoice=="rock"){
        console.log("You WIN! PAPER beats ROCK");
        win(userChoice,computerChoice);
        
    }
    else if(computerChoice=='rock' && userChoice=='scissor'){
        console.log("You LOSE! ROCK beats SCISSOR");
        lose(userChoice,computerChoice);
        
    }
    else if(computerChoice=='scissor' && userChoice=='paper'){
        console.log("You LOSE! SCISSOR beats PAPER");
        lose(userChoice,computerChoice);
        
    }
    else if(computerChoice=='paper' && userChoice=="rock"){
        console.log("You LOSE! PAPER beats ROCK");
        
        lose(userChoice,computerChoice);
    }
    else if(computerChoice==userChoice){
        console.log("Its tie");
        tie(userChoice,computerChoice);
        
    }
    

}












function main(){
    rock_div.addEventListener('click',()=>{
        console.log("rock is clicked");
        game('rock')
    })

    scissor_div.addEventListener('click',()=>{
        console.log("scissor is clicked");
        game('scissor')
    })
    paper_div.addEventListener('click',()=>{
        console.log("paper  is clicked");
        game('paper')
    })
    button_div.addEventListener('click',()=>{
        reset();
    })
}
main();

function reset(){
    computerScore=0;
    userScore=0;
    action_msg_p.innerHTML="Choose your Weapon"
    round_result_p.innerHTML="First to score 5 points wins the game" ;
    player_score_span.innerHTML=userScore;
    computer_score_span.innerHTML=computerScore;
    player_choice_img.src="Question.png";
    computer_choice_img.src="Question.png"
}


