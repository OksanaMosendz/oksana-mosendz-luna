// Footer
const footer = document.createElement("footer");
const script = document.currentScript;
script.insertAdjacentElement("beforebegin", footer);
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
footer.append(copyright);
copyright.insertAdjacentHTML(
  "beforeend",
  `<span>&#169</span> <span>Oksana Mosendz ${thisYear}</span>`
);

// footer styles
copyright.className=('container');
copyright.style.padding=('1.7rem');
footer.style.textAlign=('end');
footer.style.backgroundColor=( 'rgb(223 180 180)');
footer.style.borderTop=('1px black solid');


// Skills
const skills = ["HTML", "CSS", "JavaScript", "React", "GitHub", "Figma"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = `> ${skills[i]} <`;
  skillsList.appendChild(skill);
}



