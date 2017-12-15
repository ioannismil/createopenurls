function calculate(){
var x = document.getElementById("txt").value;
var nx = document.getElementById("num").value;
var ckb = document.getElementById("chk");
var lst = document.getElementById("lst").value;
var ex = document.getElementById("ext").value;
var i;
var txt="";
var slst = lst.split(" ");
    
if(slst.length==1){
        for(i=0;i<=nx;i++){
            slst[i]="";
        }
    }
    for(i=0;i<=nx;i++){
        if(ckb.checked == true){
        txt+='<a href="'+x+i+slst[i]+ex+'">'+x+i+slst[i]+ex+'</a>'+"<br>"; 
        }
        else {
            txt+='<a href="'+x+slst[i]+ex+'">'+x+slst[i]+ex+'</a>'+"<br>";
        }
    }
        var x = document.getElementById("con");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
document.getElementById("hld").innerHTML=txt;
}

function openall(){
    
var x = document.getElementById("txt").value;
var nx = document.getElementById("num").value;
var ex = document.getElementById("ext").value;
var ckb = document.getElementById("chk");
var lst = document.getElementById("lst").value;
var i;
var slst = lst.split(" ");
var LinksArray = new Array();
    
if(slst.length==1){
        for(i=0;i<=nx;i++){
            slst[i]="";
        }
    }

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
