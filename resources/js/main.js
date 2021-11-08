// mixit up

var mixer = mixitup('.work-grid');

// wow

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false ,       // default
    live:         true        // default
  }
  )
  wow.init();


  // Hamburger menu
function openMenu() {
  document.getElementById("menu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("menu").style.width ="0%";
}

// Scroll
$('.hb-menu ul li a, .next-section a').on('click',function(){
  $('html,body').animate({
    scrollTop: $($.attr(this,'href')).offset().top
  },1000);
  return false
});