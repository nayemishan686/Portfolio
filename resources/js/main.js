//Scrollify
    $(function() {
          $.scrollify({
            section : ".scrollify",
              setHeights: false,
	      updateHash: false,
		
          });
     });
//HAMBERGER MENU

function openMenu(){
    document.getElementById('navbar').style.height = "100vh"
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0"
}


//Scroll top

$(function(){
   $('.humberg-menu a').on('click', function(){
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000); 
   });
});
