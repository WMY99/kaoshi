var dl = document.querySelectorAll("dl")
dl.forEach(function(file) {
    file.onclick = function() {
        console.log(this)
    }
})