let body = document.querySelector('body')
let wrap_p = document.querySelector('#wrap-p')
let colorValue = document.querySelector('#colorValue')
const change_btn = document.querySelector('#change-btn')

change_btn.addEventListener('click', function () {

    let hue = Math.floor(Math.random() * 361)
    let saturation = Math.floor(Math.random() * 101)
    let lightness = Math.floor(Math.random() * 101)
    let opacity = (Math.random() * 1).toFixed(1)

    wrap_p.innerHTML = `
        <p id="colorValue">hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})</p>
    `
    
    let changeValue = wrap_p.textContent
    // console.log(changeValue);
    body.style.backgroundColor = changeValue
})
