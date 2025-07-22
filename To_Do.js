let btn = document.querySelector("button");
let inp = document.querySelector("input");
let li =  document.querySelector("li");
let ul =  document.querySelector("ul");

btn.addEventListener("click", function(event){
    let item = document.createElement("li");
    let dlt = document.createElement("button");
    dlt.innerText = "delete";
    dlt.classList.add("delete");
    item.innerText = inp.value;
    ul.appendChild(item);
    item.appendChild(dlt);
    inp.value ="";

});
inp.addEventListener("keydown", function(event){
    if(event.code === 'Enter'){
        let item = document.createElement("li");
        let dlt = document.createElement("button");
        dlt.innerText = "delete";
        dlt.classList.add("delete");
        item.innerText = inp.value;
        ul.appendChild(item);
        item.appendChild(dlt);
        inp.value ="";

    }
    
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName =="BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
    }
    else{
        console.log("NOT delete");
    }
});

// let dltbts = document.querySelectorAll(".delete");
// for(dlt  of dltbts){
//     dlt.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//  });
// }
