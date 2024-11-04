let btn1=document.querySelector('.plus');
let btn2=document.querySelector('.minus');
let value=document.querySelector('.curr-value');
let reset=document.querySelector('.restart');

btn1.addEventListener("click",function(){
    value.innerText=parseInt(value.innerText)+1;
});

btn2.addEventListener("click",function(){
    value.innerText=parseInt(value.innerText)-1;
});

reset.addEventListener("click",function(){
    value.innerText=0;
});