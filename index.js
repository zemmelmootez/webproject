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
