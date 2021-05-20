

const laatikko = document.querySelector('.laatikko')
const viivat = document.querySelectorAll('.line')

laatikko.addEventListener('click', () => {
    viivat.forEach((e) => {
        e.classList.toggle('chance')
    })
    laatikko.classList.toggle('chance')
})