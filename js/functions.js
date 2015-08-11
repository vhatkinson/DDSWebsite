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
    images[0].src = "../images/smile_gallery/patient1_before.jpg";
    images[1] = new Image();
    images[1].src = "../images/smile_gallery/patient1_after.jpg";
    images[2] = new Image();
    images[2].src = "../images/smile_gallery/patient2_before.jpg";
    images[3] = new Image();
    images[3].src = "../images/smile_gallery/patient2_after.jpg";
    images[4] = new Image();
    images[4].src = "../images/smile_gallery/patient3_before.jpg";
    images[5] = new Image();
    images[5].src = "../images/smile_gallery/patient3_after.jpg";
    images[6] = new Image();
    images[6].src = "../images/smile_gallery/patient4_before.jpg";
    images[7] = new Image();
    images[7].src = "../images/smile_gallery/patient4_after.jpg";
    images[8] = new Image();
    images[8].src = "../images/smile_gallery/patient5_before.jpg";
    images[9] = new Image();
    images[9].src = "../images/smile_gallery/patient5_after.jpg";
    /*images[10] = new Image();
    images[10].src = "../images/smile_gallery/patient6_before.jpg";
    images[11] = new Image();
    images[11].src = "../images/smile_gallery/patient6_after.jpg";
    images[12] = new Image();
    images[12].src = "../images/smile_gallery/patient7_before.jpg";
    images[13] = new Image();
    images[13].src = "../images/smile_gallery/patient7_after.jpg";*/

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
