document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(libro =>{
  
            libro.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?libro.classList.remove("filtro")
              :libro.classList.add("filtro")
        })
  
    }
  
  
  })