let countdownSecond = 6912;
let boughtCourseNumber = 0;

// padding 0 to time unit
function paddingZero(timeUnit) {
	return timeUnit < 10 ? '0' + timeUnit : timeUnit;
};
let countdownInterval;

// handle the flashsale countdown
function setCountDownFlashSale(second) {
	if (second == 0) {
		clearInterval(countdownInterval);
	}

	// var day = Math.floor(second/86400);
	var hours = Math.floor(second/3600);
	var minutes = Math.floor(second% 3600/60);
	var seconds = second  - hour*3600 - minute*60;

	// document.getElementById('day').innerHTML = paddingZero(day);
	document.getElementById('hour').innerHTML = paddingZero(hours);
	document.getElementById('minute').innerHTML = paddingZero(minutes);
	document.getElementById('second').innerHTML = paddingZero(seconds);
}

// run flash countdown in each second
countdownInterval = setInterval(function () {
	setCountDownFlashSale(countdownSecond--);
}, 1000);
	

// handle purchase proof animation
setTimeOut(function () {
	document.getElementById('purchase-item').style.opacity = "1";
	document.getElementById('purchase-item').style.bottom = "50px"
}, 10000);

setTimeOut(function () {
	document.getElementById('purchase-item').style.opacity = "0";
	document.getElementById('purchase-item').style.bottom = "-200px";
	// body...
}, 15000);

// handle buy a course event
function addToCart(event) {
	event.target.style.display = "none";
	document.getElementById('bough-number').innerHTML = ++boughtCourseNumber;
};
//validate form
function validateForm() {
	let arrId = ['fullname','email','age','phone'];
	let input;
	let inputValue;
	
	for (var i = 0; i < arrId.length; i++) {
		input = document.getElementById(arrId[i]);
		inputValue = input.value;
		if (!inputValue) {
			input.style.borderColor = 'red';
		}
		
	}
};

//validate input
function validateInput(id) {
	let input = document.getElementById('id');
	let inputValue = input.value;
	if (!inputValue) {
		input.style.borderColor = 'red';
	} else {
		input.style.borderColor = '#cacaca'
	}
}