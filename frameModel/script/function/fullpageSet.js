define(['jquery', 'fullpage', 'function/basic', 'function/canvasDraw', 'function/canvasReset'], function ($, fullpage, basic, canvasDraw, canvasReset) {
	'use strict';
	$('#fullpage').fullpage({
		afterLoad: function (anchorLink, index) {
			var sType;
			basic.loadedSection = $(this);
			basic.svgBox.style.display = 'block';
			sType = (basic.loadedSection.data('loaded') !== 'once') ? basic.srcArrGen[index - 1] : basic.imageObjects[index - 1];
			canvasDraw(basic.cWidth, basic.cHeight, sType, index);
		},
		onLeave: function (index, nextIndex, direction) {
			$(this).data('loaded', 'once');
			basic.canvas.style.visibility = 'hidden';
			canvasReset();
		}
	});
});