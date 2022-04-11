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


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });