const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",()=>{
    nav.classList.remove("hidden");
})

cerrar.addEventListener("click",()=>{
    nav.classList.add("hidden");
})

console.log('si estoy conectado');

const aside = document.querySelector("#aside");
const abrirAside = document.querySelector("#abrir__aside");
const cerrarAside = document.querySelector("#cerrar__aside");

cerrarAside.addEventListener("click",()=>{
    aside.classList.remove("lg:w-[30%]");
    aside.classList.add("lg:hidden");
    abrirAside.classList.remove("lg:hidden");
    abrirAside.classList.add("lg:block");
    
})

abrirAside.addEventListener("click",()=>{
    aside.classList.add("lg:w-[30%]");
    aside.classList.remove("lg:hidden");
    abrirAside.classList.remove("lg:block");
    abrirAside.classList.add("lg:hidden");


    
})

console.log('si estoy conectado');