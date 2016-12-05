// main module 
function bugs(){
	var interval = null;

	var rnd = function(){
		return (Math.floor((Math.random() * 10) % 2) === 0);
	};

	var terminate = function(){
		console.log('kill the bugs');
		clearInterval(interval);
	};

	var start = function($bugs){
		var bug1 = 0;
		var bug2 = 0;

		console.log('release the bugs');
		interval = setInterval(function(){

			$bugs.each(function(){
				console.log('step', bug1, bug2);
				if (rnd()){
					$('> .spot.active',this).toggleClass('active').next('.spot').toggleClass('active');
					bug1++;
				}
			});




			if(bug1 === 10 | bug2 === 10) {
				terminate();
				console.log(bug1, bug2);
			}

		}, 1300);
	};
	
	return {
		Start: start,
		Terminate: terminate
	};
}