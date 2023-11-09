//script for navbar

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navline").style.width = "100vw";
  } else {
    document.getElementById("navline").style.width = "0vw";
  }
}

//for works script

document.getElementById("lps").style.fontWeight = "700";
document.getElementById("showcase-tcs").style.display = "none";

//selecting class function styling
function classStyle(className, styleName, value) {
  for (let i = 0; i < document.getElementsByClassName(className).length; i++) {
    document.getElementsByClassName(className)[i].style[styleName] = value;
  }
}

function displayShowcase(clickedId) {
  classStyle("showcase", "display", "none");
  document.getElementById(`showcase-${clickedId}`).style.display = "flex";
  classStyle("work-title", "fontWeight", "300");
  document.getElementById(`${clickedId}`).style.fontWeight = "700";
}
