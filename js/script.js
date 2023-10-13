const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)
const playBtnDOMElement = document.querySelector('.play-btn')
console.log(playBtnDOMElement)


playBtnDOMElement.addEventListener('click', function (){
    gridDOMElement.innerHTML = '';

    for (let i = 1; i <= 100 ;i++){
        n = i
        console.log(n)
        gridDOMElement.innerHTML += `<div class="cell ">${n}</div>`
    }

    const cellDOMElements = document.querySelectorAll('.cell')
    console.log(cellDOMElements)

    for (let i = 0; i < cellDOMElements.length; i++){

        const currentCellDOMElement = cellDOMElements[i]

        console.log(currentCellDOMElement)

        currentCellDOMElement.addEventListener('click', function() {
            currentCellDOMElement.classList.add('bg-azurro')
        })

    }
        
}
)
