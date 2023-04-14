document.querySelector("h1").addEventListener("click", refresh);
function refresh() {
    var image1 = Math.floor(Math.random() * 6 + 1);
    var image1SRC = "images/dice" + image1 + ".png";
    document.querySelector("img.img1").setAttribute("src", image1SRC);
    var image2 = Math.floor(Math.random() * 6 + 1);
    var image2SRC = "images/dice" + image2 + ".png";
    document.querySelector("img.img2").setAttribute("src", image2SRC);
    if (image1 > image2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if (image1 < image2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "draw!";
    }
 }