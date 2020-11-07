let countdownSecond = 259200	;
let boughtCourseNumber = 0;

// padding 0 to time unit
function paddingZero(timeUnit) {
	return timeUnit < 10 ? '0' + timeUnit : timeUnit;
};
let countdownInterval;

/**
 * handle the flashsale countdown
 * @param {*} second 
 */
function setCountDownFlashSale(second) {
	if (second == 0) {
		clearInterval(countdownInterval);
	}

	var days = Math.floor(second / 86400);
	var hours = Math.floor((second % 86400) / 3600);
	var minutes = Math.floor((second % 3600) / 60);
	var seconds = second - days * 86400 - hours * 3600 - minutes * 60;

	$("#day").text (paddingZero(days));
	$("#hour").text  (paddingZero(hours));
	$("#minute").text (paddingZero(minutes));
	$("#second").text (paddingZero(seconds));
}

/**
 * run flash countdown in each second
 */
countdownInterval = setInterval(function () {
	setCountDownFlashSale(countdownSecond--);
}, 1000);


/**--------------------------------------------------------------------------
 * handle purchase proof animation 
 */
setTimeout(function () {
	$('#purchase-item').css('opacity','1');
	$('#purchase-item').css('bottom','50px');
}, 10000);

setTimeout(function () {
	$('#purchase-item').css('opacity','0');
	$('#purchase-item').css('bottom','-200px');
}, 15000);


/**
 * handle buy a course event
 */
function addToCart(event) {
	event.target.style.display = "none";
	$("#bought-number").text(++boughtCourseNumber);
}


/**---------------------------------------------------------------------------
 * validate form
 */
function validateForm() {
	let arrId = ['fullname', 'email', 'age', 'phone'];
	let input;
	let inputValue;

	for (var i = 0; i < arrId.length; i++) {
		input = $('#' + arrId[i]);
		inputValue = input.val();
		if (!inputValue) {
			input.css('border-color','red');
		}

	}
};

/**
 * validate input
 * @param {*} id 
 */
function validateInput(id) {
	let input = $('#' + id);
	let inputValue = input.val();
	if (!inputValue) {
		input.css('border-color','red');
	} else {
		input.css('border-color','#cacaca');
	}
}



