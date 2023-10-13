const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)
const playBtnDOMElement = document.querySelector('.play-btn')
console.log(playBtnDOMElement)

for (let i = 1; i <= 100;i++ ){

    n = i
    console.log(n)

gridDOMElement.innerHTML += `<div class="cell">${n}</div>`
}