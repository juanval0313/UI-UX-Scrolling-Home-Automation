// Class:    Web Dev 2
// Prof:     Ryan Fisher
// Project:  javascript scrolling method upon window innerHeight position
// Date:     4/19/19

var ourContainer = document.querySelectorAll('.container');

console.dir(ourContainer.offsetHeight / 2);

window.addEventListener('scroll', function() {

  ourContainer.forEach(cont => {
    if (cont.getBoundingClientRect().y + (cont.offsetHeight / 3.0) < (window.innerHeight / 1.1)) {
      cont.classList.add('scroll_point');
    } else {
      cont.classList.remove('scroll_point');
    }
  });
})
