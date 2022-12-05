
getServicesFunction();

let programingCards=document.querySelectorAll("#programing");
let designCards=document.querySelectorAll('#design');
let switchProgramming=document.querySelector('.switch-programming');
let switchDesign =document.querySelector('.switch-design');
let previousIndex = 0; 
//Default Active section is programming


///animation button
switchProgramming.style.boxShadow = "-97px 21px 161px -79px rgba(116,16,166,1) inset";
switchProgramming.style.width="20em";
switchDesign.style.width="10em";
switchDesign.style.boxShadow = "0px 1px 52px -5px black inset inset";
///animation button
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
    ///animation button 
    
    switchProgramming.style.boxShadow = "-97px 21px 161px -79px rgba(116,16,166,1) inset";
    switchProgramming.style.width="20em";
    switchDesign.style.width="10em";
    switchDesign.style.boxShadow = "0px 1px 52px -5px black inset";

///animation button
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
    ///animation button
    switchProgramming.style.boxShadow = "0px 1px 52px -5px black inset";
    switchDesign.style.boxShadow = "87px -27px 140px -79px rgba(116,16,166,1) inset";
    switchProgramming.style.width="10em";
    switchDesign.style.width="20em";

    ///animation button
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
function show_pop(){
  document.getElementById('pup').classList.add('open');
  
      }
      function hide_pop(){
  document.getElementById('pup').classList.remove('open');
  
      }



/*card animation*/

///menu navbar showup
function show_menu(){
  document.querySelector('#navi-menu').classList.toggle('open-menu');
  document.querySelectorAll('#ser').classList.toggle('change');
 }
///menu navbar showup
