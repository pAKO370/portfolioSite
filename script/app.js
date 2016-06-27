(function(){
var $section = $('.section-left');
var $form = $('#form')
	if($(window).height() > 1100){
			$($section).css({'left': '0'});
		}
	var $scrollDistance = $section.offset().top - $(window).height() + 350;
	//array holding icon classes to animate
	var icon = ['.hidden-nav','.hidden-nav .ion-email','.hidden-nav .ion-social-facebook','.hidden-nav .ion-social-github','.hidden-nav .ion-social-linkedin'];	
	//funtion to refactor code
	function moveMargin(icon,prop,num){
		$(icon).css(prop,num);
	};

	$(window).scroll(function(event){
		
		if($(window).scrollTop() >= '80'){
			//loop through the array and run the function
			for(var i = 0;i < icon.length; i++){
				moveMargin(icon[i],'margin-top',0);
			}
			/*------Old code that was refactored. keeping for future reference-----*/
			/*$('.hidden-nav').css('margin-top', '0');
			$('.hidden-nav .ion-email').css('margin-top', '0');
			$('.hidden-nav .ion-social-facebook').css('margin-top', '0');
			$('.hidden-nav .ion-social-github').css('margin-top', '0');
			$('.hidden-nav .ion-social-linkedin').css('margin-top', '0');*/
		}else{
			
			for(var i = 0;i < icon.length; i++){
				moveMargin(icon[i],'margin-top', '-100' + 'px');
			}
			/*----Old code that was refactored. keeping for future reference----*/
			/*$('.hidden-nav').css('margin-top', '-100' + 'px');
			$('.hidden-nav .ion-email').css('margin-top', '-100' + 'px');
			$('.hidden-nav .ion-social-facebook').css('margin-top', '-100' + 'px');
			$('.hidden-nav .ion-social-github').css('margin-top', '-100' + 'px');
			$('.hidden-nav .ion-social-linkedin').css('margin-top', '-100' + 'px');*/
			
		}
		
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