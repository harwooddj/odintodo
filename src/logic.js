export class Project { 
    constructor(title){
        this.title = title;
    }
}

export class Todo { 
    constructor(title, description, project, due){
        this.title = title;
        this.description = description;
        this. project = project;
        this.due = due;
    }
}

export class TodoList {
    list = [];
    constructor(){
        this.LocalStorageToTodoList();
    }

    TodoListToLocalStorage(){
        localStorage.clear();
        if(list.length){
            list.forEach(function(todo){
                list.setItem(list.indexOf(todo),JSON.stringify(todo));
            })
        }   
    }

    LocalStorageToTodoList(){
        let keys = Object.keys(localStorage);
        if(keys.length){
            keys.forEach(function(key){
                let temp = JSON.parse(localStorage.getItem(key));
                let todo = new Todo(temp.title,temp.description,temp.project,temp.due);
                list.push(todo);
            })
        }
    }
}

export class ProjectList {
    list = [];
    constructor(){
        this.LocalStorageToProjectList();
    }

    PopListFromUL(ul){
        console.log(ul)
        ul.children.forEach(function(li){
            this.list.push(li.textContent);
        })
    }

    ProjectListToLocalStorage(){
        localStorage.clear();
        if(list.length){
            list.forEach(function(project){
                list.setItem(list.indexOf(project),JSON.stringify(project));
            })
        }   
    }

    LocalStorageToProjectList(){
        let keys = Object.keys(localStorage);
        if(keys.length){
            keys.forEach(function(key){
                let temp = JSON.parse(localStorage.getItem(key));
                let project = new Project(temp.title);
                list.push(project);
            })
        }
    }
}
