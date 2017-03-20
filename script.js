function bildSpel() {
  document.getElementById("secondPic").style.display = "none";
  setTimeout(function inital() {
    document.getElementById("secondPic").style.display = "inline-block";
    }, 5000);
}
setInterval(bildSpel, 10000);