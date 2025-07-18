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

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function(e){
//     // console.log(e.target.value);
//     // device.textContent = "device selected";
//     device.textContent = `${e.target.value} Device Selected`;
// })

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(dets){
//     // console.log(dets.key);
//     // h1.textContent = dets.key;
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = dets.key;
//     }
// })

// let inp = document.querySelector("#inp")
// document.querySelector("#fileinp");

// inp.addEventListener("click",function(){
//      fileinp.click();
// })

// fileinp.addEventListener("change", function(details){
// //  console.log(details.target.files[0].name);
//   const file = details.target.files[0];
//   if(details.target.files){
//     inp.textContent = file.name;
//  }
// })

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit",function(details){
     details.preventDefault();

 //Creating Div-1 
    let card = document.createElement("div");
    card.classList.add("card");
 //Creating Div-2
    let profilepic = document.createElement("div");
    profilepic.classList.add("profilepic");
//create image
    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);
//Creating H3
    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
//Creating H5
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
//Creating para tag
    let p = document.createElement("p");
    p.textContent = inputs[3].value;


    profilepic.appendChild(img);
    card.appendChild(profilepic);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    
    main.append(card);

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
    });
})