// main module 
function bugs(){
	var interval = null;

	var cycleIsTrue = function(f){
		return (Math.floor((Math.random() * 10) % 2) === 0);
	};

	var terminate = function(){
		console.log('kill the bugs');
		clearInterval(interval);

	};

	var cycleNextSpot = function(bug){
		$('> .spot.active',bug)
			.toggleClass('active')
			.next('.spot')
			.toggleClass('active');
	};

	var start = function($bugs){
		var bug1 = 0;
		var bug2 = 0;

		console.log('release the bugs');

		$('.spot',$bugs).removeClass('active');
		$('.spot:first-child', $bugs).toggleClass('active');

		interval = setInterval(function(){
			// must allow each iteration a fair chance
			$bugs.each(function(){
				console.log('step');
				console.log($('.spot.active',this).data('space'));
				if ($('.spot.active', this).data('space') >= 9) {terminate();}
				if (cycleIsTrue()) {cycleNextSpot(this);}
			});
		}, 1300);
	};
	
	return {
		Start: start,
		Terminate: terminate
	};
}