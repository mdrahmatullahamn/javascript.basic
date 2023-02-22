// console.log('lodded')
// console.log('lodded again')
// function login(amaan){
//     alert(`welcome to amaan`)
// }
// login("amaan")


// function addtodo(){
//     var gettingtodos = document.getElementById('todoshere').value;

//     console.log(gettingtodos ,"gettingtodos");
//     alert('added')
// }
// function addtodo(){
//     var gettingtodos= document.getElementById('todoshere').value;
//     if(gettingtodos){
//         var mytodosformls=JSON.parse(localStorage.getItem("todos")) || [];
//         mytodosformls.push(gettingtodos);
//     localStorage.setItem("todos", JSON.stringify(mytodosformls))
//     document.getElementById('todoshere').value="";
//     alert("todo added");
//     }
//     else{
//         alert('add todo first before  submiting');
//     }
// }



// localstroge
 

// store data to local stroge
localStorage.setItem("product-name","micro x series")
// localStorage.setItem("amaan","tufaial") 

// ADDA DATA TO LOCAL STROGE


localStorage.setItem("price","700.90")
localStorage.setItem("image","png")
localStorage.setItem("color","red")
localStorage.setItem("rule ","none")

// GET NUMBER OF STROGE DATA


console.log(localStorage.length);



// FETCH DATA


console.log(localStorage.getItem("product-name"));


//UPDATE DATA


localStorage.setItem("color","white");
localStorage.setItem("image","amaan.com");



//REMOVE DATA

localStorage.removeItem("image")



//DELETE ALL DATA 



localStorage.clear();

//STORE OBJBCECT


let product = {
    "name": "micro x series",
    "price":"700.90",
    "image":"amaan.com",
    "color":["blue","red","black"]
}


let encodedProduct = JSON.stringify(product);
localStorage.setItem("product",encodedProduct);


//FETCH BOX





// let localdata = localStorage.getItem("product");
// let decodeddata = JSON.parse(localdata);
// console.log(decodeddata);


function CSS(){
    var divFromHtml = document.getElementById(displayTodos)

    var gettingTodosFormLS = JSON.parse(localStorage.getItem("Todos"));
    console.log(gettingTodosFormLS,"gettingTodosFormLS");

    var  finalStructure = []

    for (var i =0; i<gettingTodosFormLS.length;i++){
        var div = document.createElement('div')
        var p = document.createElement('p')
        finalStructure +=`<div>
        <p>${gettingTodosFormLS[i]} </p> </div>`
        
    }


    divFromHtml.innerHTML = finalStructure;
}




