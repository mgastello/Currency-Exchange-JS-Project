const openModalButtons = document.querySelectorAll('.country')
const closeModalButtons = document.querySelectorAll('data-close-button')
// const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById('modal')
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })

export function openModal(modal) {
    modal.classList.add('active')
    // overlay.classList.add('active')
}

export function closeModal(modal) {
    modal.classList.remove('active')
    // overlay.classList.remove('active')
}