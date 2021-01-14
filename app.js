var input1=document.querySelector("#input1");
var input2=document.querySelector("#input2");
var button=document.querySelector("#button");
var output=document.querySelector("#output");
var gif=document.querySelector("#gif");

button.addEventListener("click",clickhandle);

function clickhandle(){
    var due=parseInt(input1.value);
    
    var html="";
    if(due>=1){
        console.log(due);
        var receive=parseInt(input2.value);
        console.log(receive);
        if(due > receive)
        {
         //var receive=parseInt(read.question("receiving\n"));
           alert(`Insufficient cash!Pay another ₹${due-receive}`);
            console.log("less");
            
        }
        else if(due===receive){
            html="<div class=output_block>"+"No return"+"</div>";
            output.innerHTML=html;
        }
        else
        {
            var ret=receive-due;
            var arr=[1,5,10,20,100,500,2000];
            //console.log(arr);
            var max=0;
            var new1=0;
            var new2=0;
        
            function recr(ret1){
            for(var i=0;i<arr.length;i++){
                if(ret1>=arr[i]){
                max=arr[i];
                // console.log(max);
                }
            }
            new1=parseInt(ret1/max);
            new2=parseInt(ret1%max);
            html+="<div class=output_block>"+"₹"+max+" X "+new1+"</div>";
            console.log(max +"*"+new1);
            if(new2>0){
                recr(new2);
            }
            else{
                
                output.innerHTML=html;
                console.log("returning"+ret);
                setTimeout(giphy,1000);
                
            }
            
            }
            if(ret>=1){
            recr(ret);
            }
            else{
            console.log("no return");
            }
        } 
    }
    else{
    console.log("no due no return")
    }
}   
function giphy(){
    var setter="<div>"+"</div>";
    gif.innerHTML="<img src='cashier.gif'>"
    setTimeout(()=>{gif.innerHTML=setter},4500);
}