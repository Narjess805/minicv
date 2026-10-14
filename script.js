// ===== Données des projets (Activité 9) =====
const projects = [
  {
    name: "Mini CV One Page",
    description: "CV en HTML5/CSS3/JavaScript avec thème clair/sombre.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Narjess805/minicv"
  },
  {
    name: "DevSecOps Portfolio",
    description: "Portfolio personnel présentant mes compétences DevSecOps.",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    link: "https://github.com/Narjess805/minicv"
  },
  {
    name: "VM Ubuntu sécurisée",
    description: "VM Ubuntu Server avec SSH sécurisé (clé publique, root interdit).",
    tech: ["Ubuntu", "SSH", "VirtualBox"],
    link: "#"
  },
  {
    name: "Conteneurisation Nginx",
    description: "Image Docker cv-docker servant le portfolio via Nginx.",
    tech: ["Docker", "Nginx"],
    link: "#"
  }
];

// ===== Génération dynamique des projets =====
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <article class="project-card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <ul class="project-tech">
        ${project.tech.map(t => `<li>${t}</li>`).join('')}
      </ul>
      <a href="${project.link}" target="_blank" rel="noopener">Voir le projet →</a>
    </article>
  `).join('');
}

// ===== Gestion du thème clair/sombre =====
const themeBtn = document.getElementById('theme');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// ===== Initialisation =====
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});
