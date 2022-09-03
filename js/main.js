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