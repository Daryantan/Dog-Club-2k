$(document).ready(function(){
	/*Открыть модальное окно*/
	$('.imdiz-open').click(function(){
		$('.imdiz-overlay').css({'visibility': 'visible', 'opacity': 1});
		$('.imdiz-modal').css({'visibility': 'visible', 'opacity': 1});
	});
});

/*Закрыть модальное окно*/
$('.imdiz-close').click(function(){
	$('.imdiz-overlay').css({'visibility': 'hidden', 'opacity': 0});
	$('.imdiz-modal').css({'visibility': 'hidden', 'opacity': 0});
});

$('.toclose').click(function(){
	$('.imdiz-overlay').css({'visibility': 'hidden', 'opacity': 0});
	$('.imdiz-modal').css({'visibility': 'hidden', 'opacity': 0});
});

$(document).ready(function(){
	/*Открыть модальное окно*/
	$('.imdiz-open').click(function(){
		$('.imdiz-overlay').css({'visibility': 'visible', 'opacity': 1});
		$('.im-modal').css({'visibility': 'visible', 'opacity': 1});
	});
});

/*Закрыть модальное окно*/
$('.imdiz-close').click(function(){
	$('.imdiz-overlay').css({'visibility': 'hidden', 'opacity': 0});
	$('.im-modal').css({'visibility': 'hidden', 'opacity': 0});
});

$('.toclose').click(function(){
	$('.imdiz-overlay').css({'visibility': 'hidden', 'opacity': 0});
	$('.im-modal').css({'visibility': 'hidden', 'opacity': 0});
});



$(document).ready(function(){
	/*Открыть модальное окно*/
	$('.imden').click(function(){
		$('.imdilay').css({'visibility': 'visible', 'opacity': 1});
		$('.imdial').css({'visibility': 'visible', 'opacity': 1});
	});
});

/*Закрыть модальное окно*/
$('.imdiz-close').click(function(){
	$('.imdilay').css({'visibility': 'hidden', 'opacity': 0});
	$('.imdial').css({'visibility': 'hidden', 'opacity': 0});
});

$('.toclose').click(function(){
	$('.imdilay').css({'visibility': 'hidden', 'opacity': 0});
	$('.imdial').css({'visibility': 'hidden', 'opacity': 0});
});