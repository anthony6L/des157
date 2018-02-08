"use strict";

//initial stuff
var laidOut = document.getElementById('laidOut');
var text = document.getElementById('textOnImg');
var bag = document.getElementById('bag');

text.addEventListener('click', function() {
  laidOut.classList.add("fadeInClass");
  laidOut.style.opacity = 1;
  text.classList.add("fadeOutClass");
  text.style.opacity = 0;
});

bag.addEventListener ('mouseover', function() {
	if (text.classList.contains("fadeOutClass")){
		bag.classList.remove('hide');}
});

bag.addEventListener('mouseout', function() {
	bag.classList.add('hide');
});

bag.addEventListener('click', function() {
	if (text.classList.contains("fadeOutClass")){
		laidOut.classList.remove("fadeInClass");
		laidOut.classList.add("fadeOutClass");
  		laidOut.style.opacity = 0;
  		text.classList.remove("fadeOutClass");
  		text.classList.add("fadeInClass");
  		text.style.opacity = 1;}
});

//micron
var micron = document.getElementById('micron');
var mPic = document.getElementById('micronPic');

micron.addEventListener ('mouseover', function() {
	if (text.classList.contains("fadeOutClass")){
		micron.classList.remove('hide');}
});

micron.addEventListener('mouseout', function() {
	micron.classList.add('hide');
});

micron.addEventListener('click', function() {
	if (text.classList.contains("fadeOutClass")){
		mPic.style.display = "block";}
});

micron.addEventListener('touchstart', function(e) {
	mPic.style.display = "block";
	e.preventDefault();
},false);

mPic.addEventListener('click', function() {
	mPic.style.display = "none";
});

mPic.addEventListener('touchend', function(e) {
	mPic.style.display = "none";
	e.preventDefault();
},false);


//sakura
var sakura = document.getElementById('sakura');
var sPic = document.getElementById('sakuraPic');

sakura.addEventListener ('mouseover', function() {
	if (text.classList.contains("fadeOutClass")){
		sakura.classList.remove('hide');}
});

sakura.addEventListener('mouseout', function() {
	sakura.classList.add('hide');
});

sakura.addEventListener('click', function() {
	if (text.classList.contains("fadeOutClass")){
		sPic.style.display = "block";}
});

sPic.addEventListener('click', function() {
	sPic.style.display = "none";
});

//pencil
var pencil = document.getElementById('pencil');
var pPic = document.getElementById('pencilPic');

pencil.addEventListener ('mouseover', function() {
	if (text.classList.contains("fadeOutClass")){
		pencil.classList.remove('hide');}
});

pencil.addEventListener('mouseout', function() {
	pencil.classList.add('hide');
});

pencil.addEventListener('click', function() {
	if (text.classList.contains("fadeOutClass")){
		pPic.style.display = "block";}
});

pPic.addEventListener('click', function() {
	pPic.style.display = "none";
});

//highlighter
var highlighter = document.getElementById('highlighter');
var hPic = document.getElementById('highlighterPic');

highlighter.addEventListener ('mouseover', function() {
	if (text.classList.contains("fadeOutClass")){
		highlighter.classList.remove('hide');}
});

highlighter.addEventListener('mouseout', function() {
	highlighter.classList.add('hide');
});

highlighter.addEventListener('click', function() {
	if (text.classList.contains("fadeOutClass")){
		hPic.style.display = "block";}
});

hPic.addEventListener('click', function() {
	hPic.style.display = "none";
});

//buju
var buju = document.getElementById('buju');
var bPic = document.getElementById('bujuPic');

buju.addEventListener ('mouseover', function() {
	if (text.classList.contains("fadeOutClass")){
		buju.classList.remove('hide');}
});

buju.addEventListener('mouseout', function() {
	buju.classList.add('hide');
});

buju.addEventListener('click', function() {
	if (text.classList.contains("fadeOutClass")){
		bPic.style.display = "block";}
});

bPic.addEventListener('click', function() {
	bPic.style.display = "none";
});

//white
var white = document.getElementById('white');
var wPic = document.getElementById('whitePic');

white.addEventListener ('mouseover', function() {
	if (text.classList.contains("fadeOutClass")){
		white.classList.remove('hide');}
});

white.addEventListener('mouseout', function() {
	white.classList.add('hide');
});

white.addEventListener('click', function() {
	if (text.classList.contains("fadeOutClass")){
		wPic.style.display = "block";}
});

wPic.addEventListener('click', function() {
	wPic.style.display = "none";
});
