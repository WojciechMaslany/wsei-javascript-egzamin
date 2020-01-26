document.addEventListener("DOMContentLoaded", function(){
    var button1 = document.getElementById("button-1");
    let button2 = document.getElementById("button-2");
    let button3 = document.getElementById("button-3");
    let productList = document.getElementById("shopping-list");
    let newlm = document.createElement("li");


    button1.addEventListener("click", function(){
        newlm.innerHTML = "Chleb"
        productList.appendChild(newlm);
    }); 

    button2.addEventListener("click", function(){
        productList.removeChild(productList.lastElementChild);
    });

    button3.addEventListener("click", function(){
        let child = productList.children[1].innerText;
        let li = document.createElement('LI');
        li.appendChild(document.createTextNode(child));
        productList.appendChild(li);
    });
});