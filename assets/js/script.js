/* Consegna:

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */



// Ogni volta che clicco su un quadrato questo si colora di verde

document.querySelector('.play').addEventListener('click', ()=> {
    
    function generateField(domElement, limit) {
        
        // Pulisci la griglia esistente.
        domElement.innerHTML = '';

        // Creare in JavaScript una griglia 10 * 10. 
        // genero il campo da gioco 
        for (let i = 0; i < limit; i++) {
    
        const cellElement = document.createElement('div')
        cellElement.className = 'cell'
        cellElement.append(i + 1)
        domElement.append(cellElement)
    
        
        // aggiungo l'event listener alla cella che ho appena generato
        cellElement.addEventListener('click', function () {
            
            this.classList.toggle('bg-green')
            console.log(`Cella numero ${i + 1}`);
            
            })
        }

    }
    
    const fieldElement = document.querySelector('.square')
    const limit = 100
    generateField(fieldElement, limit)

});

document.querySelector('.reset').addEventListener('click', () => {

    const fieldElement = document.querySelector('.square');

    // Rimuovi tutte le celle dal cmpo di gioco

    while (fieldElement.firstChild) {
        fieldElement.removeChild(fieldElement.firstChild);
    }

    // Pulisci la console

    console.clear();
    
});