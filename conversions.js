
function temperature(){
  let c = document.getElementById("celsius").value;
  let f = (c * 9/5) + 32;
  document.getElementById("f").value = f
  return f
}

function weight(){
  var kg = document.getElementById("kilo").value;
  var p = kg * 2.2
  document.getElementById("pounds").value = p
  return p
}
console.log("hello")
