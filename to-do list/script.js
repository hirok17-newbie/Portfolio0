let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}


function addTask(){

let input=document.getElementById("taskInput");
let priority=document.getElementById("priority");


if(input.value=="") return;


tasks.push({
text:input.value,
priority:priority.value,
done:false
});


input.value="";

save();
display();

}



function display(){

let list=document.getElementById("taskList");

list.innerHTML="";


tasks.forEach((task,index)=>{


let li=document.createElement("li");


li.className=task.priority.toLowerCase();


if(task.done)
li.classList.add("completed");


li.innerHTML=`

<span onclick="complete(${index})">
${task.text}
</span>

<button class="delete" onclick="removeTask(${index})">
Delete
</button>

`;


list.appendChild(li);


});


document.getElementById("total").innerHTML=tasks.length;

document.getElementById("completed").innerHTML=
tasks.filter(t=>t.done).length;


}



function complete(index){

tasks[index].done=!tasks[index].done;

save();
display();

}



function removeTask(index){

tasks.splice(index,1);

save();
display();

}



display();