let i = 0;
let title = 'Dusk, the #1 Multipurpose Discord Bot';
let speed = 50;

function main() {

    if (i < title.length) {
        document.getElementById("title").innerHTML += title.charAt(i);
        i++;
        setTimeout(main, speed);
    }

    document.querySelector(".loader").style.visibility = "hidden";
    document.querySelector(".container").style.visibility = "visible";
}