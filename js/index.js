// Footer

// const { createElement } = require("react");

const footer = document.createElement("footer");
const script = document.currentScript;
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");

script.insertAdjacentElement("beforebegin", footer);
footer.append(copyright);

copyright.insertAdjacentHTML(
  "beforeend",
  `<span>&#169</span> <span>Oksana Mosendz ${thisYear}</span>`
);

// footer styles
copyright.className = "container";
copyright.style.padding = "1.7rem";
footer.style.textAlign = "end";
footer.style.borderTop = "1px indianred solid";

// Skills
const skills = ["HTML", "CSS", "JavaScript", "React", "GitHub", "Figma"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = `> ${skills[i]} <`;
  skillsList.appendChild(skill);
}

// Leave message&messages
const messageForm = document.getElementsByTagName("form")[0];
const messageSection = document.getElementById("messages");
const navItemMessage = document.querySelector(`[href='#messages']`);

function displayMessageSection() {
  if (document.getElementsByClassName("message-item").length === 0) {
    messageSection.style.display = "none";
    navItemMessage.style.display = "none";
  } else {
    messageSection.style.display = "block";
    navItemMessage.style.display = "block";
  }
}

displayMessageSection();

messageForm.addEventListener("submit", (e) => {
  // form
  e.preventDefault();
  let usersName = e.target.usersName.value;
  let usersEmail = e.target.usersEmail.value;
  let usersMessage = e.target.usersMessage.value;

  // messages
  const messageList = messageSection.getElementsByTagName("ul")[0];
  const newMessage = document.createElement("li");
  newMessage.className = "message-item";

  newMessage.insertAdjacentHTML(
    "beforeEnd",
    `<a class="message-name" href='mailto:${usersEmail}'>${usersName}</a>
     <p class="message-text">${usersMessage}</p>`
  );

  // remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.className = "message-remove__btn";
  newMessage.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();
    displayMessageSection();
  });

  //  edit button
  const editButton = document.createElement("a");
  editButton.innerText = "Edit";
  editButton.setAttribute("href", "#leaveMessage");
  editButton.className = "message-edit__btn";
  editButton.addEventListener("click", () => {
    e.target.usersName.value = usersName;
    e.target.usersEmail.value = usersEmail;
    e.target.usersMessage.value = usersMessage;

    const entry = removeButton.parentNode;
    entry.remove();
    displayMessageSection();
  });
  newMessage.appendChild(editButton);

  messageList.append(newMessage);
  displayMessageSection();
  e.target.reset();
});

// Projects

let repositories;

function getRepositories() {
  return fetch("https://api.github.com/users/OksanaMosendz/repos?per_page=40")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      repositories = data;
    })
    .catch((err) => console.log(err));
}

const projectSection = document.getElementById("projects");
const projectsList = projectSection.querySelector("ul");

async function createProjectList() {
  await getRepositories();

  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    project.className = "project-item";

    const projectLink = document.createElement("a");
    project.appendChild(projectLink);

    if (repositories[i].description !== null) {
      projectLink.innerHTML = `${repositories[i].description}`;
      projectLink.setAttribute("href", `${repositories[i].html_url}`);
      projectsList.appendChild(project);
    }
  }
}
createProjectList();

// burger-menu

const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');
const navListItems=navList.querySelectorAll(".nav-list-item")

burger.addEventListener('click', () => {

  if (navList.style.display === 'flex') {
    navList.style.display = 'none'; 
  } else {
    navList.style.display = 'flex'; 
  }
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navList.style.display = ''; 
  } else {
navList.style.display = 'none';

navListItems.forEach((item)=>{
  item.addEventListener("click",()=>{
   navList.style.display = 'none';
  })
})
  }
});

