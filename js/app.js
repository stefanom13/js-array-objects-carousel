// inserimento array

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [

    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
// dichiarazioni variabili 

const slideWrapper = document.querySelector('.slide-wrapper')
console.log(slideWrapper)

const controlImage = document.querySelector('.secondaryImages')
console.log(controlImage)

const buttSucc = document.querySelector('.up')
console.log(buttSucc)

const buttPrec = document.querySelector('.down')
console.log(buttPrec)

let currentIndex = 0

// generare le slide con le immagini 
// creare ciclio array di img
for (let i = 0; i < items.length; i++) {
    // creare elemeno html della slide 
    const item = `
        <div class="item">
            <img src="${items[i]}" alt="">
            <div class="description">
            <h5 class="titolo">${title[i]}</h5>
            <p class="paragrafo">${text[i]}</p>
            </div>
        </div>
        `
    slideWrapper.innerHTML += item
}
const itemImage = [...document.getElementsByClassName('item')]
itemImage[currentIndex].classList.add('active')

// creare click down 

buttPrec.addEventListener('click', function () {
    itemImage[currentIndex].classList.remove('active')

    if (currentIndex > 0) {
        currentIndex--
        itemImage[currentIndex].classList.add('active')

    } else {
        currentIndex = items.length - 1
    }
    itemImage[currentIndex].classList.add('active')


})

// creare click up
buttSucc.addEventListener('click', function () {
    itemImage[currentIndex].classList.remove('active')

    if (currentIndex < items.length - 1) {
        currentIndex++
        itemImage[currentIndex].classList.add('active')

    } else {
        currentIndex = 0
    }
    itemImage[currentIndex].classList.add('active')

})
// creazione e controllo box img 
for (let i = 0; i < items.length; i++) {
    const boxImage = `
        <div class="controls ">
        <img class="image" src="${items[i]}" alt="">
        </div>  
        `
    controlImage.innerHTML += boxImage
}






