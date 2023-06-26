
const modalTrailer = () => {
  const openBtn = document.querySelector('[data-modal="open"]')
  const closeBtn = document.querySelector('[data-modal="close"]')
  const trailer = document.querySelector('[data-modal="trailer"]')


  if (openBtn && closeBtn && trailer) {
    const toggleModal = (event) => {
      trailer.classList.toggle('active')
    }

    const clickOutsideModal = (event, element) => {
      if (event.target === element) toggleModal()
    }


    openBtn.addEventListener('click', toggleModal)
    closeBtn.addEventListener('click', toggleModal)
    trailer.addEventListener('click', (event) => {
      clickOutsideModal(event, trailer)
    })

  }


}

modalTrailer()