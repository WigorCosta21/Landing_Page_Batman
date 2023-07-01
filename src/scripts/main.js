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

const tabNav = () => {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')
  const activeClass = 'active'

  tabContent[0].classList.add(activeClass)

  const activeTab = (index) => {
    tabContent.forEach((content) => {
      content.classList.remove(activeClass)
    })
    const direction = tabContent[index].dataset.anime
    tabContent[index].classList.add(activeClass, direction)
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index)
    })
  })

}



const start = () => {
  modalTrailer()
  tabNav()
}

start()

