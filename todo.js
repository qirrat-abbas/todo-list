const task = document.getElementById("taskInput");
const taskList = document.getElementById("TaskListContainer")

function addTask(){

    if( task.value === ''){
        alert("cannot leave emphty");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        taskList.appendChild(li);
    
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();                   //save data called everytime adding data;
    }

    task.value = "";
}

taskList.addEventListener("click",function(e){

    if(e.target.tagName === 'SPAN'){     //must use target.tagname and must be in capital
        e.target.parentElement.remove();
        saveData();                      //called everytime data is removed and added
    }
});

function saveData(){                    //saves data on local storage
    localStorage.setItem("data",taskList.innerHTML);
}

function displaySaveData(){             //displays save data when reopen the source code
    taskList.innerHTML = localStorage.getItem("data");
}

displaySaveData();