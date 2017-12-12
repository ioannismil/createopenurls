function calculate(){
var x = document.getElementById("txt").value;
var nx = document.getElementById("num").value;
var i;
var ex = document.getElementById("ext").value;
var txt="";
var ckb = document.getElementById("chk");
var lst = document.getElementById("lst").value;
var slst = lst.split(" ");
    for(i=0;i<=nx;i++){
        if(ckb.checked == true){
        txt+='<a href="'+x+i+slst[i]+ex+'">'+x+i+slst[i]+ex+'</a>'+"<br>";
        }
        else {
            txt+='<a href="'+x+slst[i]+ex+'">'+x+slst[i]+ex+'</a>'+"<br>";
        }
    }
document.getElementById("hld").innerHTML=txt;
}
function openall(){
var x = document.getElementById("txt").value;
var nx = document.getElementById("num").value;
var i;
var ex = document.getElementById("ext").value;
var ckb = document.getElementById("chk");
var lst = document.getElementById("lst").value;
var slst = lst.split(" ");
var LinksArray = new Array();
    for(i=0;i<=nx;i++){
        if(ckb.checked == true){
            LinksArray[i]=x+i+slst[i]+ex;
        }
        else{
            LinksArray[i]=x+slst[i]+ex;
        }
    }
      for (i=0; i<LinksArray.length; i++) {
        window.open(LinksArray[i]);
  }
}