import React, { useState, useEffect } from 'react'
import './header.css'

export const Header = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true)

  const handleScroll = () => {
    const scrollY = window.scrollY
    const newIsNavbarTransparent = scrollY === 0
    setIsNavbarTransparent(newIsNavbarTransparent)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarClass = isNavbarTransparent ? 'navbar-default' : 'navbar-default-transparent'

  return (
    <nav id="menu" className={`navbar ${navbarClass} navbar-fixed-top`}>
          <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">Toggle navigation</span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <div className="navbar-brand">
            Baiainfreschi.it
            </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#description" className="page-scroll">
                DESCRIZIONE
              </a>
            </li>
            <li>
              <a href="#infosection" className="page-scroll">
                COME ARRIVARE ALLA BAIA DA SALERNO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
