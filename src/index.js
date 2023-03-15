import { renderMap } from "./scripts/map";

document.addEventListener("DOMContentLoaded", () => {
    renderMap()

    const instructions = document.getElementsByClassName('instructions-modal')
        const openModalButtons = document.querySelectorAll('[data-modal-target]')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const overlay = document.getElementById('overlay')

        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget)
                openModal(modal)
            })
        })

        overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal.active')
            modals.forEach(modal => {
                closeModal(modal)
            })
        })

        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal')
    
                closeModal(modal)
            })
        })

        function openModal(modal) {
            modal.classList.add('active')
            overlay.classList.add('active')
        }

        function closeModal(modal) {
            
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }
    
});