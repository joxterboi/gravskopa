function bildSpel() {
  document.getElementById("secondPic").style.display = "none";
  console.log("1");
  setTimeout(function inital() {
    document.getElementById("secondPic").style.display = "inline-block";
    console.log("2");
    }, 5000);
}
setInterval(bildSpel, 10000);