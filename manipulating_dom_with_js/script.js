function addTask(){

    var taskInput = document.getElementById("taskInput")

    if (taskInput.value === ""){
        alert("Enter a task to add");
        taskInput.focus();
    }

    else{
        var taskValue = taskInput.value;

        var taskList = document.getElementById("todoList");

        // crate a new list item
        var listItem = document.createElement("li")

        // create task text element
        var listItem_span = document.createElement("span")
        listItem_span.textContent = taskValue

        // create edit button
        var listItem_EditButton = document.createElement("button")
        listItem_EditButton.textContent = "Edit"
        listItem_EditButton.onclick = ()=> editTask(listItem_span)
        
        // Create remove button
        var listItem_DeleteButton = document.createElement("button")
        listItem_DeleteButton.textContent = "Delete"
        listItem_DeleteButton.onclick = ()=> removeTask(listItem)


        // Append buttons and text to list itme
        listItem.appendChild(listItem_span)
        listItem.appendChild(listItem_EditButton)
        listItem.appendChild(listItem_DeleteButton)

        // Append list item to the list
        var ul = document.getElementById("todoList")

        ul.appendChild(listItem)



        console.log(taskList);
        
    }

}

function editTask(span){
    var editedValue = prompt(`Edit the task:\n${span.textContent}`)

    if (editedValue === ""){
        editedValue = prompt(`Please enter a valid value.\nEdit the task:\n${span.textContent}`)
    }
    else{
        span.textContent = editedValue.trim()
    }
    
    
    
}

function removeTask(listItem){
    document.getElementById("todoList").removeChild(listItem)
}