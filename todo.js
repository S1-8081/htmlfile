let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let newTask=document.createElement("li");
    newTask.innerText=inp.value;

    let newBtn=document.createElement("button");
    newBtn.innerText="Delete";
    newBtn.classList.add("delete");
    if(inp.value!=""){
        ul.appendChild(newTask);
        newTask.appendChild(newBtn);
    }
    // ul.appendChild(newTask);
    // newTask.appendChild(newBtn);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let itemList=event.target.parentElement;
        itemList.remove();
    }
});
