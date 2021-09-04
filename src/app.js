import { Todo, Project, TodoList, ProjectList } from "./logic";    

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
    
}

function displayTodoList(){

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
            closeAddProjectForm();   
        }
    }
    if(e.target == projectPlus){
        showAddProjectForm();
    }
});
