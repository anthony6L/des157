var table = [
  "Hydrogen", "studio3.html",
  "Helium", "studio3.html",
  "Lithium", "studio3.html",
  "Beryllium", "studio3.html",
  "Boron","studio3.html",
  "Carbon","studio3.html",
  "Nitrogen","studio3.html",
  "Oxygen","studio3.html",
  "Fluorine","studio3.html",
  "Neon","studio3.html",
  "Sodium","studio3.html",
  "Magnesium","studio3.html",
  "Aluminium","studio3.html",
  "Silicon","studio3.html",
  "Phosphorus","studio3.html",
  "Sulfur","studio3.html",
  "Chlorine","studio3.html",
  "Argon","studio3.html",
  "Potassium","studio3.html",
  "Calcium","studio3.html",
  "Scandium","studio3.html",
  "Titanium","studio3.html",
  "Vanadium","studio3.html",
  "Chromium","studio3.html",
  "Manganese","studio3.html"
];

var table2 = [
  "Iron","studio3.html",
  "Cobalt","studio3.html",
  "Nickel","studio3.html",
  "Copper","studio3.html",
  "Zinc","studio3.html",
  "Gallium","studio3.html",
  "Germanium","studio3.html",
  "Arsenic","studio3.html",
  "Selenium","studio3.html",
  "Bromine","studio3.html",
  "Krypton","studio3.html",
  "Rubidium","studio3.html",
  "Strontium","studio3.html",
  "Yttrium","studio3.html",
  "Zirconium","studio3.html",
  "Niobium","studio3.html",
  "Molybdenum","studio3.html",
  "Technetium","studio3.html",
  "Ruthenium","studio3.html",
  "Rhodium","studio3.html",
  "Palladium","studio3.html",
  "Silver","studio3.html",
  "Cadmium","studio3.html",
  "Indium","studio3.html",
  "Tin","studio3.html",
  "Antimony","studio3.html",
  "Tellurium","studio3.html",
  "Iodine","studio3.html",
  "Xenon","studio3.html",
  "Caesium","studio3.html",
  "Barium","studio3.html",
  "Lanthanum","studio3.html",
  "Cerium","studio3.html"
  ];

var camera, scene, renderer;
var controls;

var objects = [];
var detailObj = [];
var resourceObj = [];
var targets = {
  sphere: [],
  helix: [],
  grid: []
};

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 3000;

  scene = new THREE.Scene();

  // construct labels

  for (var i = 0; i < table.length; i+=2) {

    var element = document.createElement('div');
    element.className = 'element';
    var hue = randomColor({
      luminosity: 'bright',
      hue: 'red',
      format: 'rgba',
      alpha: (Math.random() * 0.5 + 0.25)
    });
    element.style.backgroundColor = hue;


    var symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.innerHTML = "<a href=" + table[i+1]+">" + table[i] +"</a>";
    
    element.appendChild(symbol);

    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add(object);

    objects.push(object);

  }

  for (var i = 0; i < table2.length; i+=2) {

    var element = document.createElement('div');
    element.className = 'element';
    var hue = randomColor({
      luminosity: 'bright',
      hue: 'blue',
      format: 'rgba',
      alpha: (Math.random() * 0.5 + 0.25)
    });
    element.style.backgroundColor = hue;


    var symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.innerHTML = "<a href=" + table[i+1]+">" + table[i] +"</a>";
    
    element.appendChild(symbol);

    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add(object);

    objects.push(object);

  }

  // sphere

  var vector = new THREE.Vector3();
  var spherical = new THREE.Spherical();

  for (var i = 0, l = objects.length; i < l; i++) {

    var phi = Math.acos(-1 + (2 * i) / l);
    var theta = Math.sqrt(l * Math.PI) * phi;

    var object = new THREE.Object3D();

    spherical.set(900, phi, theta);

    object.position.setFromSpherical(spherical);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.sphere.push(object);

  }

  // helix

  var vector = new THREE.Vector3();

  for (var i = 0, l = objects.length; i < l; i++) {

    var object = new THREE.Object3D();

    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;

    vector.x = object.position.x;
    vector.y = object.position.y;
    vector.z = object.position.z;

    object.lookAt(vector);

    targets.helix.push(object);

  }
  var message = document.createElement('div');
  message.id = 'message';
  message.style.backgroundColor = 'rgba(255,255,255,0.25)';
  message.textContent = "this is studio3";

  var mesObject = new THREE.CSS3DObject(message);

//grid
  for (var i = 0; i < resourceObj.length; i++) {

    var object = new THREE.Object3D();

    object.position.x = ((i % 5) * 400) - 800;
    object.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

    targets.grid.push(object);

  }

  //

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = 'absolute';
  document.getElementById('container').appendChild(renderer.domElement);

  //

  controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.rotateSpeed = 0.65;
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener('change', render);

  var button = document.getElementById('sphere');
  button.addEventListener('click', function(event) {

    for (var i = 0; i < objects.length; i++) {
      scene.add(objects[i]);
    }
    transform(targets.sphere, 2000, objects);
    scene.remove(mesObject);
    for (var i = 0; i < resourceObj.length; i++) {
      scene.remove(resourceObj[i]);
    }

  }, false);

  var button = document.getElementById('helix');
  button.addEventListener('click', function(event) {

    for (var i = 0; i < objects.length; i++) {
      scene.add(objects[i]);
    }
    transform(targets.helix, 2000, objects);
    mesObject.position.z = 1000;
    scene.add(mesObject);
    for (var i = 0; i < resourceObj.length; i++) {
      scene.remove(resourceObj[i]);
    }

  }, false);

  var button = document.getElementById('grid');
  button.addEventListener('click', function(event) {
    for (var i = 0; i < resourceObj.length; i++) {
      scene.add(resourceObj[i]);
    }
    scene.remove(mesObject);
    for (var i = 0; i < objects.length; i++) {
      scene.remove(objects[i]);
    }

    transform(targets.grid, 2000, resourceObj);

  }, false);


  transform(targets.sphere, 2000, objects);


  //

  window.addEventListener('resize', onWindowResize, false);

}

function transform(targets, duration, obj) {

  TWEEN.removeAll();

  for (var i = 0; i < obj.length; i++) {

    var object = objects[i];
    var target = targets[i];

    new TWEEN.Tween(object.position)
      .to({
        x: target.position.x,
        y: target.position.y,
        z: target.position.z
      }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to({
        x: target.rotation.x,
        y: target.rotation.y,
        z: target.rotation.z
      }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

  }

  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();

}

function animate() {

  requestAnimationFrame(animate);

  TWEEN.update();

  controls.update();

}

function render() {

  renderer.render(scene, camera);

}