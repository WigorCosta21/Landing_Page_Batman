
const modalTrailer = () => {
  const openBtn = document.querySelector('[data-modal="open"]')
  const closeBtn = document.querySelector('[data-modal="close"]')
  const trailer = document.querySelector('[data-modal="trailer"]')
  const video = document.querySelector('.video')


  if (openBtn && closeBtn && trailer) {
    const toggleModal = () => {
      trailer.classList.toggle('active')
      if (trailer.parentNode.classList.contains('active')) {
        video.currentTime = 0
        video.play()
      } else {
        video.pause()
      }
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