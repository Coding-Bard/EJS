
let space = spaceHash();
let hash = hashSpace();

function hashSpace() {
var hashS = "";
for(let i = 0; i < 4; i++) {
  hashS = "# "+ hashS;
}
return hashS;
}

function spaceHash() {
  var spaceH = "";
  for(let i = 0; i < 4; i++) {
    spaceH = " #" + spaceH;
  }
  return spaceH;
}




for(let i = 0; i < 8; i++) {
  if(i % 2 == 0) {
    console.log(hash);
  }else {
    console.log(space);
  }

}
