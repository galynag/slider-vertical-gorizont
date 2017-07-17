

// скрипт для прогресса
var val = 0;
document.onmousemove = function (){
	val = val +0.05;
	document.getElementById('pr').value = val;
}

// скрипт для прокрутки

var sdvig = 0;

function f2(){
	if (sdvig == -500) {
		sdvig = 0;
	}
	else {
		sdvig = sdvig - 100;
	}
	var line;
	line = document.getElementById('line');
	line.style.marginTop = sdvig + 'px';
}

var sdvig1 = 0;

function f1(){
	if (sdvig1 < -200) {
		sdvig1 = 0;
	}
	else {
		sdvig1 = sdvig1 - 100;
	}
	var vertical;
    vertical = document.getElementById('vertical');
    vertical.style.marginLeft = sdvig1 + 'px';
}
