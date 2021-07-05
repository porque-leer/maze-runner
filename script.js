const d = document,
$btn = d.querySelector(".principal-btn");

function abrirVideo(video = undefined) {
  (video === undefined)
  ? alert("Por lo visto el video aún no se encuentra disponible o ha ocurrido algún error, trabajaremos para hacer el video o resolver el problema UwU")
  : location.href = video;
}

d.addEventListener("click", e =>  {
  if(e.target.matches(".principal-btn")){
    location.href = "libros.html";
  }
})

function filtrar(input, selector) {
  d.addEventListener("keyup", e => {
    if(e.target.matches(input)){

      if(e.key === "Escape") e.target.vale = "";

      d.querySelectorAll(selector).forEach(el => 
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? el.classList.remove("filter")
        : el.classList.add("filter")
      )
    }
  });
}

filtrar("#filtro", ".libro");
