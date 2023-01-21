let addToDoButton = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");
let inputField = document.querySelector("#inputField");



addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
    
    if(document.querySelector("#inputField").value.length == 0){
        window.alert("Please enter a task")
    }
    else{
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
        
    }
    
   
})



