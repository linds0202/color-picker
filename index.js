const colorPicker = document.getElementById('color-picker')
const modeSelect = document.getElementById('mode')
const schemeBtn = document.getElementById('get-scheme-btn')

let colorArray = []

schemeBtn.addEventListener('click', () => {
    getScheme()
})

const getScheme = () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${modeSelect.value}`)
        .then(res => res.json()) 
        .then(data => {
            colorArray = data.colors
            renderColors()
        })
}

const renderColors = () => {
    document.querySelector('main').innerHTML = colorArray.map(color => {
     return `
        <div class='color-element'>
            <div class='color' style='background-color:${color.hex.value};' id='cex-${color.hex.value}'></div>
            <div class='hex' id='hex-${color.hex.value}'>${color.hex.value}</div>
        </div>`
    }).join('')
}
