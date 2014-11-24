(function(){
	'use strict';
	
	var images = $('.nm-icones .nm img');
	
	//animação ao passar o mouse por cima dos icones da página principal
	images.hover(function(){
		$(this).addClass('pulse');
	}, function(){
		$(this).removeClass('pulse');
	});
	
})();