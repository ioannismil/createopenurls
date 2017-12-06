function calculate(){
var x = document.getElementById("txt").value;
var nx = document.getElementById("num").value;
var i;
var ex = document.getElementById("ext").value;
var txt="";
    for(i=0;i<=nx;i++){
        txt+='<a href="'+x+i+ex+'">'+x+i+ex+'</a>'+"<br>";   
    }
document.getElementById("hld").innerHTML=txt;
}
function openall(){
var x = document.getElementById("txt").value;
var nx = document.getElementById("num").value;
var i;
var ex = document.getElementById("ext").value;
var LinksArray = new Array();
    for(i=0;i<=nx;i++){
        LinksArray[i]=x+i+ex;
        
    }
      for (i=0; i<LinksArray.length; i++) {
        window.open(LinksArray[i]);
  }
}