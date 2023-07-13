const bgImageEl = document.querySelector(".hero");
// console.log(bgImageEl);

window.addEventListener("scroll", () => {
  
        updateImage();
})

function updateImage(){
    bgImageEl.style.opacity = 1 - window.scrollY / 800;
    bgImageEl.style.backgroundSize = 105 + window.scrollY / 12 + '%';
    // console.log(bgImageEl.style.backgroundSize);
}