define(['jquery', 'function/basic'], function ($, basic) {
	'use strict';
	$('#fullpage .section').each(function (index, element) {
		var i,
			src,
			srcArr = [];
		for (i = 1; i <= basic.constLength; i += 1) {
			src = (i < 10) ? ('image/page' + (index + 1) + '/motion_000' + i + '.jpg') : ('image/page' + (index + 1) + '/motion_00' + i + '.jpg');
			srcArr.push(src);
		}
		basic.srcArrGen[index] = srcArr;
	});
});