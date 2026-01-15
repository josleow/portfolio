// ---------- Project Status Toggler ----------
const toggleBtn = document.getElementById("toggleBtn");
const statusText = document.getElementById("statusText");

let status = 0;

if (toggleBtn && statusText) {
  toggleBtn.addEventListener("click", function () {
    if (status === 0) {
      statusText.textContent = "Projects in progress 🛠️";
      status = 1;
    } else if (status === 1) {
      statusText.textContent = "Projects completed ✅";
      status = 2;
    } else {
      statusText.textContent = "Projects coming soon 🚧";
      status = 0;
    }
  });
}

// ---------- Notes App with LocalStorage ----------
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

// If notes section exists on the page, enable notes logic
if (noteInput && addNoteBtn && notesList) {
  let notes = [];
  noteInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addNoteBtn.click();
    }
  });
  
  // Load notes safely
  try {
    notes = JSON.parse(localStorage.getItem("notes")) || [];
  } catch (e) {
    notes = [];
  }

  function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach(function (note, index) {
      const li = document.createElement("li");
      li.textContent = note;
      //click to delete
      li.addEventListener("click", function(){
        notes.splice(index, 1)
        localStorage.setItem("notes", JSON.stringify(renderNotes))
        renderNotes()
      })

      notesList.appendChild(li);
    });
  }

  renderNotes();

  addNoteBtn.addEventListener("click", function () {
    const noteText = noteInput.value.trim();
    if (noteText === "") return;

    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    renderNotes();
    noteInput.value = "";
  });
}
