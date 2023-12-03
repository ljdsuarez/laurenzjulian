//script for navbar

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navline").style.opactiy = "0";
  } else {
    document.getElementById("navline").style.opacity = "100";
  }
}
