// Todo: Make M+ M- and MC functional
// let string = "";
// let buttons = document.querySelectorAll('.btn');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })


let screen = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let screenValue = '';
for (item of buttons)//for each button--for for synatx
{
  item.addEventListener("click",(e)=>{
    let buttonText=e.target.innerText;
    console.log('button text is',buttonText);
    if(buttonText=='X'){
      buttonText='*';
      screenValue+=buttonText;
      screen.value=screenValue;
    }
    else if(buttonText=='='){
      screen.value=eval(screenValue);
    }
    else if(buttonText=='C'){
      screenValue="";
      screen.value=screenValue;
    }
    else{
      screenValue+=buttonText;
      screen.value=screenValue;
    }
  })
}