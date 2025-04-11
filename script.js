document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `${taskText} <span class='delete'>❌</span>`;
            taskList.appendChild(li);
            taskInput.value = "";
            attachDeleteEvent(li);
        }
    });

    function attachDeleteEvent(task) {
        task.querySelector(".delete").addEventListener("click", function() {
            task.remove();
        });
    }
});
