import { Link } from 'react-router-dom'
const active_class = 'navbar__item--active'

const clickHandler = (e) => {
  const nav_items = document.querySelectorAll('.navbar__item')
  const el = e.currentTarget

  nav_items.forEach((item) => {
    item.classList.remove(active_class)
  })

  el.classList.add(active_class)
}

const themeSwitch = (e) => {
  const el = e.target
  const app = document.querySelector('.App')

  const theme = {
    dark: 'dark',
    sun: 'fa-sun',
    moon: 'fa-moon',
  }

  app.classList.toggle(theme.dark)

  if (el.classList.contains(theme.sun)) {
    el.classList.remove(theme.sun)
    el.classList.add(theme.moon)
  } else {
    el.classList.remove(theme.moon)
    el.classList.add(theme.sun)
  }
}

const navitemsData = [
  { link: '/', icon: 'icon fas fa-home', description: 'inicio' },
  { link: '/sobre', icon: 'icon fas fa-id-badge', description: 'sobre' },
  { link: '/skills', icon: 'icon fas fa-star', description: 'skills' },
  { link: '/works', icon: 'icon fas fa-book-open', description: 'portfolio' },
  { link: '/contato', icon: 'icon fas fa-paper-plane', description: 'contato' },
]

function navItemTemplate(data, index) {
  return (
    <div
      className={`navbar__item ${index === 0 ? active_class : ''}`}
      onClick={clickHandler}
      key={index}
    >
      <Link to={data.link}>
        <i className={data.icon}></i>
        <h3>{data.description}</h3>
      </Link>
    </div>
  )
}

function Navbar() {
  const navitems = navitemsData.map((item, index) =>
    navItemTemplate(item, index)
  )

  return (
    <nav className="navbar">
      <div className="navbar__menu">
        {navitems}

        <i
          className="navbar__item theme-switcher fas fa-moon"
          onClick={themeSwitch}
        ></i>
      </div>
    </nav>
  )
}

export default Navbar
