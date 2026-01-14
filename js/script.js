const button = document.getElementById("toggleBtn");
const text = document.getElementById("statusText");

let status = 0;
button.addEventListener("click", function () {
  if (status ===0){
    text.textContent = "Projects in progress"
    status = 1
  }else if(status === 1){
    text.textContent = "Projects complete"
    status = 2
  }else{
    text.textContent = "Projects coming soon 🚧"
    status = 0
  }

})

const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

addNoteBtn.addEventListener('click', function(){
  const noteText = noteInput.value
  if (noteText === "") return

  const li = document.createElement("li")
  li.textContent = noteText
  notesList.appendChild(li)
  noteInput.value = ""
})