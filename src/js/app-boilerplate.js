$(document).ready(function(){
	appStartHandlers(
		$('#fullpage')
	);
});


function appStartHandlers($fullPageWrapper){

	$fullPageWrapper.fullpage({
		onLeave: function(index, nextIndex, direction){console.log(index, nextIndex, direction);},
		afterLoad: function(anchorLink, index){console.log(anchorLink, index);},
	});

}