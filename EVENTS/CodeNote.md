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
```