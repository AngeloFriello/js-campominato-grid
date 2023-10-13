const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)
const playBtnDOMElement = document.querySelector('.play-btn')
console.log(playBtnDOMElement)


playBtnDOMElement.addEventListener('click', function (){
    gridDOMElement.innerHTML = '';

    for (let i = 1; i <= 100 ;i++){
        n = i
        console.log(n)
        gridDOMElement.innerHTML += `<div class="cell">${n}</div>`

       
    }

    const cellDOMElement = querySelectorall('.cell')

    for (let i = 0; i < cellDOMElement; i++){

        currentCellDOMElement = cellDOMElement[i]

        cellDOMElement[i].addEventListener('click', function() {
            currentCellDOMElement.classList.add('bg-.green')
        })

    }
        
}
)
    
 
