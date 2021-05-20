
const laatikko2 = document.querySelector('.laatikko2')
const laatikko = document.querySelector('.laatikko')
const viivat = document.querySelectorAll('.line')

laatikko.addEventListener('click', () => {
    viivat.forEach((e) => {
        e.classList.toggle('chance')
    })
    laatikko.classList.toggle('chance')
})

laatikko2.addEventListener('click', (e) => {
    laatikko2.classList.toggle('muutos')
})

