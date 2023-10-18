let submit = document.querySelector("input[type = 'submit']");
submit.addEventListener("click",onclick);
function onclick(e){
    e.preventDefault();
         let text = document.getElementById("text").value;
         let one = document.getElementById("one");
         let li = document.createElement("li");
         li.className = "list";
         li.appendChild(document.createTextNode(text));
         one.appendChild(li);
         one.style.marginBottom = "10px";
         let cross = document.createElement("button");
         cross.className = "cross";
         cross.appendChild(document.createTextNode("X")); 
         li.appendChild(cross);
         cross.style.marginLeft = "546px";
         cross.style.marginTop = "none";
        console.log(text);
    };

let deletebtn = document.getElementById("one");
deletebtn.addEventListener("click",del); 
function del(e){
    if(e.target.classList.contains("cross")){
       if(confirm("are you sure!")){
         let a = e.target.parentElement;
         deletebtn.removeChild(a);
   
       };
        
     };
};

let filter = document.getElementById("filter");
filter.addEventListener("keyup",filterItems);
function filterItems(e){
    let texts = e.target.value.toLowerCase();
    let items = one.getElementsByTagName("li");
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(texts) != -1){
                 item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
};
