var dl = Array.from(document.querySelectorAll("dl"))
var swiperr = new Swiper(".swiper-container", {
    on: {
        slideChange: function() {
            dl.forEach(function(file) {
                file.classList.remove("active")
            })
            dl[this.activeIndex].classList.add("active")
        }
    }
})
dl.forEach(function(file, ind) {
    file.index = ind
    file.ontouchend = function(e) {
        e.preventDefault()
        swiperr.slideTo(ind)
    }
})