//task list
var listTask = []

//creating a new task
function addTask(){
    // collecting the new task
    let taskName = document.getElementById('taskName').value;
    let taskDeadline = document.getElementById('taskDeadline').value;
    let msg = document.getElementById('msg');

    if(taskName != '' && taskDeadline != ''){
        // config the date of the criation of task
        var task = {};
        let day = new Date().getDate()
        let month = new Date().getMonth() + 1
        let year = new Date().getFullYear()
        let create_date = `${year}-${month > 9 ? month : '0'+month}-${day > 9 ? day : '0'+day}`;

        //add task in list
        task.name = taskName;
        task.created_at = create_date;
        task.status = (taskDeadline > create_date || taskDeadline == create_date) ? 'TO DO' : 'EXPIRED';
        task.deadline = taskDeadline;
        listTask.push(task)
        
        //Displaying all tasks in the list
        show()

        // return success msg
        return msg.innerHTML = "<p class='mt-3 text-success'>Task added successfully</p>";
    }
    // return error msg
    return msg.innerHTML = "<p class='mt-3 text-danger'>You cannot add this task. Please, enter a valid task</p>";
}

//remove a specific task
function remove(id){
    let taskRemove = id;
    listTask.splice(taskRemove, 1);
    show()

    return msg.innerHTML = "<p class='mt-3 text-danger'>Task removed successfully</p>";
}

//Displaying all tasks in the list
function show(){
    // clear current listing
    document.getElementById('taskShow').innerHTML = '';
    document.getElementById('taskName').value = '';
    document.getElementById('taskDeadline').value = '';

    //Displaying list
    listTask.forEach((taskInfo, index) => {
        document.getElementById('taskShow').innerHTML += `<tr> <td>${taskInfo.name}</td> <td>${taskInfo.created_at}</td> <td>${taskInfo.deadline}</td> <td>${taskInfo.status}</td> <td><button class="btn btn-danger" onclick="remove(${index})"><i class="bi bi-trash-fill"></i> REMOVE</button></td> </tr>`;
    })
}

