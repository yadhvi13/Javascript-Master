// -----------------DOM------------

// let abc = document.getElementById("abc");
// // console.log(abc);
// console.dir(abc);

// let abcd = document.getElementsByClassName("123");
// console.log(abcd);

// let value = document.querySelectorAll("h1");
// console.log(value);

// let h1 = document.querySelector("h1")
// h1.innerHTML = "hello yogeeta";
// console.log(h1);

// ----------------Events and Events Handling
// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
//     h1.style.color = "red"
// })

// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color = "green";
// })

// let p = document.querySelector("p");
// p.addEventListener("dblclick",function(){
//     p.style.color = "yellow"
// })

// let p = document.querySelector("p");

// function dblclick(){
//     p.style.color = "yellow";
// }
// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);

// let inp = document.querySelector("input");
// inp.addEventListener("input", function(e){
//     // console.log("Typed");
//     // console.log(e.data);
//    if(e.data !== null){
//     console.log(e.data);
    
//    }  
// })

let sel = document.querySelector("select");
let device = document.querySelector("#device");


sel.addEventListener("change", function(e){
    // console.log(e.target.value);
    device.textContent = "device selected";
})