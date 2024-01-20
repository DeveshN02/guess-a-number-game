

let random = 0;
let guesses = document.querySelector('#guesses');
let input = document.querySelector('#input');
console.log(input);

const submitbutton = document.querySelector('#submitbutton');
console.log(submitbutton);

let previousinput = document.querySelector('#previousInput');

const chanceleft = document.querySelector('#chanceLeft');

const msg = document.querySelector('#ansmsg');

let guessnum = 1;
let gamestart = true;
input.setAttribute('disabled','');


// starting game
let start = document.querySelector('#startbutton');
start.addEventListener('click', function startgame(e){
    
    random = parseInt(Math.random()*100+1);
    console.log('random number is : ',random);
    input.removeAttribute('disabled','');
    gamestart = true;
   
    msg.textContent = '';
    previousinput.textContent = 'Previous Input : ';
})

// previousinput = [];



// checking game start kr skte h ya nahi

if(gamestart){
    
    submitbutton.addEventListener("click",(e) => {
        e.preventDefault();
        let getinput = input.value;
        // console.log(getinput);
        checkinput(getinput);
        
    })

}


// checking input valid or not

function checkinput(value){
    msg.textContent  = "";
    
    
    if(value<1 || value>100){
        
            msg.textContent = `Enter valid number between 1 to 100 `;
            
    
    }
    else{
        // previousinput.push(value);
        // console.log(previousinput)
        if(guessnum>10){
            msg.textContent =` Game Over , The Number was  :  ${random}`;
            msg.style.color = "red";
            displayguess(value);
            endgame();
        }
        else{
            
                displayguess(value);
                checkguess(value);
           
        }

    }
}


// checking input maching to the random number or not


function checkguess(value){

    
    if(random == value){
        msg.textContent = ` Great! you won the game the Answer was ${random}`;
        
        endgame();
    }
    else if(value>random){
          msg.textContent = `Target is less than Your Value`;
    }
    else{
        msg.textContent = `Target is larger than Your Value`;
    }
}


// displaying what was the previous input
function displayguess(value){
    previousinput.innerHTML += ` ${value}`;
   input.value = '';
   guessnum++;
   chanceleft.innerHTML = ` chance left :  ${11-guessnum} `;
}

function endgame(){
    gamestart = false;
    input.value = '';
    input.setAttribute('disabled','');
   
    
}



