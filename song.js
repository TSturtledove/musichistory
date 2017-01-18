var songs = [];

songs[songs.length] = "Ｖｏｇｅｌ　ｉｍ　Ｋａ［：］ｆｉｇ - by 澤野弘之 on the album ＴＶアニメ「進撃の巨人」オリジナルサウンドトラック";
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "Legs > by ZZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "The Logical Song > by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Welcome to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Ironic > by Alanis Morisette on the album Jagged Little Pill";
songs[songs.length] = "I'm not dead - by P!nk on the album I'm not dead";

console.log(songs)

// look into splice and replace to clean up the strings (also concat and stuff)


// need to use split to seek out the irregulars and remove them, and use
// replace to switch out the > with -

//will hold off on the split function as I know of multiple artists that use
// random and misstake looking icons and symbols in the names of their work.

// make a loop to run through each song in list separately
// needs to check for replace and have a commented out split function

function hipHopPiPopulate1() {
  console.log("hey there")
  var textDisplay = document.getElementsByClassName("added")[0]

  for (var t = 0; t < songs.length; t++) {
    var oldStr = songs[t];
    var newStr = oldStr.replace(/>/i, "-");
    console.log(newStr)
    console.log("what")
    // console.log(oldStr)
    textDisplay.innerHTML += newStr +" "
  }

}

hipHopPiPopulate1()


// hey all this is a test
