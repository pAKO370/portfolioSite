(function(){
var $section = $('.section-left');
var $form = $('#form')
	if($(window).height() > 900){
			$($section).css({'left': '0'});
		}
	 var $scrollDistance = $section.offset().top - $(window).height() + 100;
		
	$(window).scroll(function(event){
		if($(window).scrollTop() >= $scrollDistance) {
			animateLeft($section, 0);
			animateLeft($form, 0);
		}
	})
	
	function animateLeft(variable,offset){
		$(variable).css({'left': offset})
	};

})($);