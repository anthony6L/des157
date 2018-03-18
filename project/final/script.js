"use strict";

var sexuality = [//list of name & link for sexualities
  "Androsexual", "labels/sex/androsexual.html",
  "Aromantic", "labels/sex/aromantic.html",
  "Asexual", "labels/sex/asexual.html",
  "Bicurious", "labels/sex/bicurious.html",
  "Bisexual", "labels/sex/bisexual.html",
  "Demiromantic", "labels/sex/demiromantic.html",
  "Demisexual", "labels/sex/demisexual.html",
  "Emotional Attraction", "labels/sex/emotional-attraction.html",
  "Gay", "labels/sex/gay.html",
  "Gynesexual", "labels/sex/gynesexual.html",
  "Heterosexual", "labels/sex/heterosexual.html",
  "Lesbian", "labels/sex/lesbian.html",
  "Metrosexual", "labels/sex/metrosexual.html",
  "MSM/WSW", "labels/sex/msm.html",
  "pansexual", "labels/sex/pansexual.html",
  "Queer", "labels/sex/queer.html",
  "Romantic Attraction", "labels/sex/romantic-attraction.html",
  "Sexual Attraction", "labels/sex/sexual-attraction.html",
  "Sexual Orientation", "labels/sex/sexual-orientation.html",
  "Sexual Preference", "labels/sex/sexual-preference.html",
  "Skoliosexual", "labels/sex/skoliosexual.html",
  "Spiritual Attraction", "labels/sex/spiritual-attraction.html",
  "Straight", "labels/sex/straight.html"
];

var gender = [//list of name & link for genders
  "Agender", "labels/gen/agender.html",
  "Androgyny/ous", "labels/gen/androgyny.html",
  "Bigender", "labels/gen/bigender.html",
  "Biological sex", "labels/gen/biological-sex.html",
  "Butch", "labels/gen/butch.html",
  "Cisgender", "labels/gen/cisgender.html",
  "Dyke", "labels/gen/dyke.html",
  "Femme", "labels/gen/femme.html",
  "Fluid", "labels/gen/fluid.html",
  "FtM/F2M", "labels/gen/ftm.html",
  "Gender Non-conforming", "labels/gen/gnon-conforming.html",
  "Gender Normative", "labels/gen/gender-normative.html",
  "Genderqueer", "labels/gen/genderqueer.html",
  "Gender Variant", "labels/gen/gender-variant.html",
  "Hermaphrodite", "labels/gen/hermaphrodite.html",
  "Intersex", "labels/gen/intersex.html",
  "MtF/M2F", "labels/gen/mtf.html",
  "Mx", "labels/gen/mx.html",
  "Passing", "labels/passing.html",
  "PGP", "labels/gen/pgp.html",
  "SAAB", "labels/gen/saab.html",
  "SRS", "labels/gen/srs.html",
  "Stealth", "labels/gen/stealth.html",
  "Third Gender", "labels/gen/3rd-gender.html",
  "Top Surgery", "labels/gen/top-surgery.html",
  "Trans*", "labels/gen/trans.html",
  "Transgender", "labels/gen/transgender.html",
  "Transition", "labels/gen/transition.html",
  "Transman", "labels/gen/transman.html",
  "Transwoman", "labels/gen/transwoman.html",
  "Transsexual", "labels/gen/transsexual.html",
  "Transvestite", "labels/gen/transvestite.html",
  "Two-Spirit", "labels/gen/2-spirit.html",
  "Ze/Zir", "labels/gen/ze.html"
];

var other = [//list of name & link for other labels
  "Advocate", "labels/other/advocate.html",
  "Ally", "labels/other/ally.html",
  "Biphobia", "labels/other/biphobia.html",
  "Cisnormativity", "labels/other/cisnormativity.html",
  "Cissexism", "labels/other/cissexism.html",
  "Closeted", "labels/other/closeted.html",
  "Coming Out", "labels/other/coming-out.html",
  "Cross-Dresser", "labels/other/cross-dresser.html",
  "Drag King", "labels/other/drag-king.html",
  "Drag Queen", "labels/other/drag-queen.html",
  "Gender Binary", "labels/other/gender-binary.html",
  "Gender Expression", "labels/other/gender-expression.html",
  "Gender Identity", "labels/other/gender-identity.html",
  "Heteronormativity", "labels/other/heteronormativity.html",
  "Heterosexism", "labels/other/heterosexism.html",
  "Homophobia", "labels/other/homophobia.html",
  "LGBTQ/GSM/DSG", "labels/other/lgbt.html",
  "Outing", "labels/other/outing.html",
  "Questioning", "labels/other/questioning.html",
  "QPOC/QTPOC", "labels/other/qpoc.html",
  "Transphobia", "labels/other/transphobia.html"
];

var resourceList = [//list of name, link & description for resources
  "Atticus Circle", "https://www.atticuscircle.org/","Dedicated to educating and mobilizing straight allies to advance equal rights for lesbians, gay, bisexual and transgender partners, parents and their children.",
  "Trans Family", "http://transfamily.org/", "TransFamily provides support, education, advocacy, and outreach for the transgendered community, families, friends, partners, and allies of all ages, through meetings, presentations, seminars, media outreach, and an emergency resource hotline.",
  "GLBTNearMe", "https://glbtnearme.org/", "Find local social and support resources within the LGBT community.",
  "Trevor Project", "https://www.thetrevorproject.org/", "Leading national organization focused on crisis and suicide prevention efforts for LGBTQ youth. They operate a 24 hour nationwide hotline to provide assistance.",
  "The Ali Forney Center", "https://www.aliforneycenter.org/", "Providing shelter, food, and resources for at risk or homeless LGBT youth.",
  "GLBT National Help Center", "http://www.glbtnationalhelpcenter.org/", "Provides free and confidential telephone and internet counseling, information and local resources for LGBTQ callers.",
  "National Youth Advocacy Coalition", "http://nyacyouth.org/", "A national organization seeking to strenghten the role of LGBTQ youth in the broader gay rights movement.",
  "LGBT Campus", "http://www.lgbtcampus.org/", "Provides resources to lesbian, gay, bisexual, and transgender students, faculty, staff, administrators, and alumni.",
  "GSA Network", "https://gsanetwork.org/", "Gay-Straight Alliance Network is a youth leadership organization that connects school-based Gay-Straight Alliances (GSAs) to each other and community resources through peer support, leadership development, and training.",
  "Campus Pride", "http://campuspride.org/", "The only national organization working to empower LGBT college students and organizers.",
  "Campus Climate Index", "https://www.campusprideindex.org/", "An index ranking LGBT life on various college campuses.",
  "NCAVP", "https://avp.org/ncavp/", "A national coalition of local member programs working to prevent, respond to, and end all forms of violence against and within LGBTQ communities.",
  "GLSEN", "https://www.glsen.org/", "Lesson plans, curricular tools, and information on teacher training programs.",
  "Safe Schools Coalition", "http://safeschoolscoalition.org/", "An international public-private partnership in support of gay, lesbian, bisexual and transgender youth, working to help schools become safe places where every family can belong, every educator can teach, and every child can learn, regardless of gender identity or sexual orientation.",
  "Beyound Ex-Gay", "https://beyondexgay.com/", "Community of survivors of “ex-gay” conversion therapy.",
  "Psychology Today", "https://www.psychologytoday.com/", "Trustworthy resource to find therapist and psychiatrist",
  "The Human Rights Campaign", "http://www.hrc.org/", "The leading LGBT civil rights organization, with information about LGBT people/issues and ways to get involved in the fight for equality.",
];

//globel vars for the library
var camera, scene, renderer;
var controls;

//lists for adding objects to the scene
var objects = [];
var resourceObj = [];
var targets = {//different shapes for different pages
  sphere: [],
  messagePage: [],
  resources: []
};

//function calss
init();
animate();

function init() {

  //set camera and scene
  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 3000;

  scene = new THREE.Scene();

  // construct labels

  for (var i = 0; i < sexuality.length; i += 2) {//sexuality labels
    //create a label
    var element = document.createElement('div'); 
    element.className = 'element';
    var hue = randomColor({
      luminosity: 'bright',
      hue: 'red',
      format: 'rgba',
      alpha: (Math.random() * 0.5 + 0.25)
    });
    element.style.backgroundColor = hue;

    //adding content to the label
    var symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.innerHTML = "<a href=" + sexuality[i + 1] + " target=\"_blank\">" + sexuality[i] + "</a>";
    element.appendChild(symbol);

    //position element at random places in the scene
    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add(object);

    objects.push(object);

  }

  for (var i = 0; i < gender.length; i += 2) {//gender labels

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
    symbol.innerHTML = "<a href=" + gender[i + 1] + " target=\"_blank\">" + gender[i] + "</a>";
    element.appendChild(symbol);

    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add(object);

    objects.push(object);

  }

  for (var i = 0; i < other.length; i += 2) {//other labels

    var element = document.createElement('div');
    element.className = 'element';
    var hue = randomColor({
      luminosity: 'bright',
      hue: 'yellow',
      format: 'rgba',
      alpha: (Math.random() * 0.5 + 0.25)
    });
    element.style.backgroundColor = hue;


    var symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.innerHTML = "<a href=" + other[i + 1] + " target=\"_blank\">" + other[i] + "</a>";
    element.appendChild(symbol);

    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add(object);

    objects.push(object);

  }

  for (var i = 0; i < resourceList.length; i += 3) {//resources labels

    var element = document.createElement('div');
    element.className = 'resource';
    var hue = randomColor({
      luminosity: 'dark',
      hue: 'green',
      format: 'rgba',
      alpha: (Math.random() * 0.5 + 0.65)
    });
    element.style.backgroundColor = hue;


    var symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.innerHTML = "<a href=" + resourceList[i + 1] + " target=\"_blank\">" + resourceList[i] + "</a><p>"
    + resourceList[i+2]+ "<\p>";
    element.appendChild(symbol);

    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add(object);

    resourceObj.push(object);

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

  // messagePage

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

    targets.messagePage.push(object);

  }
  //creating the special meesage object
  var message = document.createElement('div');
  message.id = 'message';
  message.style.backgroundColor = 'rgba(255,255,255,0.40)';
  message.textContent = "You are more than the labels";

  var mesObject = new THREE.CSS3DObject(message);

  //resources
  var vector = new THREE.Vector3();
  var cylindrical = new THREE.Cylindrical();
  for (var i = 0; i < resourceObj.length; i++) {

    var theta = i *0.6  + Math.PI;
    var y = - ( i * 40 ) + 400;
    var object = new THREE.Object3D();
    cylindrical.set( 900, theta, y );
    object.position.setFromCylindrical( cylindrical );
    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;
    object.lookAt( vector );

    targets.resources.push(object);
  }

  //render the scene
  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = 'absolute';
  document.getElementById('container').appendChild(renderer.domElement);

  //set the controls for interaction
  controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.rotateSpeed = 0.65;
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener('change', render);

  var instr = document.getElementById('instructions');
  //filter buttons
  var filter = document.getElementById('filter');
  var sex = document.getElementById('red');
  var gen = document.getElementById('blue');
  var terms = document.getElementById('yellow');
  sex.addEventListener('click', function(event) {
    for (var i = objects.length - 1; i >= sexuality.length / 2; i--) {
      scene.remove(objects[i]);
    }
  }, false);

  gen.addEventListener('click', function(event) {
    for (var i = 0; i < sexuality.length / 2; i++) {
      scene.remove(objects[i]);
    }

    for (var i = objects.length - 1; i > sexuality.length / 2 + gender.length / 2 - 2; i--) {
      scene.remove(objects[i]);
    }
  }, false);

  terms.addEventListener('click', function(event) {
    for (var i = 0; i < objects.length - other.length / 2; i++) {
      scene.remove(objects[i]);
    }
  }, false);

  //instruction button
  var button = document.getElementById('instruction');
  button.addEventListener('click', function(event) {
    for (var i = 0; i < resourceObj.length; i++) {//remove all resource objects
      scene.remove(resourceObj[i]);
    }
    scene.remove(mesObject);//remove message
    for (var i = 0; i < objects.length; i++) {//remove all label objects
      scene.remove(objects[i]);
    }
    controls.reset();//reset the orientation of the scene

    if (instr.classList.contains("hide")) {//show instruction box
      instr.classList.remove("hide");
      instr.classList.add("show");
    }
    if (filter.classList.contains("show")) {//hide label filter
      filter.classList.remove("show");
      filter.classList.add("hide");
    }

  }, false);

  //labels button
  var button = document.getElementById('sphere');
  button.addEventListener('click', function(event) {

    for (var i = 0; i < objects.length; i++) {//add all label objects to the scene
      scene.add(objects[i]);
    }
    transform(targets.sphere, 2000, objects);//apply the animation
    scene.remove(mesObject);//remove message
    for (var i = 0; i < resourceObj.length; i++) {
      scene.remove(resourceObj[i]);//remove all resource objects to the scene
    }
    controls.reset();

    if (instr.classList.contains("show")) {//hide instruction box
      instr.classList.remove("show");
      instr.classList.add("hide");
    }
    if (filter.classList.contains("hide")) {//show label filter
      filter.classList.remove("hide");
      filter.classList.add("show");
    }
  }, false);

  //message button
  var button = document.getElementById('messagePage');
  button.addEventListener('click', function(event) {
    for (var i = 0; i < objects.length; i++) {
      scene.add(objects[i]);
    }
    transform(targets.messagePage, 2000, objects);
    mesObject.position.z = 1000;//positon message
    scene.add(mesObject);//add message to scene
    for (var i = 0; i < resourceObj.length; i++) {
      scene.remove(resourceObj[i]);
    }
    controls.reset();

    if (instr.classList.contains("show")) {//hide instruction box
      instr.classList.remove("show");
      instr.classList.add("hide");
    }

    if (filter.classList.contains("hide")) {//show label filter
      filter.classList.remove("hide");
      filter.classList.add("show");
    }
  }, false);

  //resource button
  var button = document.getElementById('resources');
  button.addEventListener('click', function(event) {
    for (var i = 0; i < resourceObj.length; i++) {
      scene.add(resourceObj[i]);
    }
    scene.remove(mesObject);
    for (var i = 0; i < objects.length; i++) {
      scene.remove(objects[i]);
    }
    controls.reset();

    if (instr.classList.contains("show")) {//hide instruction box
      instr.classList.remove("show");
      instr.classList.add("hide");
    }

    if (filter.classList.contains("show")) {//hide label filter
      filter.classList.remove("show");
      filter.classList.add("hide");
    }

    transform(targets.resources, 2000, resourceObj);//apply animation

  }, false);


  //

  window.addEventListener('resize', onWindowResize, false);//change camera position after resizing

}

function transform(targets, duration, obj) {//animation function

  TWEEN.removeAll();//remove all current animation

  for (var i = 0; i < obj.length; i++) {//

    var object = obj[i];//get the object from object array
    var target = targets[i];//get the postion from shape array

    new TWEEN.Tween(object.position)//create new animation
      .to({//position animation
        x: target.position.x,
        y: target.position.y,
        z: target.position.z
      }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to({//rotation animation
        x: target.rotation.x,
        y: target.rotation.y,
        z: target.rotation.z
      }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

  }

  new TWEEN.Tween(this)//render the animation
    .to({}, duration * 2)
    .onUpdate(render)
    .start();

}

function onWindowResize() {//window resize funtion

  camera.aspect = window.innerWidth / window.innerHeight;//reset camera
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);//reset renderer

  render();

}

function animate() {//do the animation

  requestAnimationFrame(animate);

  TWEEN.update();

  controls.update();

}

function render() {//calls renderer to render

  renderer.render(scene, camera);

}