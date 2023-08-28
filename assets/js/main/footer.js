const Lan_btn = document.querySelector(".language_btn");
const Lan_list = document.querySelector(".footer_microsoft_language_list");
const arrow = document.querySelector(".arrow");

Lan_btn.addEventListener("click", function () {
  if (Lan_list.style.height === "146px") {
    Lan_list.style.height = "0";
    arrow.style.transform = "rotate(180deg)";
  } else {
    Lan_list.style.height = "146px";
    arrow.style.transform = "rotate(0deg)";
  }
});
