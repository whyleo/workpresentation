define({
	canvas: document.getElementById('canvas'),
	ctx: this.canvas.getContext('2d'),
	cWidth: this.canvas.offsetWidth,
	cHeight: this.canvas.offsetHeight,
	svgBox: document.getElementById('svg-box'),
	srcArrGen: [],
	imageObjects: [[], [], []],
	constLength: 30,
	imageLoaded: 0,
	countInterval: 0,
	intervalName: null,
	loadedSection: document.getElementById('fullpage').firstChild
});