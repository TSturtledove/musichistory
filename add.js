var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});

var addbutn = document.getElementById("add");
var textDisplay = document.getElementsByClassName("added")[0]

addbutn.addEventListener("click", function() {
  var songName = document.getElementById("songName").value;
  var artistName = document.getElementById("artistName").value;
  var albumName = document.getElementById("albumName").value;
  // console.log(songName +" "+artistName+" "+albumName)
  textDisplay.innerHTML += '<h2 class="textcolor">' + songName + '</h2><ul class="songlistStyle"><li>' + artistName + '</li><li>' + albumName + '</li></ul>'
  songName = ""
  artistName = ""
  albumName = ""
})
