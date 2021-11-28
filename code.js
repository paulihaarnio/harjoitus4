
let button=document.querySelector("form")
button.addEventListener("submit",addnote)


function addnote(){
event.preventDefault

FormData= new FormData(form)

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let name=formData.get("name")
let note=formData.get("note")
let fullnote="<li>"+date+" "+name+"<br>"+note+"<br>"+"</li>"
console.log(fullnote); 

if(checkbox.checked){

}
}
