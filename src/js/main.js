import '../scss/style.scss'
const nav = document.getElementById('nav')
const navToggle = document.getElementById('navToggle')

const setNavOpen = (isOpen) => {
  nav.classList.toggle('is-open', isOpen)
  navToggle.setAttribute('aria-expanded', String(isOpen))
  navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
}

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open')
    setNavOpen(!isOpen)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setNavOpen(false)
      navToggle.focus()
    }
  })
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href')
    if (!href || href === '#') return

    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })

      if (window.innerWidth < 720 && nav?.classList.contains('is-open')) {
        setNavOpen(false)
      }
    }
  })
})

document.querySelectorAll('.card-media').forEach((img) => {
  if ('loading' in HTMLImageElement.prototype) {
    img.setAttribute('loading', 'lazy')
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const i = entry.target
          i.src = i.dataset.src || i.src
          io.unobserve(i)
        }
      })
    })

    img.dataset.src = img.src
    img.src = ''
    io.observe(img)
  }
})
