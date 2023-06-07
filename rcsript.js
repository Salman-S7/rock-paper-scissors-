
let sysSelect = ['rock','paper','scissor'];
let winCount = 0;

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * sysSelect.length);
    let random = sysSelect[randomIndex];
    return random;
}


//console.log(random);

function playRound(random,usrSelect){

    //random = random.toLowerCase();
    //console.log(usrSelect);
    usrSelect = usrSelect.toLowerCase();
    if((random === sysSelect[0] && usrSelect === sysSelect[2])||(random === sysSelect[2] && usrSelect === sysSelect[1])
    ||(random === sysSelect[1] && usrSelect === sysSelect[0])){
        winCount--;
        console.log("You loose!! "+random+" beats "+usrSelect);
      
    }else{
        winCount++;
        console.log("You won..!! "+usrSelect+" beats "+random);
    }
    
}
let count = 0;
while(count<5){
    let usrSelect = prompt("Enter rock/paper/scissor");
    random = getComputerChoice();
    playRound(random,usrSelect);
    count++;
}


console.log(winCount);
if(winCount>0){
    alert("You won");
}else{
    alert("you loose");
}