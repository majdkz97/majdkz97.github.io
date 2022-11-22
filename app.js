let ch=document.getElementById('switch');
let programing=document.querySelectorAll("#programing");
let design=document.querySelectorAll('#design');
let right=document.querySelector('.right');
let left =document.querySelector('.left');

// for(let i=0;i<programing.length;i++)
// {
  
//   programing[i].style.display='none';

// }
left.style.border='10px solid';
  right.style.border='1px solid';
  for(let i=0;i<design.length;i++)
  {
    design[i].style.display='block';
    
  
  }
  for(let i=0;i<programing.length;i++)
  {
    
    programing[i].style.display='none';
  
  }

ch.checked=false;
function myfuck()
{
if(ch.checked)
{
  right.style.border='10px solid';
  left.style.border='1px solid';
  for(let i=0;i<design.length;i++)
  {
    design[i].style.display='block';
    
  
  }
  for(let i=0;i<programing.length;i++)
  {
    
    programing[i].style.display='none';
  
  }
}
else {
  left.style.border='10px solid';
  right.style.border='1px solid';

  for(let i=0;i<design.length;i++)
  {
    design[i].style.display='none';
    
  
  }
  for(let i=0;i<programing.length;i++)
  {
    
    programing[i].style.display='block';
  
  }
}}


// for(let i=0;i<c.length;i++)
// {
//   c[i].style.display='none';

// }