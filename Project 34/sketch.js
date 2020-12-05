const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint

var engine, world, mouse;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;
	mouse = Matter.Mouse;
	pendulum1 = new Pendulum(150, 250, "white");
	pendulum2 = new Pendulum(250, 250, "white");
	pendulum3 = new Pendulum(350, 250, "white");
	pendulum4 = new Pendulum(450, 250, "white");
	pendulum5 = new Pendulum(550, 250, "white");

	rope1 = new Sling(pendulum1.body, {x: 170, y: 100})
    rope2 = new Sling(pendulum2.body, {x: 240, y: 100})
    rope3 = new Sling(pendulum3.body, {x: 310, y: 100})
    rope4 = new Sling(pendulum4.body, {x: 380, y: 100})
    rope5 = new Sling(pendulum5.body, {x: 450, y: 100})

	roof = new Roof(0,95,10000,10);

	let canvasmouse = mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);
}

function draw() {
	background("black") 
    Engine.update(engine);

	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof.display();
}

function mouseDragged() {
	Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}