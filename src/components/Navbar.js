import { Link } from 'react-router-dom'

const clickHandler = (e) => {
  const nav_items = document.querySelectorAll('.navbar__item');
  const el = e.currentTarget
  const classe = 'navbar__item--active'

  for (var i = 0; i < nav_items.length; i++) {
    nav_items[i].classList.remove(classe)
    nav_items[i].removeAttribute('id')
  }

  el.classList.add(classe)
  el.setAttribute('id', 'item-active')
}

const themeSwitch = (e) => {
  const el = e.target
  const app = document.querySelector('.App')

  const theme = {
    dark: 'dark',
    sun: 'fa-sun',
    moon: 'fa-moon'
  }

  app.classList.toggle('dark')

  if ( el.classList.contains(theme.sun) )
  {
      el.classList.remove(theme.sun)
      el.classList.add(theme.moon)
  }
  else
  {
    el.classList.remove(theme.moon)
    el.classList.add(theme.sun)
  }
}

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__menu'>
        <div className='navbar__item navbar__item--active' onClick={clickHandler}>
          <Link to='/'>
            <i className="icon fas fa-home"></i>
            <h3>inicio</h3>
          </Link>
        </div>

        <div className='navbar__item' onClick={clickHandler}>
          <Link to='/sobre'>
            <i className="icon fas fa-id-badge"></i>
            <h3>sobre</h3>
          </Link>
        </div>

        <div className='navbar__item' onClick={clickHandler}>
          <Link to='/skills'>
            <i className="icon fas fa-star"></i>
            <h3>skills</h3>
          </Link>
        </div>

        <div className='navbar__item' onClick={clickHandler}>
          <Link to='/works'>
            <i className="icon fas fa-book-open"></i>
            <h3>portfolio</h3>
          </Link>
        </div>

        <div className='navbar__item' onClick={clickHandler}>
          <Link to='/contato'>
            <i className="icon fas fa-paper-plane"></i>
            <h3>contato</h3>
          </Link>
        </div>

        <i className="navbar__item theme-switcher fas fa-moon" onClick={themeSwitch}></i>
      </div>
    </nav>
  )
}

export default Navbar
