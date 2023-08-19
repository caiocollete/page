function toggle(){
    const html = document.documentElement
    html.classList.toggle("light")
}

function search() {
    const input = document.getElementById("buscaInput");

    console.log(input.value);
}

const button = document.getElementById("buscaBtn");

button.addEventListener("click", search);