(function (QUnit) {

	QUnit.module("canvg Methods");

	QUnit.test('screenShooter.canvg should be a valid method', function (assert) {
		assert.equal(typeof screenShooter.canvg, 'function', 'screenShooter.canvg should be a valid method');
	});

	QUnit.test('screenShooter.svgAImg should be a valid method', function (assert) {
		assert.equal(typeof screenShooter.svgAImg, 'function', 'screenShooter.svgAImg should be a valid method');
	});

	QUnit.test('screenShooter.svgAImg convert an SVG into an image with the right src', function (assert) {

		var done = assert.async();
		var expected =
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVQYGQGaAWX+AcAAP//AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AwQAAgAB//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//fwCA/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb8AQP/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAwADC3hv5w0/JwQAAAABJRU5ErkJggg==';
		var the_image = screenShooter.svgAImg(jQuery('#svg_container1'), function (the_image) {
			assert.equal(the_image.src, expected, 'generated image src attribute matches expected dataURL');
			done();
		});

	});

	QUnit.test('screenShooter.svgACanvas should be a valid method', function (assert) {
		assert.equal(typeof screenShooter.svgACanvas, 'function', 'screenShooter.svgACanvas should be a valid method');
	});

	QUnit.test('screenShooter.svgACanvas should generate a canvas with the right contents', function (assert) {

		var done = assert.async();
		var expected =
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVQY0+WQsREAIAjEgovBZriZONm7Adqbu3SpYoWrCDqcDZMUqDWZGjzyZ2iLuA4PigPC3hv5j7Q5JgAAAABJRU5ErkJggg==';
		screenShooter.svgACanvas(jQuery('#svg_container2'), function (the_canvas) {
			assert.equal(the_canvas.toDataURL("image/png", 0), expected, 'generated canvas has the right contents');

			done();
		});

	});

})(QUnit);
