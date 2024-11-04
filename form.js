// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     // event.preventDefault();
//     console.dir(form);
//     let user = form.elements[0];
//     let pass = form.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     alert("button was clicked");
//     // console.log(user.value,"  ",pass.value);
// });

let inp=document.querySelector("#u");
inp.addEventListener("input",function(){
    let p=document.querySelector("p");
    p.innerText=inp.value;
})