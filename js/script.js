const selectDOMElement = document.getElementById('select');
console.log(selectDOMElement);
const playBtnDOMElement = document.querySelector('.play-btn');

const gridDOMElement = document.querySelector('.grid');

playBtnDOMElement.addEventListener('click', function (){
    gridDOMElement.innerHTML = '';
    gridDOMElement.classList.remove('grid-hard');
    gridDOMElement.classList.remove('grid-mid');

    if(selectDOMElement.value == 0){
        gridDOMElement.classList.add('grid-easy');
        const gridEasyDOMElement = document.querySelector('.grid-easy');
        gridEasyDOMElement.innerHTML = '';
        for (let i = 1; i <= 49 ;i++){
            n = i;
            console.log(n);
            gridEasyDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    }else if(selectDOMElement.value == 1){
        gridDOMElement.classList.add('grid-mid');
        const gridMidDOMElement = document.querySelector('.grid-mid');
        gridMidDOMElement.innerHTML = '';
        for (let i = 1; i <= 81 ;i++){
            n = i;
            console.log(n);
            gridMidDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    }else if(selectDOMElement.value == 2){
        gridDOMElement.classList.add('grid-hard');
        const gridHardDOMElement = document.querySelector('.grid-hard');
        gridHardDOMElement.innerHTML = '';
        for (let i = 1; i <= 100; i++){
            n = i;
            console.log(n);
            gridHardDOMElement.innerHTML += `<div class="cell ">${n}</div>`;
        }
    }

    const cellDOMElements = document.querySelectorAll('.cell');
    console.log(cellDOMElements);

    for (let i = 0; i < cellDOMElements.length; i++){

        const currentCellDOMElement = cellDOMElements[i];

        console.log(currentCellDOMElement);

        currentCellDOMElement.addEventListener('click', function() {
            currentCellDOMElement.classList.add('bg-azurro');
        console.log('hai selezionato la casella'+ `${i+1}`);
        })
    }
})

