<!DOCTYPE html>
<html>
<head>
	<title>EaselJS demo: Dragging</title>
	<link href="../_shared/demo.css" rel="stylesheet" type="text/css">
	<script src="http://code.createjs.com/easeljs-0.8.1.min.js"></script>
	<script>
		var stage, output;
		var flag = 0;

		function init() {
			stage = new createjs.Stage("demoCanvas");

			stage.mouseMoveOutside = false;

			// to draw an array...

			var g = new createjs.Graphics();
			g.beginStroke(createjs.Graphics.getRGB(0,0,0));

			g.drawRect(100,100,70,70);

			var square1 = new createjs.Shape();
			square1.graphics.beginFill("#999999").drawRect(0, 0, 70, 70);
			square1.name = "square1";			square1.x = 100;			square1.y = 100;

			g.drawRect(175,100,70,70);

			var square2 = new createjs.Shape();
			square2.graphics.beginFill("#999999").drawRect(0, 0, 70, 70);
			square2.name = "square2";			square2.x = 175;			square2.y = 100;

			g.drawRect(250,100,70,70);

			var square3 = new createjs.Shape();
			square3.graphics.beginFill("#999999").drawRect(0, 0, 70, 70);
			square3.name = "square1";			square3.x = 250;			square3.y = 100;

			g.drawRect(325,100,70,70);

			var square4 = new createjs.Shape();
			square4.graphics.beginFill("#999999").drawRect(0, 0, 70, 70);
			square4.name = "square4";			square4.x = 325;			square4.y = 100;

			g.drawRect(400,100,70,70);

			var square5 = new createjs.Shape();
			square5.graphics.beginFill("#999999").drawRect(0, 0, 70, 70);
			square5.name = "square5";			square5.x = 400;			square5.y = 100;

      stage.addChild(square1, square2, square3, square4, square5);

      // border of the canvas

			var rect1 = new createjs.Shape(g);
			rect1.graphics.beginStroke("#000")
     		.setStrokeStyle(1)
     		.drawRect(0, 0, 500, 300);

			stage.addChild(rect1);
			stage.addChild(square1, square2, square3, square4, square5);
			stage.update();


			// to draw a circle for the top
/*
			var top = new createjs.Shape();
			top.graphics.beginFill("#000000").drawCircle(-50, -50, 20);

			var lbl_top = new createjs.Text("Top", "bold 14px Arial", "#FFFFFF");
			lbl_top.textAlign = "center";
			lbl_top.y = -57;
			lbl_top.x = -50;
*/
			// to draw a circle for an elements

			var element1 = new createjs.Shape();
			element1.graphics.beginFill("red").drawCircle(30, -50, 20);
			element1.x = 0;
			element1.y = 0;

			var lbl_e1 = new createjs.Text("5", "bold 14px Arial", "#000000");
			lbl_e1.textAlign = "center";
			lbl_e1.y = -57;
			lbl_e1.x = 30;

			var element2 = new createjs.Shape();
			element2.graphics.beginFill("red").drawCircle(80, -50, 20);
			element2.x = 0;
			element2.y = 0;

			var lbl_e2 = new createjs.Text("10", "bold 14px Arial", "#000000");
			lbl_e2.textAlign = "center";
			lbl_e2.y = -57;
			lbl_e2.x = 80;


			var element3 = new createjs.Shape();
			element3.graphics.beginFill("red").drawCircle(130, -50, 20);
			element3.x = 0;
			element3.y = 0;

			var lbl_e3 = new createjs.Text("2", "bold 14px Arial", "#000000");
			lbl_e3.textAlign = "center";
			lbl_e3.y = -57;
			lbl_e3.x = 130;


			var element4 = new createjs.Shape();
			element4.graphics.beginFill("red").drawCircle(180, -50, 20);
			element4.x = 0;
			element4.y = 0;

			var lbl_e4 = new createjs.Text("13", "bold 14px Arial", "#000000");
			lbl_e4.textAlign = "center";
			lbl_e4.y = -57;
			lbl_e4.x = 180;

			var element5 = new createjs.Shape();
			element5.graphics.beginFill("red").drawCircle(230, -50, 20);
			element5.x = 0;
			element5.y = 0;

			var lbl_e5 = new createjs.Text("8", "bold 14px Arial", "#000000");
			lbl_e5.textAlign = "center";
			lbl_e5.y = -57;
			lbl_e5.x = 230;

			stage.update();

			// code to drag the object

			var dragger = new createjs.Container();
			dragger.x = dragger.y = 100;
			dragger.addChild(top, lbl_top);
			stage.addChild(dragger);

			stage.update();


			var dragger = new createjs.Container();
			dragger.x = dragger.y = 100;
			dragger.addChild(element1, lbl_e1);
			stage.addChild(dragger);

			stage.update();

			square1.on("click", function(evt){
				//console.log("current(" + element1.x + " , " + element1.y + ")");
				//element1.x = 0;
				//element1.y = 80;
				lbl_e1.x = square1.x - 70;
				lbl_e1.y = square1.y - 70;
				//console.log("Circle(" + element1.x + " , " + element1.y + ")");
				//console.log("label(" + lbl_e1.x + " , " + lbl_e1.y + ")");
				stage.update();

			});

			square2.on("click", function(evt){
				lbl_e2.x = square2.x - 70;
				lbl_e2.y = square2.y - 70;
				stage.update();
			});

			stage.update();

			var dragger = new createjs.Container();
			dragger.x = dragger.y = 100;
			dragger.addChild(element2, lbl_e2);
			stage.addChild(dragger);

			stage.update();


			var dragger = new createjs.Container();
			dragger.x = dragger.y = 100;
			dragger.addChild(element3, lbl_e3);
			stage.addChild(dragger);

			stage.update();


			var dragger = new createjs.Container();
			dragger.x = dragger.y = 100;
			dragger.addChild(element4, lbl_e4);
			stage.addChild(dragger);

			stage.update();


			var dragger = new createjs.Container();
			dragger.x = dragger.y = 100;
			dragger.addChild(element5, lbl_e5);
			stage.addChild(dragger);

			stage.update();

			// next button

			var background = new createjs.Shape();
			background.name = "background";
			background.graphics.beginFill("black").drawRoundRect(10, 200, 70, 50, 5);

			var label = new createjs.Text("Next", "bold 16px Arial", "#FFFFFF");
			label.name = "label";
			label.textAlign = "center";
			label.textBaseline = "middle";
			label.x = 45;
			label.y = 225;

			var button = new createjs.Container();
			button.name = "button";
			button.x = 20;
			button.y = 20;
			button.addChild(background, label);

			stage.addChild(button);



			stage.update();

		}

	</script>
</head>
<body onload="init();">
	<canvas id="demoCanvas" width="500" height="300">
		alternate content
	</canvas>
</body>
</html>
