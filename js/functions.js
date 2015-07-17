/*Slide show code
var slideShowPictures = new Array();
slideShowPictures[0] = new Image(300, 400);
slideShowPictures[0].src = "DSC_2273-1.jpg";
slideShowPictures[1] = new Image(300, 400);
slideShowPictures[1].src = "DSC_2274-2.jpg";
slideShowPictures[2] = new Image(300, 400);
slideShowPictures[2].src = "DSC_2277-3.jpg";
slideShowPictures[3] = new Image(300, 400);
slideShowPictures[3].src = "DSC_2282-8.jpg";
slideShowPictures[4] = new Image(300, 400);
slideShowPictures[4].src = "DSC_2284-10.jpg";
slideShowPictures[5] = new Image(300, 400);
slideShowPictures[5].src = "DSC_2289-15.jpg";

var slide = 0;

function navigateSlides(slideNumber) {
    slide = slide + slideNumber;
    if (slide > slideShowPictures.length-1) {
        slide = 0;
    }
    else if (slide = 0) {
        slide = slideShowPictures.length - 1;
    }
}
document.getElementById("slideShow").src = slideShowPictures[slide].src;*/

/*Show Menu

var i;

function showmenu(x) {
    for(i=1; i<=4;i++) {
        document.getElementById("menu"+i).style.display="none";
    }
    if(x>0)
        document.getElementById("menu"+x).style.display="block";
}

function showallmenu() {
    for(i=1;i<=4;i++) {
        if(document.getElementById("menu"+i).style.display=="block")
            document.getElementById("menu"+i).style.display="none";
        else
            document.getElementById("menu"+i).style.display="block";
    }
}
 */
