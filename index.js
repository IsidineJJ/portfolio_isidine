const navLink1 = document.getElementById("link-1");
const navLinks = document.querySelectorAll(".nav-link");

navLink1.classList.add("nav-link-active");

navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    navLinks.forEach((element) => element.classList.remove("nav-link-active"));

    element.classList.add("nav-link-active");
  });
});

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
