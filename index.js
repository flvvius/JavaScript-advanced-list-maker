const addBtn = document.querySelector("#add-button")
const inputElem = document.querySelector("#input")
const taskContainer = document.querySelector(".task-container")


inputElem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        addBtn.click()
    }
})


inputElem.focus()


addBtn.addEventListener("click", function() {

    let task = document.createElement("div")
    task.classList.add("task")

    let li = document.createElement("li")
    li.textContent = `${inputElem.value}`
    task.appendChild(li)

    let doneBtn = document.createElement("button")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    doneBtn.classList.add("done")
    task.appendChild(doneBtn)

    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteBtn.classList.add("delete")
    task.appendChild(deleteBtn)

    if (inputElem.value === "") {
        alert("Please enter a task!")
    } else {
        taskContainer.appendChild(task)
    }

    inputElem.value = ""
    inputElem.focus()

    doneBtn.addEventListener("click", function() {

        doneBtn.parentElement.style.textDecoration = "line-through"
        inputElem.focus()

    })

    deleteBtn.addEventListener("click", function() {

        task.remove()
        inputElem.focus()
        
    })

})