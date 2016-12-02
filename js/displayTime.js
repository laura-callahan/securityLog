function displayTime(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	m = checkMinutes(m);
	if (h < 12){
		$('.time').html(h + ":" + m+"AM");
	}
	else if(h == 24){
		//convert to 12hr clock midnight
		h = h-12;
		$('.time').html(h + ":" + m+"AM");
	}
	else{
		//convert to 12hr clock
		h = h-12;
		$('.time').html(h + ":" + m+"PM");
	}
	
}

function checkMinutes(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of minutes < 10
    return i;
}