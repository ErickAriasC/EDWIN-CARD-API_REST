
const btnGetCard = document.querySelector('.get_card')

const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'

function getAPI () {
    fetch(URL)
    .then(response => response.json())
    .then(data => getCard(data[0]))
    .catch(err => console.log(err));
}

function getCard(Simpson) {
     const {quote, image, character} = Simpson; 
     const containerCard = document.querySelector('.containerCard')
     containerCard.style.display= 'flex';

     const imgCard = document.querySelector('#img')
     imgCard.src = image
     imgCard.alt = character

     const nameCard = document.querySelector('.nameCharacter')
     nameCard.textContent = character

     const quoteCard = document.querySelector('.description')
     quoteCard.textContent = quote

}

btnGetCard.addEventListener('click', getAPI)