/* $(function() {
	var topPadding = 15;
	var declenche = $("#sidebar").offset().top;

	$(window).scroll(function() {
		if ($(window).scrollTop() > declenche){
			$("#sidebar").css({"position":"fixed"});
		} else {
			$("#sidebar").css({"position":"static"});
		}
	});
});*/
{/* <script type="text/javascript">

    $(document).ready(function () {

        $('.carousel-caption').hide();
        $('img[alt = imgAlt').on('hover', function () {
            $('.carousel-caption').fadeIn();
        });
    });

</script> */}
$(document).ready(function(){
    // invoke the carousel
        $('#myCarousel').carousel({
          interval: false
        });
    
    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){
    
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                $(this).carousel('prev');
                
            }
            else{
                $(this).carousel('next');
                
            }
        });
    
    //scroll slides on swipe for touch enabled devices 
    
         $("#myCarousel").on("touchstart", function(event){
     
            var yClick = event.originalEvent.touches[0].pageY;
            $(this).one("touchmove", function(event){
    
            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
        });
    });
        
    });
    
