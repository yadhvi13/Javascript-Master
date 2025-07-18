##selecting elements
```  javascript 
let abc = document.getElementById("abc");
// console.log(abc);
// console.dir(abc);

let abcd = document.getElementsByClassName("123");
console.log(abcd);

let value = document.querySelectorAll("h1");
console.log(value);

let h1 = document.querySelector("h1")
h1.innerHTML = "hello yogeeta";
console.log(h1);
```

##Events Handling
```javascript
let h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    h1.style.color = "red"
})

let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.color = "green";
})

let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.color = "green";
})

//ADDING Event Listener
let p = document.querySelector("p");

function dblclick(){
    p.style.color = "yellow";
}
p.addEventListener("dblclick", dblclick);

// REMOVING Event Listener
let p = document.querySelector("p");
function dblclick(){
    p.style.color = "yellow";
}
p.removeEventListener("dblclick", dblclick);

//INPUT Event
let input = document.querySelector("input");
input.addEventListener("input", function(){
    console.log("Typed");
}) 

let inp = document.querySelector("input");
inp.addEventListener("input", function(e){
    // console.log("Typed");
    // console.log(e.data);
   if(e.data !== null){
    console.log(e.data);
    
   }  
})

//CHANGE EVENT
let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(e){
    // console.log(e.target.value);
    // device.textContent = "device selected";
    device.textContent = `${e.target.value} Device Selected`;
})

//custom input file button using JS and also displaying the file name which is being selected.

let inp = document.querySelector("#inp")
document.querySelector("#fileinp");

inp.addEventListener("click",function(){
     fileinp.click();
})

fileinp.addEventListener("change", function(details){
//  console.log(details.target.files[0].name);
  const file = details.target.files[0];
  if(details.target.files){
    inp.textContent = file.name;
 }
})

// Prevent page from Reload
let form = document.querySelector("form");
form.addEventListener("submit",function(details){
     details.preventDefault();
})

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
    img.setAttribute("src",inputs[0].value );
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
})
```