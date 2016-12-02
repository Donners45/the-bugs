$(document).ready(function(){
	appStartHandlers(
		$('#fullpage')
	);
});


function appStartHandlers($fullPageWrapper){

	var app = bugs();
	
	$fullPageWrapper.fullpage({
		//onLeave: function(index, nextIndex, direction){console.log(index, nextIndex, direction);},
		afterLoad: function(anchorLink, index){
				if (index === 2){
					app.Start();
				}
			}
	});

}