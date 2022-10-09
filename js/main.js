//Get the button:
backToTopBtn = document.getElementById("myBtn");

backToTopBtn.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
})

preloader=document.querySelector("#preloader")

function preloadFunc(){
  preloader.style.display="none"
}

const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')
const close=document.getElementById('close')

if (bar){
    bar.addEventListener('click', ()=>{
        // We activate a class named active which will make right: 0px, thereby displaying the navbar
        nav.classList.add('active') 
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}