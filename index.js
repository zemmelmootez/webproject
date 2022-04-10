/*
function test(){
   
    if(document.body.style.backgroundColor=="white")
    {document.body.style.backgroundColor="black";
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
      
     all[i].style.color = "white";
     
    }
}
    else { document.body.style.backgroundColor="white";
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    
      
     all[i].style.color = "black";
    }}
}
*/
function test()
{
  
 if( document.getElementById("switch").attributes[3].value=="dark")
  {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("switch").attributes[3].value="light";
    document.querySelector(".logo").src="logodark.png";
    document.getElementById("logo").src="logodark.png";
    
}
else
{ document.getElementById("switch").attributes[3].value="dark";
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector(".logo").src="Groupe 17.png";
    document.getElementById("logo").src="Groupe 17.png";
}
}
