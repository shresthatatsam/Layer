import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

export default function Header({ cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : 'is-transparent'}`}>
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="LAYER home">LAYER<span>.</span></a>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#shop" onClick={closeMenu}>Shop</a>
        <a href="#story" onClick={closeMenu}>Our story</a>
        <a href="#details" onClick={closeMenu}>Details</a>
      </nav>
      <div className="header-actions">
        <a className="icon-button search-link" href="#shop" aria-label="Browse products"><Search size={19} strokeWidth={1.6} /></a>
        <button className="icon-button cart-trigger" onClick={onCartOpen} aria-label={`Open cart, ${cartCount} items`}>
          <ShoppingBag size={19} strokeWidth={1.6} />
          <span className="cart-count">{cartCount}</span>
        </button>
        <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
