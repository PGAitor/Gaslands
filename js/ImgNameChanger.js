let i = true;
let a = document.getElementById('imagen');
function fot () {
  if (i == true) {
    i = false;
    a.style.backgroundImage = "url('img/mini.png')";
    a.style.backgroundPosition = 'top';
    a.style.filter = 'saturate(2)';
  }
  else {
    i = true;
    a.style.backgroundImage = "url('img/crash2.jpeg')";
    a.style.backgroundPosition = 'center';
    a.style.filter = 'none';
  }
}
// Hope this one works