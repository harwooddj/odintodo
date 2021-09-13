import { Todo, Project, TodoList, ProjectList } from "../src/logic";    

const todoPlus = document.getElementById("todo-plus");
const projectPlus = document.getElementById("project-plus");
const formAddTodo = document.getElementById("form-add-todo");
const formAddProject = document.getElementById("form-add-project");
const formAddTodoContainer = document.querySelector(".form-add-todo-container");
const formAddProjectContainer = document.querySelector(".form-add-project-container");
const todoListContainer = document.querySelector(".todo-list");
const projectListContainer = document.querySelector(".project-list");
const projectSelect = document.getElementById("select");
const formTodoButTick = document.getElementById("form-todo-but-tick");
const formProjectButTick = document.getElementById("form-project-but-tick");

const projectList = new ProjectList;
const todoList = new TodoList;

function showAddForm(form){
    form.style.display = "block";
}

function closeAddForm(form){
    form.style.display = "none";
}

function displayProjectList(){
    projectListContainer.innerHTML = "";
    if(projectList.projects.length){
        projectList.projects.sort((a,b) => {
            if(a.title > b.title){return 1};
            if(a.title < b.title){return -1};
            return 0;
        });
        projectList.projects.forEach((project) => {
            let projectDiv = document.createElement("div");
            let del = document.createElement("h1");
            projectDiv.textContent = project.title;
            projectDiv.id = "project_" + projectList.projects.indexOf(project);
            projectDiv.classList.add("project");
            del.id = "del-project";
            del.classList.add("material-icons");
            del.textContent = "delete_outlined";
            del.classList.add("del")
            projectDiv.appendChild(del);
            projectListContainer.appendChild(projectDiv);
        })
    }
}

function addProject(title){
    let project = new Project(title);
    projectList.projects.push(project);
    SendToLocalStorage();
    displayProjectList();
    updateProjectSelect();
}

function deleteProject(id){
    let project = projectList.projects[id].title;
    for(let i=0; i<todoList.todos.length; i++){
        if(todoList.todos[i].project == project){
            todoList.todos.splice(i,1);
        }
    }
    projectList.projects.splice(id, 1);
    SendToLocalStorage();
    displayProjectList();
    displayTodoList();
}

function updateProjectSelect(){
    projectSelect.innerHTML = "";
    projectList.projects.forEach((project) => {
        let opt = document.createElement("option");
        opt.textContent = project.title;
        projectSelect.appendChild(opt);
    })
}

function displayTodoList(){
    todoListContainer.innerHTML = "";
    if(todoList.todos.length){
        todoList.todos.forEach((todo) => {
            let todoDiv = document.createElement("div");
            let todoTitle = document.createElement("p");
            let todoDue = document.createElement("p");
            let del = document.createElement("h1");
            todoDiv.id = "todo_" + todoList.todos.indexOf(todo);
            todoDiv.classList.add("todo");
        
            todoTitle.textContent = todo.title;
            todoDue.textContent = todo.due;

            del.classList.add("material-icons");
            del.id = "del-todo";
            del.textContent = "delete_outlined";
            del.classList.add("del")
            
            todoDiv.appendChild(todoTitle);
            todoDiv.appendChild(todoDue);
            todoDiv.appendChild(del);

            todoListContainer.appendChild(todoDiv);
        })
    }
}

function addTodo(title, description, project, due){
    let todo = new Todo(title, description, project, due);
    todoList.todos.push(todo);
    SendToLocalStorage();
    displayTodoList();
}

function deleteTodo(id){
    todoList.todos.splice(id, 1);
    SendToLocalStorage();
    displayTodoList();
}

function SendToLocalStorage(){
    localStorage.clear();
    let combinedList = projectList.projects.concat(todoList.todos);
    if(combinedList.length){
        combinedList.forEach((item) => {
            localStorage.setItem(combinedList.indexOf(item),JSON.stringify(item));
        })
    }
}

function retrieveFromLocalStorage(){
    ProjectList.projects = [];
    todoList.todos = [];
    let keys = Object.keys(localStorage);
    if(keys.length){
        keys.forEach((key) => {
            let temp = JSON.parse(localStorage.getItem(key));
            if(temp.type == "project"){
                let project = new Project(temp.title);
                projectList.projects.push(project);
            }else if(temp.type == "todo"){
                let todo = new Todo(temp.title,temp.description,temp.project,temp.due);
                todoList.todos.push(todo);
            }
        }, this);
    }
}

retrieveFromLocalStorage();
updateProjectSelect();
displayProjectList();
displayTodoList();

document.addEventListener("click", e => {
    if(formAddTodo.style.display != "none"){
        if(!formAddTodo.contains(e.target)){
            closeAddForm(formAddTodoContainer);
        }else if(e.target == formTodoButTick){
            addTodo(document.getElementById("todo-title").value,
                document.getElementById("todo-description").value,
                document.getElementById("select").value,
                document.getElementById("due-date").value
            )
            closeAddForm(formAddTodoContainer);   
        }
    }
    if(e.target == todoPlus){
        showAddForm(formAddTodoContainer);
    }
    if(formAddProject.style.display != "none"){
        if(!formAddProject.contains(e.target)){
            closeAddForm(formAddProjectContainer);
        }else if(e.target == formProjectButTick){
            addProject(document.getElementById("project-title").value);
            closeAddForm(formAddProjectContainer);
        }
    }
    if(e.target == projectPlus){
        showAddForm(formAddProjectContainer);
    }
    if(e.target.id == "del-project"){
        if(confirm("All todos related to this project will be deleted!")){
            deleteProject(e.target.parentElement.id.slice(8));
        }  
    }

    if(e.target.id == "del-todo"){
        deleteTodo(e.target.parentElement.id.slice(5));
    }

    if(e.target.classList.contains("todo")){
        console.log("todo clicked")
    }
});

