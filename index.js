const navLink1 = document.getElementById("link-1");
let activeLink = navLink1.id;
const navLinks = document.querySelectorAll(".nav-link");
const linksSize = navLinks.length; //la taille des liens

for (let i = 0; i < linksSize; i++) {
  const link = navLinks[i];
  //récupérer idlink
  const linkId = link.id;
  if (activeLink === linkId) {
    link.classList.add("nav-link-active");
  }
}

for (let i = 0; i < linksSize; i++) {
  const link = navLinks[i];

  //récupérer idlink
  const linkId = link.id;

  //attacher l'évènement clickc sur le link
  link.addEventListener("click", (event) => {
    console.log("bonjour le monde");
    linkClickListener(event, link);
  });
}

function linkClickListener(event, link) {
  const clickedElement = event.target;
  activeLink = clickedElement.id;
  if (activeLink === link.id) {
    link.classList.add("nav-link-active");
  }
}

/*
if (condition) {
}

if (condition) {
} else {
}

if (condition) {
} else if (condition) {
} else {
}

/*
const linkClickListener = function () {

}
const linkClickListener =  ()=> {

}*/
