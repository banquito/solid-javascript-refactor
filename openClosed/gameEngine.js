function GameEngine() {

	var canvas;
	var context;
	var backBuffer;
	var self = this;
	var gameObjects;

	this.init = function (canvasName, aGameObjects) {
		canvas = document.getElementById(canvasName);
		context = canvas.getContext("2d");
		
		backBufferCanvas = document.createElement('canvas');
		backBufferCanvas.width = canvas.width;
		backBufferCanvas.height = canvas.height;
		backBuffer = backBufferCanvas.getContext('2d');
		
		gameObjects = aGameObjects;
		for (i = 0; i < gameObjects.length; i++) {
			if (gameObjects[i].init) {
				gameObjects[i].init(canvas);
			}
		}
		
		setInterval(runGame, 1000 / 30);
	}

	function runGame() {
		var thisFrame = new Date().getTime();
		var delta = (thisFrame - this.lastFrame) / 1000;
		if (!delta) delta = 0;
		this.lastFrame = thisFrame;
		
		backBuffer.fillStyle = "rgb(255,255,255)";
		backBuffer.fillRect(0, 0, canvas.width, canvas.height);
		
		for (var i = 0; i < gameObjects.length; i++) {
			gameObjects[i].update(delta);
			if (gameObjects[i].draw) {
				gameObjects[i].draw(backBuffer);
			}
		}
		
		//Loop finished, draw everything
		context.drawImage(backBufferCanvas, 0, 0);
	};

}