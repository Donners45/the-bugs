// main module 
function bugs(){


	var start = function(){
		var bug1 = 0;
		var bug2 = 0;
		var terminate = false;
		do{
			
			if (Math.floor((Math.random() * 10) % 2) === 0) {bug1++;}
			if (Math.floor((Math.random() * 10) % 2) === 0) {bug2++;}
			
			if(bug1 === 10 | bug2 === 10) {terminate = true;}

		}while(terminate === false);
		console.log(bug1, bug2);
	};
	
	
	return {
		Start: start
	};
}