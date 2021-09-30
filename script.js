function minimize(section) {
    let text = document.getElementById(section.toString());
    text.style.display = text.style.display === 'none' ?
        '' :
        'none'
}

function rotate(header) {
    for (const child of document.getElementById(header).childNodes) {
        if (child.innerHTML == '❯') {
            child.className = child.className === 'rotate' ?
                'arrow' :
                'rotate'
        }
    }
}

const pText = [
    "<em>Java</em> Players attempt to avoid pathfinding enemies in a pseudorandomly generating world, or play in a custom-built world.",
    "<em>Java</em> Users interact with a dynamic map of the city of Berkeley and find the shortest path between point A and point B.",
    "<em>Python</em> In a parody of <em>Plants Vs. Zombies</em>, players attempt to prevent the Bees from reaching the Ant Queen with a number of tactical Ants.",
    "<em>Java</em> Users can enter a sequence of characters and get a nice melody outputted using the Karplus-Strong algorithm to convert it to \"plucking\".",
    "<em>Python</em> This was a group project to see whether a training an algorithm on short-term trends and financial reports could outperform the market."
]

const pTitles = [
    "Build Your Own World",
    "BearMaps",
    "Ants vs. Bees",
    "Digital Rockstar",
    "Beating the Market"
]

/*
Alternative with a large object literal:
  const projects = {
      byow: {
          title: "Build your Own World",
          text: "<em>Java</em Players..."
      },
      map: { ... },
      // ...
  }

  // ...then no index is required.
  function alternate(proj) {
      const part = // ...
      const text = // ...
      const {title, text} = projects[proj]
      text.innerHTML = text.innerHTML === title ? text : title
  }
*/

function alternate(proj, index) {
    const text = document.querySelector(`#projects .${proj} p`)
    text.innerHTML = text.innerHTML == pTitles[index] ?
        pText[index] :
        pTitles[index]
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
    var pics = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (num > pics.length) {
        cur_slide = 1;
    } else if (num < 1) {
        cur_slide = pics.length;
    }
    for (const pic of pics) {
        pic.style.display = "none";
    }
    for (const dot of dots) {
        dot.classList.toggle('active')
    }
    pics[cur_slide - 1].style.display = "block";
    dots[cur_slide - 1].classList.add('active')
}
