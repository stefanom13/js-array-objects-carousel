
// trasformate i 3 array con i dati in un un unico array di oggetti
// ogni oggetto corrisponderà ad una slide e conterrà 3 proprietà: l’immagine, il titolo e la descrizione
// generate l ’html delle slide ciclando questo array e recuperando le informazioni necessarie della proprietà dei singoli oggetti.

// inserimento array
const slide =[
    {
        title: 'Svezia',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        image: 'img/01.jpg'
    },
    {
        title: 'Svizzera',
        description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        image: 'img/02.jpg',
    },
    {
        title: 'Gran Bretagna',
        description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        image: 'img/03.jpg',
    },
    {
        title: 'Germania',
        description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        image: 'img/04.jpg',
    },
    {
        title: 'Paradise',
        description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        image: 'img/05.jpg',
    },
]
// const items = [
//     'img/01.jpg',
//     'img/02.jpg',
//     'img/03.jpg',
//     'img/04.jpg',
//     'img/05.jpg'
// ];

// const title = [

//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]

// dichiarazioni variabili 

const slideWrapper = document.querySelector('.slide-wrapper')
const controlImage = document.querySelector('.secondaryImages')
const buttSucc = document.querySelector('.up')
const buttPrec = document.querySelector('.down')
const itemImage = [...document.getElementsByClassName('item')];
const itemControl = [...document.getElementsByClassName('image')];

let currentIndex = 0

itemImage[currentIndex].classList.add('active')


slide.forEach( ({title,description,image}) => {
    const item = `
        <div class="item">
            <img src="${image}" alt="">
            <div class="description">
            <h5 class="titolo">${title}</h5>
            <p class="paragrafo">${description}</p>
            </div>
        </div>
        `
    slideWrapper.innerHTML += item
})


// generare le slide con le immagini 
// creare ciclio array di img

// for (let i = 0; i < items.length; i++) {
//     // creare elemeno html della slide 
//     const item = `
//         <div class="item">
//             <img src="${items[i]}" alt="">
//             <div class="description">
//             <h5 class="titolo">${title[i]}</h5>
//             <p class="paragrafo">${text[i]}</p>
//             </div>
//         </div>
//         `
//     slideWrapper.innerHTML += item
// }


slide.forEach( ({image}) => {
   
    const boxImage = `
    <div class="controls ">
    <img class="image" src="${image}" alt="">
    </div>  
    `;  
    controlImage.innerHTML += boxImage;
  }) 

  itemControl[currentIndex].classList.add('active')

// creazione e controllo box img 
// for (let i = 0; i < items.length; i++) {

//     const boxImage = `
//         <div class="controls">
//         <img class="image" src="${items[i]}" alt="">
//         </div>  
//         `
//     controlImage.innerHTML += boxImage
// }

//  itemControl[currentIndex].classList.add('active')


// creare click down 
buttPrec.addEventListener('click', function () {
    itemImage[currentIndex].classList.remove('active')
    itemControl[currentIndex].classList.remove('active')

    if (currentIndex > 0) {
        currentIndex--
        itemImage[currentIndex].classList.add('active')
        itemControl[currentIndex].classList.add('active')


    } else {
        currentIndex = items.length - 1
    }
    itemImage[currentIndex].classList.add('active')
    itemControl[currentIndex].classList.add('active')

})

// creare click up
buttSucc.addEventListener('click', function () {
    itemImage[currentIndex].classList.remove('active')
    itemControl[currentIndex].classList.remove('active')


    if (currentIndex < items.length - 1) {
        currentIndex++
        itemImage[currentIndex].classList.add('active')
        itemControl[currentIndex].classList.add('active')

    } else {
        currentIndex = 0
    }
    itemImage[currentIndex].classList.add('active')
    itemControl[currentIndex].classList.add('active')

})





