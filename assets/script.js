var slide = ["assets/6.jpg", "assets/7.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg", "assets/11.jpg"];
var numero = 0;
var points = document.getElementsByClassName("points").item(0);
var btn_p = document.getElementById("prec");
var btn_s = document.getElementById("suiv");
let text  = document.getElementsByClassName('text').item(0);


points.children[numero].classList.add("points-active");

btn_s.onclick = () => {
    numero++;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    points.children[numero].classList.add("points-active");

    if (numero - 1 >= 0) {
        points.children[numero - 1].classList.remove("points-active");
    } else {
        points.children[5].classList.remove("points-active");
    }
    (numero != 0) ? text.style.visibility = 'hidden' : text.style.visibility = 'visible'

}

btn_p.onclick = () => {
    numero--;
    if (numero >= 0) {
        points.children[numero].classList.add("points-active");
        points.children[numero + 1].classList.remove("points-active");
    } else {
        points.children[5].classList.add("points-active");
        points.children[0].classList.remove("points-active");
    }

    if (numero < 0) {
        numero = slide.length - 1
    }
    (numero != 0) ? text.style.visibility = 'hidden' : text.style.visibility = 'visible'


    document.getElementById("slide").src = slide[numero];
}
