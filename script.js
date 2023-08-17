const img=document.getElementById("img");

img.classList.add("hidden");

const score1=document.getElementById("score1");
let currentscore1=0;

const btn1=document.getElementById("rollbtn1");

function rollnow1(){
    img.classList.remove("hidden");

    let x = Math.floor((Math.random() * 6) + 1);
    console.log(x);
    img.src=`${x}.png`;

    if (x !== 0){
        currentscore1 += x;
        score1.textContent=currentscore1;
    }
    btn1.disabled=true;
    if (btn1.disabled===true){
        btn2.disabled=false;
    }
    if(score1.textContent >= 10){
        console.log("Player 1 wins");
        const winner=document.getElementById("winner");
        let newNode = document.createElement('p');
        newNode.appendChild(document.createTextNode("Player 1 wins"));
        winner.appendChild(newNode);
        btn1.disabled=true;
        btn2.disabled=true;
    }

}

const score2=document.getElementById("score2");
let currentscore2=0;

const btn2=document.getElementById("rollbtn2");

function rollnow2(){
    let x = Math.floor((Math.random() * 6) + 1);
    img.src=`${x}.png`;

    if (x !== 0){
        currentscore2 += x;
        score2.textContent=currentscore2;
    } 
    btn2.disabled=true;
    if (btn2.disabled===true){
        btn1.disabled=false;
    }
    if(score2.textContent >= 10){
        console.log("Player 2 wins");
        const winner=document.getElementById("winner");
        let newNode = document.createElement('p');
        newNode.appendChild(document.createTextNode("Player 2 wins"));
        winner.appendChild(newNode);
        // winner.innerHTML("Player 1 wins");
        btn1.disabled=true;
        btn2.disabled=true;
    }
}

const resetgame=document.getElementById("reset")
resetgame.addEventListener("click",()=>{
    console.log("reset");
    img.classList.add("hidden");
    score1.textContent=0;
    score2.textContent=0;
    winner.textContent="";
    if (btn1.disabled==true){
        btn1.disabled=false;
        currentscore1=0;

    }
    if (btn2.disabled==true){
        btn2.disabled=false;
        currentscore2=0;
    }
});

