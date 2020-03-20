;
"use strict";

function DOMready() {


	$('.select').on('change', function(event) {
		var currentItem = ($(this).val()-1);
		$('.art-slider-list').hide();
		$('.art-slider-list').eq(currentItem).show();
		$('.art-slider-list').slick('unslick');
		$('.art-slider-list').slick({
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidersToScroll: 1,
		}); 

	});

	$('.art-slider-list').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidersToScroll: 1,
	});

}

document.addEventListener("DOMContentLoaded", DOMready);