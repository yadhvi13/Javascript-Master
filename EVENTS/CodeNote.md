##image source
```javascript
"https://images.unsplash.com/photo-1682687982502-b05f0565753a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"

   "https://images.unsplash.com/photo-1626968361222-291e74711449?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGVyfGVufDB8fDB8fHww"

  " https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
```


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

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
    });
})


// MouseOver and MouseOut
let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover",function(){
    abcd.style.backgroundColor = "yellow";
})
abcd.addEventListener("mouseout",function(){
    abcd.style.backgroundColor = "red";
})

//rending and moving div from from left to right to top to bottom 
//but the position of the div should be ABSOLUTE for the div to be moved
let abcd = document.querySelector("#abcd");
window.addEventListener("mousemove",function(dets){
//    console.log(dets.clientX, dets.clientY);
      abcd.style.top = dets.clientY + "px";
      abcd.style.left = dets.clientX + "px";
})


//Event Object: target,type,preventDefault
let abcd = document.querySelector("#abcd");
abcd.addEventListener("click",function(dets){
      //the dets inside function parameter is called EVENT OBJECT    
});

//EVENT BUBBLING 
document.querySelector("#nav")
.addEventListener("click",function(){
    alert("clicked");
})

let ul = document.querySelector("ul");
ul.addEventListener("click",function(dets){
    alert("clicked");
    console.log(dets.target);
    dets.target.style.textDecoration = "lt";
    dets.target.classList.add("lt")
    dets.target.classList.toggle("lt");   
})


let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let button = document.querySelector("button");

button.addEventListener("click",function(){
    console.log("button clicked"); 
});
c.addEventListener("click",function(){
    console.log("c clicked"); 
})
b.addEventListener("click",function(){
    console.log("b clicked"); 
})
a.addEventListener("click",function(){
    console.log("a clicked"); 
})

//EVENT CAPTURING
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let button = document.querySelector("button");

button.addEventListener("click",function(){
    console.log("button clicked"); 
});
c.addEventListener("click",function(){
    console.log("c clicked"); 
})
b.addEventListener("click",function(){
    console.log("b clicked"); 
})
a.addEventListener("click",function(){
    console.log("a clicked"); 
}, true);
//capture phase on a

//phle capture phase on hoga fer bubbling phase, capture phase jisme hoga phle wo honhe aur uske baad bubbling phase
```