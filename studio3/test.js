var table = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  "Sodium",
  "Magnesium",
  "Aluminium",
  "Silicon",
  "Phosphorus",
  "Sulfur",
  "Chlorine",
  "Argon",
  "Potassium",
  "Calcium",
  "Scandium",
  "Titanium",
  "Vanadium",
  "Chromium",
  "Manganese",
  "Iron",
  "Cobalt",
  "Nickel",
  "Copper",
  "Zinc",
  "Gallium",
  "Germanium",
  "Arsenic",
  "Selenium",
  "Bromine",
  "Krypton",
  "Rubidium",
  "Strontium",
  "Yttrium",
  "Zirconium",
  "Niobium",
  "Molybdenum",
  "Technetium",
  "Ruthenium",
  "Rhodium",
  "Palladium",
  "Silver",
  "Cadmium",
  "Indium",
  "Tin",
  "Antimony",
  "Tellurium",
  "Iodine",
  "Xenon",
  "Caesium",
  "Barium",
  "Lanthanum",
  "Cerium",
];

var table2 = [
  "Pr", "Praseodymium", "140.90765", 6, 9,
  "Nd", "Neodymium", "144.242", 7, 9,
  "Pm", "Promethium", "(145)", 8, 9,
  "Sm", "Samarium", "150.36", 9, 9,
  "Eu", "Europium", "151.964", 10, 9,
  "Gd", "Gadolinium", "157.25", 11, 9,
  "Tb", "Terbium", "158.92535", 12, 9,
  "Dy", "Dysprosium", "162.5", 13, 9,
  "Ho", "Holmium", "164.93032", 14, 9,
  "Er", "Erbium", "167.259", 15, 9,
  "Tm", "Thulium", "168.93421", 16, 9,
  "Yb", "Ytterbium", "173.054", 17, 9,
  "Lu", "Lutetium", "174.9668", 18, 9,
  "Hf", "Hafnium", "178.49", 4, 6,
  "Ta", "Tantalum", "180.94788", 5, 6,
  "W", "Tungsten", "183.84", 6, 6,
  "Re", "Rhenium", "186.207", 7, 6,
  "Os", "Osmium", "190.23", 8, 6,
  "Ir", "Iridium", "192.217", 9, 6,
  "Pt", "Platinum", "195.084", 10, 6,
  "Au", "Gold", "196.966569", 11, 6,
  "Hg", "Mercury", "200.59", 12, 6,
  "Tl", "Thallium", "204.3833", 13, 6,
  "Pb", "Lead", "207.2", 14, 6,
  "Bi", "Bismuth", "208.9804", 15, 6,
  "Po", "Polonium", "(209)", 16, 6,
  "At", "Astatine", "(210)", 17, 6,
  "Rn", "Radon", "(222)", 18, 6,
  "Fr", "Francium", "(223)", 1, 7,
  "Ra", "Radium", "(226)", 2, 7,
  "Ac", "Actinium", "(227)", 4, 10,
  "Th", "Thorium", "232.03806", 5, 10,
  "Pa", "Protactinium", "231.0588", 6, 10,
  "U", "Uranium", "238.02891", 7, 10,
  "Np", "Neptunium", "(237)", 8, 10,
  "Pu", "Plutonium", "(244)", 9, 10,
  "Am", "Americium", "(243)", 10, 10,
  "Cm", "Curium", "(247)", 11, 10,
  "Bk", "Berkelium", "(247)", 12, 10,
  "Cf", "Californium", "(251)", 13, 10,
  "Es", "Einstenium", "(252)", 14, 10,
  "Fm", "Fermium", "(257)", 15, 10,
  "Md", "Mendelevium", "(258)", 16, 10,
  "No", "Nobelium", "(259)", 17, 10,
  "Lr", "Lawrencium", "(262)", 18, 10,
  "Rf", "Rutherfordium", "(267)", 4, 7,
  "Db", "Dubnium", "(268)", 5, 7,
  "Sg", "Seaborgium", "(271)", 6, 7,
  "Bh", "Bohrium", "(272)", 7, 7,
  "Hs", "Hassium", "(270)", 8, 7,
  "Mt", "Meitnerium", "(276)", 9, 7,
  "Ds", "Darmstadium", "(281)", 10, 7,
  "Rg", "Roentgenium", "(280)", 11, 7,
  "Cn", "Copernicium", "(285)", 12, 7,
  "Nh", "Nihonium", "(286)", 13, 7,
  "Fl", "Flerovium", "(289)", 14, 7,
  "Mc", "Moscovium", "(290)", 15, 7,
  "Lv", "Livermorium", "(293)", 16, 7,
  "Ts", "Tennessine", "(294)", 17, 7,
  "Og", "Oganesson", "(294)", 18, 7
];

var table3 = [
  "Cf", "Californium", "(251)", 13, 10,
  "Es", "Einstenium", "(252)", 14, 10,
  "Fm", "Fermium", "(257)", 15, 10,
  "Md", "Mendelevium", "(258)", 16, 10,
  "No", "Nobelium", "(259)", 17, 10,
  "Lr", "Lawrencium", "(262)", 18, 10,
  "Rf", "Rutherfordium", "(267)", 4, 7,
  "Db", "Dubnium", "(268)", 5, 7,
  "Sg", "Seaborgium", "(271)", 6, 7,
  "Bh", "Bohrium", "(272)", 7, 7,
  "Hs", "Hassium", "(270)", 8, 7,
  "Mt", "Meitnerium", "(276)", 9, 7,
  "Ds", "Darmstadium", "(281)", 10, 7,
  "Rg", "Roentgenium", "(280)", 11, 7,
  "Cn", "Copernicium", "(285)", 12, 7,
  "Nh", "Nihonium", "(286)", 13, 7,
  "Fl", "Flerovium", "(289)", 14, 7,
  "Mc", "Moscovium", "(290)", 15, 7,
  "Lv", "Livermorium", "(293)", 16, 7,
  "Ts", "Tennessine", "(294)", 17, 7,
  "Og", "Oganesson", "(294)", 18, 7

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

  for (var i = 0; i < table.length; i++) {

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
    symbol.textContent = table[i];
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

  //

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = 'absolute';
  document.getElementById('container').appendChild(renderer.domElement);

  //

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.rotateSpeed = 0.65;
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener('change', render);


  transform(targets.sphere, 2000, objects);


  //
  document.addEventListener('mousedown', onDocumentMouseDown, false);

  window.addEventListener('resize', onWindowResize, false);

}

function onDocumentMouseDown(event) {
  console.log("Click.");

  // update the mouse variable
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // find intersections

  // create a Ray with origin at the mouse position
  //   and direction into the scene (camera direction)
  var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
  projector.unprojectVector(vector, camera);
  var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

  // create an array containing all objects in the scene with which the ray intersects
  var intersects = ray.intersectObjects(targetList);

  // if there is one (or more) intersections
  if (intersects.length > 0) {
    var intersect = intersects[0];


    var element = document.createElement('div');
    element.className = 'info';
    var hue = randomColor({
      luminosity: 'bright',
      hue: 'red',
      format: 'rgba',
      alpha: (Math.random() * 0.5 + 0.25)
    });
    element.style.backgroundColor = hue;

    var symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = "lalalalalala";
    element.appendChild(symbol);



    var object = new THREE.CSS3DObject(element);
    object.position.x = innerWidth / 2;
    object.position.y = innerHeight / 2;
    object.position.z = 2000;
    scene.add(object);
  }

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