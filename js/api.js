async function loadProjects() {
  const container = document.getElementById("projectsFromApi");

  try {
    const res = await fetch("api/projects");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    container.innerHTML = `
      <ul>
        ${data.map(p => `
          <li>
            <strong>${p.name}</strong> — ${p.tech.join(", ")}
          </li>
        `).join("")}
      </ul>
    `;
  } catch (err) {
    container.textContent = "Failed to load projects";
    console.error("API Error:", err);
  }
}

loadProjects();

async function loadSkills() {
  const container = document.getElementById("skillsFromApi");
    try {
        const res = await fetch("/api/skills");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        container.innerHTML = `
          <ul>
            ${data.map(s => `
              <li>
                <strong>${s.name}</strong>
              </li>
            `).join("")}
          </ul>
        `;
      } catch (err) {
        container.textContent = "Failed to load skills";
        console.error("API Error:", err);
      }
    }

loadSkills();   

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("contactStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Sending...";
  statusEl.className = "status-sending";
  form.querySelector("button").disabled = true;

  const payload ={
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  }
  try{
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }); 
     const data = await res.json();

     if(!res.ok){
      statusEl.textContent = `Error: ${data.error || 'Failed to send message'}`;
      statusEl.className = "status-error";
      form.querySelector("button").disabled = false;
     
     }

     statusEl.textContent = "Message sent successfully!";
     statusEl.className = "status-success";
     form.reset();
     form.querySelector("button").disabled = false;
  } catch(err){
      statusEl.textContent = "❌ Network error";
      statusEl.className = "status-error";
      form.querySelector("button").disabled = false;
  }})
