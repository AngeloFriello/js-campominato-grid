const selectDOMElement = document.getElementById('select');
console.log(selectDOMElement);
const playBtnDOMElement = document.querySelector('.play-btn');

const gridEasyDOMElement = document.querySelector('.grid-easy');
const gridMidDOMElement = document.querySelector('.grid-mid');
const gridHardDOMElement = document.querySelector('.grid-hard');


playBtnDOMElement.addEventListener('click', function (){

    gridEasyDOMElement.innerHTML = '';
    gridMidDOMElement.innerHTML = '';
    gridHardDOMElement.innerHTML = '';

    if(selectDOMElement.value == 2){

        for (let i = 1; i <= 100 ;i++){
            n = i;
            console.log(n);
            gridHardDOMElement.innerHTML += `<div class="cell ">${n}</div>`
        }

        const cellDOMElements = document.querySelectorAll('.cell')
        console.log(cellDOMElements)

        for (let i = 0; i < cellDOMElements.length; i++){

            const currentCellDOMElement = cellDOMElements[i]

            console.log(currentCellDOMElement)

            currentCellDOMElement.addEventListener('click', function() {
                currentCellDOMElement.classList.add('bg-azurro')
            console.log('hai selezionato la casella'+ `${i+1}`)
            })

    }
    }else if (selectDOMElement.value == 1){

        for (let i = 1; i <= 81 ;i++){
            n = i
            console.log(n)
            gridMidDOMElement.innerHTML += `<div class="cell ">${n}</div>`
        }

        const cellDOMElements = document.querySelectorAll('.cell')
        console.log(cellDOMElements)

        for (let i = 0; i < cellDOMElements.length; i++){

            const currentCellDOMElement = cellDOMElements[i]

            console.log(currentCellDOMElement)

            currentCellDOMElement.addEventListener('click', function() {
                currentCellDOMElement.classList.add('bg-azurro')
            console.log('hai selezionato la casella'+ `${i+1}`)
            })

    }
    }else if(selectDOMElement.value == 0){

        for (let i = 1; i <= 49 ;i++){
            n = i
            console.log(n)
            gridEasyDOMElement.innerHTML += `<div class="cell ">${n}</div>`
        }

        const cellDOMElements = document.querySelectorAll('.cell')
        console.log(cellDOMElements)

        for (let i = 0; i < cellDOMElements.length; i++){

            const currentCellDOMElement = cellDOMElements[i]

            console.log(currentCellDOMElement)

            currentCellDOMElement.addEventListener('click', function() {
                currentCellDOMElement.classList.add('bg-azurro')
            console.log('hai selezionato la casella'+ `${i+1}`)
            })

    }
    }        
})

