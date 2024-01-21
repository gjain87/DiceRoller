// username=window.prompt(`Give your name: `)

//  const counter=document.getElementById("counter");
//  const decrease=document.getElementById("decrease");
//  const reset=document.getElementById("reset");
//  const increase=document.getElementById("increase");

//  let count=0;

//  increase.onclick=function()
//  {
//     count++;
//     counter.textContent=count;
//  }

//  decrease.onclick=function()
//  {
//     count--;
//     counter.textContent=count;
//  }

//  reset.onclick=function()
//  {
//     count=0;
//     counter.textContent=count;
//  }


// const roll=document.getElementById("random");
// const label=document.getElementById("label");

// const min=1;
// const max=6;
// let randomnumber;
// random.onclick=function()
// {
//    randomnumber= Math.round(Math.random()*max)+min;
//    label.textContent=randomnumber;

// }


// const min=1;
// const max=100;
// randomNumber=Math.round(Math.random()*(max-min))+min;
// // console.log(randomNumber);
// var playing=true;
// var attempts=0;
// while(playing)
// {
//     guess=window.prompt("Guess a number");
//     guess=Number(guess);
//     if(isNaN(guess))
//     {
//         alert("Enter a valid Number!!");
//     }
//     else if(guess<min || guess>max)
//     {
//         alert("Number must be in range!!");

//     }
//     else{
//         attempts++;
//         if(guess==randomNumber)
//         {
//             alert(`You guessed it right!! The number was ${guess}. You took ${attempts} attempts...`);
//             playing=false;
//         }
//         else if(guess<randomNumber)
//         {
//             alert("Go a bit higher!!");

//         }
//         else{
//             alert("Go a bit lower!!");
//         }
//     }
// }


// const textbox=document.getElementById("textbox");
// const fahrenheit=document.getElementById("farenheit");
// const celsius=document.getElementById("celsius");
// const result=document.getElementById("result");
// let temp;

// function convert()
// {
//     if(fahrenheit.checked){
//         temp=Number(textbox.value);
//         temp=temp*9/5+32;
//         result.textContent=temp+"°F";
//     }
//     else if(celsius.checked)
//     {
//         temp=Number(textbox.value);
//         temp=(temp-32)*(5/9);
//         result.textContent=temp+"°C";
//     }
//     else{
//         result.textContent="Select a unit!"
//     }

// }

function rolldice()
{
    const numofdice=document.getElementById("numofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimage=document.getElementById("diceimage");
    const values=[];
    const images=[];

    for(let i=0;i<numofdice;i++)
    {
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="DiceImages/dice${value}.png">`);
    }
    console.log(images);
    diceresult.textContent=`Dice: ${values.join(", ")}`;
    diceimage.innerHTML=images;
}