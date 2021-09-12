export class Project { 
    constructor(title){
        this.type = "project";
        this.title = title;
    }
}

export class Todo { 
    constructor(title, description, project, due){
        this.type = "todo";
        this.title = title;
        this.description = description;
        this. project = project;
        this.due = due;
    }
}

export class TodoList {
    todos = [];
}

export class ProjectList {
    projects = [];
}


