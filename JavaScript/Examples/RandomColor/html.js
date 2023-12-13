let buton = document.getElementById('generate')
let body = document.getElementById('body')


buton.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    console.log('Butona Tıklandı')
    var rgbValue = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = rgbValue

})