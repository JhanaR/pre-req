let x = "global";

function showX() {
  console.log(x);
}

function callShowX() {
  let x = "local";
  showX(); // would print "local" in dynamic scope
}

callShowX(); // would print "local" if dynamic, but JS is lexical