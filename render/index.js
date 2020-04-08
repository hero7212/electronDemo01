var fs = require('fs')
window.onload = function() {
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function() {
        fs.readFile('./render/xiaojiejie.txt', (err, data) => {
            if (err) {
                console.log(err)
            } else {
                mybaby.innerHTML = data
            }
        })
    }
}

