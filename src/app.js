import { Todo, Project, TodoList, ProjectList } from "../src/logic";    

const todoPlus = document.getElementById("todo-plus");
const projectPlus = document.getElementById("project-plus");
const formAddTodo = document.getElementById("form-add-todo");
const formAddProject = document.getElementById("form-add-project");
const formAddTodoContainer = document.querySelector(".form-add-todo-container");
const formAddProjectContainer = document.querySelector(".form-add-project-container");
const container = document.querySelector(".container");
const formTodoButTick = document.getElementById("form-todo-but-tick");
const formProjectButTick = document.getElementById("form-project-but-tick");


function showAddTodoForm(){
    formAddTodoContainer.style.display = "block";
}

function closeAddTodoForm(){
    formAddTodoContainer.style.display = "none";
}

function showAddProjectForm(){
    formAddProjectContainer.style.display = "block";
}

function closeAddProjectForm(){
    formAddProjectContainer.style.display = "none";
}

function displayProjectList(){
    let content = document.getElementById("project-list");
    projectList.list.forEach(project => {
        let li =document.createElement("li");
        li.textContent = project.title;
        content.appendChild("li")
    })
}

function displayTodoList(){

}

function addProject(title){
    let project = document.createElement("li");
    project.textContent = title;
    document.querySelector(".project-list").appendChild(project);
}

const projectList = new ProjectList;
const todoList = new TodoList;
displayProjectList();
displayTodoList();

document.addEventListener("click", e => {
    if(formAddTodo.style.display != "none"){
        if(!formAddTodo.contains(e.target)){
            closeAddTodoForm();
        }else if(e.target == formTodoButTick){
            closeAddTodoForm();   
        }
    }
    if(e.target == todoPlus){
        showAddTodoForm();
    }
    if(formAddProject.style.display != "none"){
        if(!formAddProject.contains(e.target)){
            closeAddProjectForm();
        }else if(e.target == formProjectButTick){
            addProject(document.getElementById("project-title").value);
            projectList.PopListFromUL(document.querySelector(".project-list"));
            projectList.ProjectListToLocalStorage();
            closeAddProjectForm();   
        }
    }
    if(e.target == projectPlus){
        showAddProjectForm();
    }
});
