// function prosesToDo(event) {
//   event.preventDefault();

//   let taskName = document.getElementById("task-name").value;
//   let taskPriority = document.getElementById("priority").value;
//   let today = new Date();

//   let day = today.getDate() + 1;
//   let month = today.getMonth();
//   let year = today.getFullYear();

//   let taskDate = `${day}/${month}/${year}`;

//     let wrapper = document.getElementById("cards")
//     let h1 = document.createElement("h1")
//     h1.innerHTML = taskName
    
//     let div = document.createElement("div")
//     let pPrio = document.createElement("p")
//     let pDate = document.createElement("p")

//     pPrio.innerHTML = (taskPriority)
//     pDate.innerHTML = (taskDate)
    
//     div.appendChild(pPrio)
//     div.appendChild(pDate)

//     wrapper.appendChild(h1)
//     wrapper.appendChild(div)
// }

    // function formattedDate() {
    //   let today = new Date()
    //   let day = today.getDate() + 1;
    //   let month = today.getMonth();
    //   let year = today.getFullYear();

    //   let taskDate = `${day}/${month}/${year}`;
    //   return taskDate
    // }

    // // function saveToDo(event) {
    // //   event.preventDefault();

    // //   // Ambil data dari input user
    // //   let name = document.querySelector("#taskName").value;
    // //   let priority = document.querySelector("#priority").value;
    // //   let date = formattedDate();

    // //   let todosData = {name: name,
    // //                     priority: priority,
    // //                     date: date
    // //                   }

    // //   let todosDatas = localStorage.getItem("todos")

    // //   let todos
    // //   if (todosDatas === null) {
    // //     todos = []
    // //   }


    // //   todos.push(todosData)

    // //   localStorage.setItem("todosDatas", JSON.stringify(todos))

    // //   console.log("hello")
    // //   console.log(todos)

    // //   let tesObj = {Nama: "ihsan", Umur: "13"};

    // //   console.log(tesObj)

    // //   localStorage.setItem("OBJ", tesObj);
    // // }

    // let newTask

    // function displayToDo(event) {
    //   event.preventDefault();

    //   let inputTask = document.getElementById("taskName")
    //   let todoList = document.getElementById("todoList")
    //   let name = document.querySelector("#taskName").value;
    //   let prioritas = document.querySelector("#priority").value;
    //   let date = formattedDate();

    //   if(inputTask !== "") {
    //     newTask = document.createElement("li");

    //     newTask.innerHTML = `
    //     <p>nama tugas : ${name}</p>
    //     <p>prioritas : ${prioritas}</p>
    //     <p>nama tugas : ${date}</p>

    //     <input type="checkbox" class="checkbox">
    //     `;

    //     todoList.appendChild(newTask);
    //     inputTask.value = ""

    //     newTask.querySelector(".checkbox").addEventListener("change", function () {
    //       if (this.checked) {
    //         moveTaskTODone(newTask);
    //       } else {
    //         moveTaskTOTDL(newTask);
    //       }
    //     });
    //   }
    // }

    // function moveTaskTODone(task) {
    //   let doneTask = task
    //   let doneList = document.getElementById("doneList")

    //   doneTask.querySelector(".checkbox").checked = true;
      
    //   // console.log("blum masuk done")
    //   // doneList.appendChild(doneTask)
    //   // console.log("udah masuk done")
    // }

    // function moveTaskTOTDL(task) {
    //   let undoneTask = task
    //   let TDL = document.getElementById("todoList")

    //   undoneTask.querySelector(".checkbox").checked = false;
      
    //   console.log("blum masuk undone");
    //   TDL.appendChild(undoneTask);
    //   console.log("udah masuk undone");
    // }



function formattedDate() {
  let today = new Date();
  let day = today.getDate()
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let taskDate = `${day}/${month}/${year}`;
  return taskDate;
}

function displayToDo(event) {
  event.preventDefault();

  let todoList = document.getElementById("todoList");
  let inputName = document.querySelector("#taskName");
  let name = document.querySelector("#taskName").value;
  let prioritas = document.querySelector("#priority").value;
  let date = formattedDate();

  if (name !== "") {
    console.log(prioritas)

    let newTask = document.createElement("li");
    newTask.id = "Task"

    newTask.classList.add("prioritas-" + prioritas);

    newTask.innerHTML = `
      <div class="cb-wrapper">
          <input type="checkbox" class="checkbox" id="cb">
      </div>
      <div class="info-wrapper">
          <h1 class="title-todo">${name}</h1>

          <p class="date-todo">${date}</p>
      </div>
      <div class="label-wrapper-${prioritas}">
          <p class="label-todo">${prioritas}</p>
      </div>
      <div class="delBtn-wrapper"id="delWrapper">
          <button class="del-btn" onclick="deleteTodoI()">X</button>
      </div>
    `;

    todoList.appendChild(newTask);
    inputName.value = "";

    let textNoName = document.querySelector(".no-task");
    if (textNoName) {
      TDL.removeChild(textNoName);
    }

    let taskCheckbox = newTask.querySelector(".checkbox");  

    // Event listener pada checkbox, khusus untuk task ini
    taskCheckbox.addEventListener("change", function () {
      if (this.checked) {
        moveTaskTODone(newTask);
      } else {
        moveTaskTOTDL(newTask);
      }
    });
  }
}

function moveTaskTODone(task) {
  let doneList = document.getElementById("doneList");
  let toDoList = document.getElementById("todoList")

  // Pastikan elemen task dipindahkan hanya ke doneList jika belum ada di dalamnya
  if (!doneList.contains(task)) {
    doneList.appendChild(task);
    console.log("Task dipindahkan ke doneList");

    let textNoName = document.querySelector(".no-task");
    if (textNoName) {
      doneList.removeChild(textNoName);
    }
  }

  if (toDoList.children.length == 0) {
    //cek apakah ada li di dalam ul
    let noTask = document.createElement("p");
    noTask.classList.add("no-task");
    noTask.innerHTML = "Tidak Ada Tugas";
    toDoList.appendChild(noTask);

    console.log("kossong");
  }
}

function moveTaskTOTDL(task) {
  let todoList = document.getElementById("todoList");
  let doneList = document.getElementById("doneList");

  // Pastikan elemen task dipindahkan kembali ke todoList jika belum ada di dalamnya
  if (!todoList.contains(task)) {
    todoList.appendChild(task);
    console.log("Task dipindahkan kembali ke todoList");

    let textNoName = document.querySelector(".no-task");
    if (textNoName) {
      todoList.removeChild(textNoName);
    }
  }

  if (doneList.children.length == 0) {
    //cek apakah ada li di dalam ul
    let noTask = document.createElement("p");
    noTask.classList.add("no-task");
    noTask.innerHTML = "Belum ada tugas yang selesai";
    doneList.appendChild(noTask);
  }
}

let TDL = document.getElementById("todoList");
let TDD = document.getElementById("doneList");

// utk table TDL
if (TDL.children.length == 0) {
  //cek apakah ada li di dalam ul
  let noTask = document.createElement("p");
  noTask.classList.add("no-task");
  noTask.innerHTML = "Tidak Ada Tugas"
  TDL.appendChild(noTask);
}

// utk table TDD
if (doneList.children.length == 0) {
  //cek apakah ada li di dalam ul
  let noTask = document.createElement("p");
  noTask.classList.add("no-task");
  noTask.innerHTML = "Belum ada tugas yang selesai";
  doneList.appendChild(noTask);
}


function deleteTodo() {
  let ulParent = document.getElementById("todoList");

  while (ulParent.firstChild) { 
    ulParent.removeChild(ulParent.firstChild);
  }

  if (TDL.children.length == 0) {
    //cek apakah ada li di dalam ul
    let noTask = document.createElement("p");
    noTask.classList.add("no-task");
    noTask.innerHTML = "Tidak Ada Tugas";
    TDL.appendChild(noTask);
  }
}

function deleteTododone() {
  let ulParent = document.getElementById("doneList");

  while (ulParent.firstChild) {
    ulParent.removeChild(ulParent.firstChild);
  }

  if (doneList.children.length == 0) {
    //cek apakah ada li di dalam ul
    let noTask = document.createElement("p");
    noTask.classList.add("no-task");
    noTask.innerHTML = "Belum ada tugas yang selesai";
    doneList.appendChild(noTask);
  }
}

function deleteTodoI() {
  let child = document.getElementById("delWrapper");

  let parent = child.parentElement;

  parent.remove()
  if (TDL.children.length == 0) {
    //cek apakah ada li di dalam ul
    let noTask = document.createElement("p");
    noTask.classList.add("no-task");
    noTask.innerHTML = "Tidak Ada Tugas";
    TDL.appendChild(noTask);
  }
}





