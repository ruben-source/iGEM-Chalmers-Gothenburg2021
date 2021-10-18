//scroll down
$("#header-btn").click(function() {
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#scroll-down-anchor").offset().top -100
	}, 200);
});


// scroll up	
window.onscroll = function()
{
	if(window.scrollY > 250)
	{
		document.getElementById('scroll-to-top').style.visibility="visible"
	}else
	{
		document.getElementById('scroll-to-top').style.visibility="hidden";
	}
};


// progress-bar
$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress-bar").css("width", progress + "%");
})
