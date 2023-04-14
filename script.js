window.addEventListener('load', () => {
    const form = document.querySelector("#inputTask");
    const input = document.querySelector("#input");
    const tasksList = document.querySelector(".tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please fill the task!!!");
            return;
        }

        const addTask_ele = document.createElement("div");
        addTask_ele.classList.add("task");

        const taskContent_ele = document.createElement("div");
        taskContent_ele.classList.add("content");

        addTask_ele.appendChild(taskContent_ele);

        const taskInput_ele = document.createElement("input");
        taskInput_ele.classList.add("text");
        taskInput_ele.type = "text";
        taskInput_ele.value = task;
        taskInput_ele.setAttribute("readonly", "readonly");

        taskContent_ele.appendChild(taskInput_ele);

        tasksList.appendChild(addTask_ele);

        const task_action_ele = document.createElement("div");
        task_action_ele.classList.add("action");

        const task_edit_ele = document.createElement("button");
        task_edit_ele.classList.add("edit");
        task_edit_ele.innerHTML = "Edit";

        const task_delete_ele = document.createElement("button");
        task_delete_ele.classList.add("delete");
        task_delete_ele.innerHTML = "Delete";

        task_action_ele.appendChild(task_edit_ele);
        task_action_ele.appendChild(task_delete_ele);

        addTask_ele.appendChild(task_action_ele);
        tasksList.appendChild(addTask_ele);

        input.value = "";

        task_edit_ele.addEventListener('click', (e) => {
            if(task_edit_ele.innerText.toLowerCase() == "edit") {
                taskInput_ele.removeAttribute("readonly");
                taskInput_ele.focus();
                task_edit_ele.innerText = "Save";
            }
            else{
                taskInput_ele.setAttribute("readonly", "readonly");
                task_edit_ele.innerText = "Edit";
            }
        });

        task_delete_ele.addEventListener('click', (e) => {
			tasksList.removeChild(addTask_ele);
		});

    })

})