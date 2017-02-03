var increase = 0;

var rotate = function(){
	increase += 6;
	document.getElementById("second").style.transform = "rotate(" + increase + "deg)";

}
var secondHand = setInterval(rotate, 1000);

var increase2 = 0;

var rotate2 = function(){
	increase2 += 6
	document.getElementById("minute").style.transform = "rotate(" + increase2 + "deg)";
}
var minuteHand = setInterval(rotate2, 60000);

var increase3 = 0;

var rotate3 = function(){
	increase3 += 30
	document.getElementById("hour").style.transform = "rotate(" + increase3 + "deg)";
}
var hourHand = setInterval(rotate3, 360000);













