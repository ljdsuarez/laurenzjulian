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

function displayShowcase(clickedId) {
  document.querySelector(".showcase").style.display = "none";
  document.getElementById(`showcase-${clickedId}`).style.display = "block";
  document.querySelector(".work-title").style.fontWeight = "300";
  document.getElementById(`${clickedId}`).style.fontWeight = "700";
  console.log(clickedId);
}
