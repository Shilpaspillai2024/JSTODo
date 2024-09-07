const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
let editingTask=null

function addTask(){
    if(inputBox.value ===''){
        alert("you must write something!!!!!")
    }else{
         if(editingTask){
            //update the exsiting task

            editingTask.firstChild.textContent=inputBox.value;
            editingTask=null;
         }else
         {


        let li= document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        // create the edit button
        let editBtn = document.createElement("button")
        editBtn.classList.add("edit-btn")
        editBtn.innerHTML="Edit";
        li.appendChild(editBtn)

        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);


        // add event listener for this edit btn

        editBtn.addEventListener("click",function(){
            editTask(li)
        });

        
    }
    inputBox.value="";
    saveData();
}

}

function editTask(taskElement){
    inputBox.value=taskElement.firstChild.textContent;
    editingTask=taskElement;
}



listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){

        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();