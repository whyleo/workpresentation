define(['function/basic'], function (basic) {
	'use strict';
	return function () {
		var ctx = basic.canvas.getContext('2d'),
			cWidth = basic.canvas.offsetWidth,
			cHeight = basic.canvas.offsetHeight;
		basic.imageLoaded = 0;
		if (basic.intervalName) {
			clearInterval(basic.intervalName);
		}
		ctx.clearRect(0, 0, cWidth, cHeight);
	};
});