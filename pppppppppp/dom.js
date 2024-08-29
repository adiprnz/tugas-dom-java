
const buttton = document.getElementById('ubahfoto');
const h1 = document.getElementById('foto');

const gambar = document.querySelector("img");

buttton.addEventListener("click", gantiFoto);

function gantiFoto(){
    if(gambar.getAttribute("src") == "th (1).jpeg")
        gambar.setAttribute("src", "th (2).jpeg");
    else if(gambar.getAttribute("src") == "th (2).jpeg")
        gambar.setAttribute("src", "th (1).jpeg");
}