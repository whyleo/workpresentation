define(['function/basic'], function (basic) {
	'use strict';
	return function (imgSrc, page, callback) {
		var imageTotal = basic.constLength,
			imageTemp;

		if (typeof (imgSrc) === 'string') {
			imageTemp = new Image();
			imageTemp.src = imgSrc;
			basic.imageObjects[page - 1].push(imageTemp);

			imageTemp.onload = function () {
				basic.imageLoaded += 1;
				if (basic.imageLoaded === imageTotal) {
					callback();
				}
			};
		} else {
			basic.imageLoaded += 1;
			if (basic.imageLoaded === imageTotal) {
				callback();
			}
		}
	};
});