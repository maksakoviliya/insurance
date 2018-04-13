document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
	}, 1000);
}

$(document).ready(function(){
  $('#slider').slick({
  	prevArrow: '<button type="button" class="slick-prev flaticon-scroll-arrow-to-left">Previous</button>',
  	nextArrow: '<button type="button" class="slick-next flaticon-scroll-arrow-to-right">Next</button>',
  });

  var pmdVerSliderTooltipBottom = document.getElementById('pmd-range-tooltip-bottom');
	noUiSlider.create(pmdVerSliderTooltipBottom, {
		start: [ 30 ],
		connect: 'lower',
		tooltips: [wNumb({ decimals: 0 }) ],
		range: {
			'min': [  10000 ],
			'max': [ 110000 ]
		}
	});

});