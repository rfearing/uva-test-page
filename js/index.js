var mobileToggle = document.getElementById('mobile-toggle');
var body = document.getElementById('uva-body');

mobileToggle.onclick = function() {
  body.classList.toggle('show-menu')
}

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

var phases = document.querySelectorAll('.phase-transform');
window.addEventListener('scroll', function (event) {
  phases.forEach(function(phase){
    if (isInViewport(phase)) {
      setTimeout(function() {
        phase.classList.add('viewed')
      }, 1000)
    }
  })
}, false);
