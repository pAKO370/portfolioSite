(function(){
var $section = $('.section-left');
var $form = $('#form')
	if($(window).height() > 1100){
			$($section).css({'left': '0'});
		}
	 var $scrollDistance = $section.offset().top - $(window).height() + 350;
		
	$(window).scroll(function(event){
		if($(window).scrollTop() >= $scrollDistance) {
			animateLeft($section, 0);
			animateLeft($form, 0);
		}
		else{
			animateLeft($section, -600 + 'px');
			animateLeft($form, 900 + "px");
		}
	})
	
	function animateLeft(variable,offset){
		$(variable).css({'left': offset})
	};

})($);