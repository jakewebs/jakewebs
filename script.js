function minimize(section) {
    let text = document.getElementById(section.toString());
    if (text.style.display == "none") {
        text.style.display = "";
    } else {
        text.style.display = "none";
    }
}
var pText = [];
pText[0] = "<em>Java</em> Players attempt to avoid pathfinding enemies in a pseudorandomly generating world, or play in a custom-built world.";
pText[1] = "<em>Java</em> Users interact with a dynamic map of the city of Berkeley and find the shortest path between point A and point B.";
pText[2] = "<em>Python</em> In a parody of <em>Plants Vs. Zombies</em>, players attempt to prevent the Bees from reaching the Ant Queen with a number of tactical Ants.";
pText[3] = "<em>Java</em> Users can enter a sequence of characters and get a nice melody outputted using the Karplus-Strong algorithm to convert it to \"plucking\".";
pText[4] = "<em>Python</em> This was a group project to see whether a training an algorithm on short-term trends and financial reports could outperform the market."
var pTitles = [];
pTitles[0] = "Build Your Own World";
pTitles[1] = "BearMaps";
pTitles[2] = "Ants vs. Bees";
pTitles[3] = "Digital Rockstar";
pTitles[4] = "Beating the Market";

function alternate(proj, index) {
    let part = document.getElementsByClassName(proj.toString())[0];
    let text = part.getElementsByTagName("P")[0];
    if (text.innerHTML == pTitles[index]) {
        text.innerHTML = pText[index];
    } else {
        text.innerHTML = pTitles[index];
    }
}

var cur_slide;
//slide(cur_slide);
function setCurSlide(cur) {
    cur_slide = cur;
}

function changeSlide(amount) {
    slide(cur_slide += amount);
}

function showCurrent(cur) {
    slide(cur_slide = cur);
}

function slide(num) {
    var i;
    var pics = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (num > pics.length) {
        cur_slide = 1;
    } else if (num < 1) {
        cur_slide = pics.length;
    }
    for (i = 0; i < pics.length; i += 1) {
        pics[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i += 1) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    pics[cur_slide - 1].style.display = "block";
    dots[cur_slide - 1].className += " active";
}