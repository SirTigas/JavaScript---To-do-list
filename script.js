//task list
var listTask = []

//creating a new task
function addTask(){
    // collecting the new task
    let taskName = document.getElementById('taskName').value;
    let taskDeadline = document.getElementById('taskDeadline').value;
    // console.log(taskDeadline);

    if(taskName != ''){
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
        return document.getElementById('msg').innerHTML = "Task added successfuly";
    }
    // return error msg
    return document.getElementById('msg').innerHTML = "You cannot add this task. Please, enter a valid task";
}

//remove a specific task
function remove(id){
    let taskRemove = id;
    listTask.splice(taskRemove, 1);
    show()

    return document.getElementById('msg').innerHTML = "Task removed successfuly";
}

//Displaying all tasks in the list
function show(){
    // clear current listing
    document.getElementById('taskShow').innerHTML = '';
    document.getElementById('taskName').value = '';
    document.getElementById('taskDeadline').value = '';

    //Displaying list
    listTask.forEach((taskInfo, index) => {
        document.getElementById('taskShow').innerHTML += `<tr> <td>${taskInfo.name}</td> <td>${taskInfo.created_at}</td> <td>${taskInfo.deadline}</td> <td>${taskInfo.status}</td> <td><button class="button-table" onclick="remove(${index})">REMOVE</button></td> </tr>`;
    })
}
