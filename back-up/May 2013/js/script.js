// JavaScript Document

//Fade In

    $(document).ready(function () {
            
		$("#container img, #next").hide();
		$("#container img, #next").bind("load", function () { $(this).fadeIn(); });
		$("#container img, #next").fadeIn("slow");
        
	});

//END Fade In

//Isotope

       $(function(){
      
      var $container = $('#container');


      // filter buttons
      $('ul a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
      });

      
      // switches selected class on buttons
      $('nav').find('ul a').click(function(){
        var $this = $(this);

        // don't proceed if already selected
        if ( !$this.hasClass('selected') ) {
          $this.parents('ul').find('.selected').removeClass('selected');
          $this.addClass('selected');
        }

      });

      $container.isotope({
        itemSelector : '.item'
      });
      
    });


//END Isotope

//Drop Down Nav

$(function(){
	
	$('nav').naviDropDown({
		dropDownWidth: '125px'
	});
}); 

//END Drop Down Nav

//Shadow Box

Shadowbox.init();

//END Shadow Box

//ScrollTo

jQuery(document).ready( function(){
	
	// easing function
	$.easing.elasout = function(x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	};
	
	//resets the page
	$('body').scrollTo( 0 );
	$.scrollTo( 0 );

	$(window).scroll( function() {
        if ($(window).scrollLeft() > 950)
            $('#next').hide();
        if ($(window).scrollLeft() < 100)
            $('#next').show();
    } );
	
	// click function
	$('#next').click(function(){
		$('#back').fadeIn('slow');
		$.scrollTo('+=650px', 500, {axis:'x'});
	if ($(window).width() > 1660){
		$('#next').fadeOut('slow');	
		}
	});
	
	$('#back').click(function(){
		$('#back').fadeOut('slow');
		$.scrollTo('0px', 500, {axis:'x'}); 
	});
	

	$('.work').click(function(){
		$('.dropdown').hide();
		$('#back').hide();
		$('#container').fadeIn('slow');
		$.scrollTo('0px', 1500, {axis:'x', easing:'easeInOutExpo'});
		//$('#container').animate({width: '960px'}, 'fast');
	});
	
	$('.liquidservices').click(function(){
		$.scrollTo(5695, 1500, {axis:'x', easing:'easeInOutExpo'}); 
	});
	
	$('.two').click(function(){
		$('#back').hide();
		$('#container').fadeOut('slow');
		$.scrollTo(3195, 1500, {axis:'x', easing:'easeInOutExpo'}); 
	});
	
	$('.three').click(function(){
		$('#back').hide();
		$('#container').fadeOut('slow');
		$.scrollTo(5695, 1500, {axis:'x', easing:'easeInOutExpo'}); 
	});

	
	$('.four').click(function(){
		$('#back').hide();
		$('#container').fadeOut('slow');
		$.scrollTo(8195, 1500, {axis:'x', easing:'easeInOutExpo'}); 
	});
	
	$('.five').click(function(){
		$('#back').hide();
		$('#container').fadeOut('slow');
		$.scrollTo(10695, 1500, {axis:'x', easing:'easeInOutExpo'}); 
	});
	
	$('.six').click(function(){
		$('#back').hide();
		$('#container').fadeOut('slow');
		$.scrollTo(13195, 1500, {axis:'x', easing:'easeInOutExpo'}); 
	});
		
		$('.seven').click(function(){
		$('#back').hide();
		$('#container').fadeOut('slow');
		$.scrollTo(15695, 1500, {axis:'x', easing:'easeInOutExpo'}); 
	});

});

//END ScrollTo

//Hover Fade

$('li a, p a').hoverFadeColor();

$(document).ready(function(){

	$("#container img").hover(function(){
		$(this).fadeTo("", 0.6); // This should set the opacity to 100% on hover
	},function(){
   		$(this).fadeTo("", 1.0); // This should set the opacity back to 60% on mouseout
	
	});
});

//END Hover Fade

//qTip

// Create the tooltips only on document load
/*$(document).ready(function() 
{
   // Match all link elements with href attributes within the content div
   $('#liquid a[href]').qtip(
   {
      content: 'Please contact norm@normli.ca for a demo.', // Give it some content, in this case a simple string
	  style: 'dark',
	     position: {
      corner: {
         target: 'topRight',
         tooltip: 'bottomLeft'
      }
   }
   });
});*/

//qTip

//Remove img title

$(function(){
    $("#container a").hover(function(){
        $(this).stop().attr('title', '');},
        function(){$(this).stop().attr();
        });
});