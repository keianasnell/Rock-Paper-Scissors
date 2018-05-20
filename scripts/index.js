function rand_int(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function Game(user_choice)
{
    document.getElementById('rock').disabled=true;
    document.getElementById('paper').disabled=true;
    document.getElementById('scissors').disabled=true;
    
    if(user_choice == "rock"){
        document.getElementById('user').src="styles/u_1.png";
        
        console.log("You chose rock");
    }
    
    else if(user_choice == "paper"){
        document.getElementById('user').src="styles/u_2.png";
        console.log("You chose paper");
    } 
    
    else if(user_choice == "scissors"){
        document.getElementById('user').src="styles/u_3.png";
        console.log("You chose scissors");
    }
    
    setTimeout(function(){ document.getElementById('countdown').innerHTML="3"}, 1000);
    setTimeout(function(){ document.getElementById('countdown').innerHTML="2"}, 2000);
    setTimeout(function(){ document.getElementById('countdown').innerHTML="1"}, 3000);
    
    setTimeout(function(){
    var int = rand_int(1,4);
    var computer_choice = "";
    document.getElementById('countdown').innerHTML="";
    if(int == 1){
        document.getElementById('computer').src="styles/1.png";
        computer_choice = 'rock';
    }
    else if(int == 2){
        document.getElementById('computer').src="styles/2.png";
        computer_choice = 'paper';

    }
    else if(int == 3){
        document.getElementById('computer').src="styles/3.png";
        computer_choice = 'scissors';

    }
    
    setTimeout(function(){
    if(computer_choice == user_choice){
        document.getElementById('result').textContent = "You tied! 💁";
        
    }
    else if((computer_choice == "rock" && user_choice == "paper") ||
            (computer_choice == "paper" && user_choice == "scissors") ||
            (computer_choice == "scissors" && user_choice == "rock")){
        document.getElementById('result').textContent = "You won! 🙌";
        
    } 
    else if((computer_choice == "rock" && user_choice == "scissors") || 
            (computer_choice == "paper" && user_choice == "rock") || 
            (computer_choice == "scissors" && user_choice == "paper")){
        document.getElementById('result').textContent = "You lost! 😥";
        
    }
    }, 400);
    }, 3100);
     document.getElementById('repeat_game').disabled = false;
}

function newGame(){
     document.getElementById('user').src = "";
     document.getElementById('computer').src = "";
     document.getElementById('result').textContent = "";
     
    document.getElementById('rock').disabled=false;
    document.getElementById('paper').disabled=false;
    document.getElementById('scissors').disabled=false;

}