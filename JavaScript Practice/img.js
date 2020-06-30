var pic = document.getElementById("pic");
i=100
function expand(){
    // pic.height=100;
    // pic.width=100;
    if(i>300){
        alert('max condition reached');
    }else{
        i = i +20
        pic.height=i;
        pic.width=i;
    }
}
function shrink(){
    // pic.height=100;
    // pic.width=100;
    if(i<=100){
        alert('min condition reached');
    }else{
        i = i -20
        pic.height=i;
        pic.width=i;
    }
}
function change(){
    var off = document.getElementById("off");
    var btn = document.getElementById("btn");
    if(btn.innerText=="on"){
        off.src = "on.png";
        btn.innerText="off";
    }else{
        
        off.src= "off.png";
        btn.innerText="on";
       
    }

    
}