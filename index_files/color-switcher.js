//Color Switcher

$(document).ready(function(e) {

	var toggle = $('.color-switcher .toggle');
	var colorTile = $('.color-switcher .color a');
	toggle.click(function(){
		$(this).parent().toggleClass('open');
	});
	var logo1 = $('img[src^="img/logo-light"]'),
			logo2 = $('img[src^="img/logo-dark"]'),
			logo3 = $('img[src^="img/logo-footer-light"]'),
			logo4 = $('img[src^="img/logo-footer-dark"]');
	var logo1Src = (logo1.length) ? logo1.attr('src').split('.png')[0] : '',
			logo2Src = (logo2.length) ? logo2.attr('src').split('.png')[0]: '',
			logo3Src = (logo3.length) ? logo3.attr('src').split('.png')[0] : '',
			logo4Src = (logo4.length) ? logo4.attr('src').split('.png')[0] : '';

	colorTile.click(function(e){
		colorTile.removeClass('current');
		$(this).addClass('current');
		var color = $(this).attr('data-color');
		$('head link.color-scheme').attr('href', 'css/colors/color-' + color + '.css');

		logo1.attr('src', logo1Src + '-' + color + '.png');
		logo2.attr('src', logo2Src + '-' + color + '.png');
		logo3.attr('src', logo3Src + '-' + color + '.png');
		logo4.attr('src', logo4Src + '-' + color + '.png');
		e.preventDefault();
	});

});
