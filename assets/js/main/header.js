//Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger_menu");
const mobileNav = document.querySelector(".header_mobile_nav");
const mobileButton = document.querySelector(".mobile_controls");

//On Default to make Hamburger Menu dissapear
hamburgerMenu.classList.add("inactive_hamburger");

//////////////////////Changing the center white spaces in hamburger menu logo
const st2Path = document.querySelector(".st2");
const st3Path = document.querySelector(".st3");
const allSt = document.querySelectorAll("#st");

const newDAttributeValue =
  "M15,15h-2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2v-2h2v-2h2v-2h-2v2h-2v2h-2v2h-2v-2h-2v-2h-2V15z";
const defaultDAttributeValue =
  "M14,17h12v2H14V17z M14,21h12v2H14V21z M14,25h12v2H14V25z";

mobileButton.addEventListener("click", () => {
  console.log("Clicked!");

  if (checkIfHamburgerMenuIsActive()) {
    // hamburgerMenu.style.display = "none";
    hamburgerMenu.classList.remove("active_hamburger");
    hamburgerMenu.classList.add("inactive_hamburger");
    removeActiveClassListFromPaths();
  } else {
    // hamburgerMenu.style.display = "block";
    hamburgerMenu.classList.add("active_hamburger");
    hamburgerMenu.classList.remove("inactive_hamburger");
    addActiveClassListFromPaths();
  }
});

//Functions
function checkIfHamburgerMenuIsActive() {
  if (st3Path.classList.contains("active")) {
    return true;
  } else {
    return false;
  }
}

function removeActiveClassListFromPaths() {
  allSt.forEach((element) => {
    element.classList.remove("active");
    st2Path.setAttribute("d", defaultDAttributeValue);
  });
}

function addActiveClassListFromPaths() {
  allSt.forEach((element) => {
    element.classList.add("active");
    st2Path.setAttribute("d", newDAttributeValue);
  });
}
