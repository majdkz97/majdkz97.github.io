const serivceUrl = "https://thecompany2022.000webhostapp.com/services.php";

let programingCards=document.querySelectorAll("#programing");
let designCards=document.querySelectorAll('#design');
let switchProgramming=document.querySelector('.switch-programming');
let switchDesign =document.querySelector('.switch-design');
let loader =document.querySelector('#loader');
let previousIndex = 0; //Default Active section is programming


fetch(serivceUrl)       
  .then(response => response.json())
  .then(data => {
    console.log(data)
    console.log(data)
    loader.style.display = "none";
  });




switchProgramming.style.border='10px solid';
switchDesign.style.border='1px solid';
  for(let i=0;i<programingCards.length;i++)
  {
    programingCards[i].style.display='block';
    
  
  }
  for(let i=0;i<designCards.length;i++)
  {
    
    designCards[i].style.display='none';
  
  }

function onChangeSection(selectedIndex)
{
if(previousIndex!=selectedIndex)
 {
  previousIndex = selectedIndex;
  if(selectedIndex==0)
  {
    switchProgramming.style.border='10px solid';
    switchDesign.style.border='1px solid';
    for(let i=0;i<designCards.length;i++)
    {
      designCards[i].style.display='none';
    }
    for(let i=0;i<programingCards.length;i++)
    {
      programingCards[i].style.display='block';
    }
  }
  else if(selectedIndex == 1)
  {
    switchProgramming.style.border='1px solid';
    switchDesign.style.border='10px solid';
    for(let i=0;i<designCards.length;i++)
    {
      designCards[i].style.display='block';
    }
    for(let i=0;i<programingCards.length;i++)
    {
      programingCards[i].style.display='none';
    }
  }

 
  
}}


// for(let i=0;i<c.length;i++)
// {
//   c[i].style.display='none';

// }


