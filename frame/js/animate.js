(function ($) {
	'use strict';
	var body = $('body'),
		canvas = document.getElementById('canvas'),
		svgBox = document.getElementById('svg-box'),
		ctx = canvas.getContext('2d'),
		srcArrGen = [],
		imageObjects = [[], [], []],
		constLength = 30,
		imageLoaded = 0,
		countInterval = 0,
		intervalName,
		cWidth = canvas.offsetWidth,
		cHeight = canvas.offsetHeight,
		loadedSection = $('.section').first();

	canvas.width = cWidth;
	canvas.height = cHeight;

	function imgsrcGen(page, num) {
		var i,
			src,
			srcArr = [];
		for (i = 1; i <= num; i += 1) {
			src = (i < 10) ? ('image/' + page + '/motion_000' + i + '.jpg') : ('image/' + page + '/motion_00' + i + '.jpg');
			srcArr.push(src);
		}
		return srcArr;
	}

	function preLoadImages(imgSrc, page, callback) {
		var imageTotal = constLength,
			imageTemp;

		if (typeof (imgSrc) === 'string') {
			imageTemp = new Image();
			imageTemp.src = imgSrc;
			imageObjects[page - 1].push(imageTemp);

			imageTemp.onload = function () {
				imageLoaded += 1;
				if (imageLoaded === imageTotal) {
					callback();
				}
			};
		} else {
			imageLoaded += 1;
			if (imageLoaded === imageTotal) {
				callback();
			}
		}
	}

	function canvasDraw(width, height, sourceType, pageIndex) {
		$.each(sourceType, function (index, element) {
			preLoadImages(this, pageIndex, function () {
				svgBox.style.display = 'none';
				canvas.style.visibility = 'visible';
				loadedSection.find('.show-effect').css('background-image', 'url(image/page' + pageIndex + '/motion_0001.jpg)');
				intervalName = setInterval(function () {
					ctx.clearRect(0, 0, width, height);
					ctx.drawImage(imageObjects[pageIndex - 1][countInterval], 0, 0, width, height);
					countInterval = (countInterval < 29) ? (countInterval += 1) : 0;
				}, 100 / 3);
			});
		});
	}

	function canvasReset() {
		imageLoaded = 0;
		if (intervalName) {
			clearInterval(intervalName);
		}
		ctx.clearRect(0, 0, cWidth, cHeight);
	}

	$("body").bind("touchmove", function (e) {
		e.preventDefault();
		return false;
	});

	$('#fullpage .section').each(function (index, element) {
		srcArrGen[index] = imgsrcGen('page' + (index + 1), 30);
	});

	$('#fullpage').fullpage({
		afterLoad: function (anchorLink, index) {
			var sType;
			loadedSection = $(this);
			svgBox.style.display = 'block';
			sType = (loadedSection.data('loaded') !== 'once') ? srcArrGen[index - 1] : imageObjects[index - 1];
			canvasDraw(cWidth, cHeight, sType, index);
		},
		onLeave: function (index, nextIndex, direction) {
			$(this).data('loaded', 'once');
			canvas.style.visibility = 'hidden';
			canvasReset();
		}
	});
}(window.jQuery));