$( document ).ready(function() {

$(window).scroll(function() {
  if ($(this).scrollTop() > 400 ) {
      document.getElementsByClassName("TableOfCont")[0].setAttribute('style', 'left:-2%');
  }
  if ($(this).scrollTop() < 400 ) {
      document.getElementsByClassName("TableOfCont")[0].setAttribute('style', 'left:-15%');
  }
})
});


$('html, body').stop().animate({'scrollTop': $(target).offset().top - 150},900);