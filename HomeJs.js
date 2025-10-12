const mainVideo1 = document.querySelector ('.defaultVideo')
let video1__other = document.querySelectorAll ('.video1__other')

video1__other.forEach (function (allVideo){
    allVideo.addEventListener ('click' , function (){
        allVideo.classList.toggle ('playNewVideo')
    })
})
