define(['jquery', 'function/basic', 'function/imgPreload'], function ($, basic, imgPreload) {
	'use strict';
	return function (width, height, sourceType, pageIndex) {
		$.each(sourceType, function (index, element) {
			imgPreload(this, pageIndex, function () {
				basic.svgBox.style.display = 'none';
				basic.canvas.style.visibility = 'visible';
				basic.loadedSection.find('.show-effect').css('background-image', 'url(image/page' + pageIndex + '/motion_0001.jpg)');
				basic.intervalName = setInterval(function () {
					basic.ctx.clearRect(0, 0, width, height);
					basic.ctx.drawImage(basic.imageObjects[pageIndex - 1][basic.countInterval], 0, 0, width, height);
					basic.countInterval = (basic.countInterval < 29) ? (basic.countInterval += 1) : 0;
				}, 100 / 3);
			});
		});
	};
});