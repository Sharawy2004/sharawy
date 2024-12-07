const box = document.querySelector(".box");
const task = document.querySelector(".task");
const form = document.getElementById("add-todo");
const input = document.getElementById("add-input");
const todoBox = document.getElementById("todo")

   
    task.addEventListener("dragstart", ()=>{
        task.classList.add("is-dragging")
    })

    task.addEventListener("dragend", ()=>{
        task.classList.remove("is-dragging")
    })

   
    box.addEventListener("dragover", (e)=>{
        e.preventDefault();
        let curTask = document.querySelector(".is-dragging")
        box.appendChild(curTask)
    })

    form.addEventListener("submit", e=>{
        e.preventDefault();
        let newTaskText=input.value;
        if(!newTaskText) return;
        let newText= document.createElement("p")
        newText.classList.add("task")
        newText.setAttribute("draggable" , "true")
        newText.innerHTML=newTaskText

        newText.addEventListener("dragstart", ()=>{
            task.classList.add("is-dragging")
        })
    
        newText.addEventListener("dragend", ()=>{
            task.classList.remove("is-dragging")
        })
        todoBox.appendChild(newText);
        input.value="";
    })


   
    
