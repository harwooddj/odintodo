(()=>{"use strict";class t{constructor(t){this.title=t}}class e{constructor(t,e,o,c){this.title=t,this.description=e,this.project=o,this.due=c}}const o=document.getElementById("todo-plus"),c=document.getElementById("project-plus"),l=document.getElementById("form-add-todo"),n=document.getElementById("form-add-project"),i=document.querySelector(".form-add-todo-container"),r=document.querySelector(".form-add-project-container"),s=(document.querySelector(".container"),document.getElementById("form-todo-but-tick")),a=document.getElementById("form-project-but-tick");function d(){i.style.display="none"}function u(){r.style.display="none"}const m=new class{list=[];constructor(){this.LocalStorageToProjectList()}PopListFromUL(t){console.log(t),t.children.forEach((function(t){this.list.push(t.textContent)}))}ProjectListToLocalStorage(){localStorage.clear(),list.length&&list.forEach((function(t){list.setItem(list.indexOf(t),JSON.stringify(t))}))}LocalStorageToProjectList(){let e=Object.keys(localStorage);e.length&&e.forEach((function(e){let o=JSON.parse(localStorage.getItem(e)),c=new t(o.title);list.push(c)}))}};new class{list=[];constructor(){this.LocalStorageToTodoList()}TodoListToLocalStorage(){localStorage.clear(),list.length&&list.forEach((function(t){list.setItem(list.indexOf(t),JSON.stringify(t))}))}LocalStorageToTodoList(){let t=Object.keys(localStorage);t.length&&t.forEach((function(t){let o=JSON.parse(localStorage.getItem(t)),c=new e(o.title,o.description,o.project,o.due);list.push(c)}))}},function(){let t=document.getElementById("project-list");m.list.forEach((e=>{document.createElement("li").textContent=e.title,t.appendChild("li")}))}(),document.addEventListener("click",(t=>{"none"!=l.style.display&&(l.contains(t.target)?t.target==s&&d():d()),t.target==o&&(i.style.display="block"),"none"!=n.style.display&&(n.contains(t.target)?t.target==a&&(function(t){let e=document.createElement("li");e.textContent=t,document.querySelector(".project-list").appendChild(e)}(document.getElementById("project-title").value),m.PopListFromUL(document.querySelector(".project-list")),m.ProjectListToLocalStorage(),u()):u()),t.target==c&&(r.style.display="block")}))})();