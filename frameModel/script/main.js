requirejs.config({
	baseUrl: 'script/library',
	paths: {
		function: '../function'
	}
});

requirejs(['jquery', 'function/fullpageSet', 'function/basic', 'function/imgsrcGen'],
	function ($, fullPage, basic, imgsrcGen) {
		'use strict';

		basic.canvas.width = basic.cWidth;
		basic.canvas.height = basic.cHeight;
		$('body').bind("touchmove", function (e) {
			e.preventDefault();
			return false;
		});
	});