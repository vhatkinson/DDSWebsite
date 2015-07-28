/*****Menu Animation*****/
function showMenu() {
    document.getElementById("submenu").style.display="block";
}
function hideMenu() {
    document.getElementById("submenu").style.display="none";
}

/*****Slide Show*****/
var imgSlide;
var pic = 0;
var images = new Array();
var timer;

window.onload = function() {
    imgSlide = document.getElementById("slideShow_img");

    //Pre load images
    images[0] = new Image();
    images[0].src = "../images/smile_gallery/DSC_1522-5.jpg";
    images[1] = new Image();
    images[1].src = "../images/smile_gallery/Untitled copy.png";
    images[2] = new Image();
    images[2].src = "../images/smile_gallery/Untitled.png";

    slide();
}

function slide() {
    imgSlide.src = images[pic].src;

    if(pic < images.length-1) {
        pic++;
    }
    else {
        pic = 0;
    }

    timer = setTimeout(slide, 5000);
}

function prev() {
    if(timer) {
        stopSlide();
    }
    if(pic == 0) {
        pic = images.length - 1;
        imgSlide.src = images[pic].src;
    }
    else {
        pic--;
        imgSlide.src = images[pic].src;
    }
}

function next() {
    if(timer) {
        stopSlide();
    }
    if(pic == images.length - 1) {
        pic = 0;
        imgSlide.src = images[pic].src;
    }
    else {
        pic++;
        imgSlide.src = images[pic].src;
    }
}

function stopSlide() {
    clearTimeout(timer);
}