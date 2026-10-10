import { useState } from 'react'
import { ArrowDownRight, ArrowRight, Check, Headphones, RefreshCw, ShieldCheck, Truck  , Clock1} from 'lucide-react'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import SizeGuide from './components/SizeGuide.jsx'
import { products, matchingSet, formatNPR } from './data/products'
import { useCart } from './hooks/useCart'
import heroVideo from './assets/hero.mp4'
import size1 from './assets/img1.jpeg'
import set from './assets/Set.png'
import hoodie from './assets/hoodie.jpeg'
import trouser from './assets/trouser.jpeg'
import basantapur from './assets/cafehop.png'

export default function App() {
  const cart = useCart()
  const [cartOpen, setCartOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  function addToCart(product, size = 'M') {
    cart.addItem(product, size)
    setCartOpen(true)
  }

  function subscribe(event) {
    event.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterMessage('Enter a valid email address to join the list.')
      return
    }
    setNewsletterMessage('Thanks for your interest. Newsletter signup needs to be connected to an email service before launch.')
  }

  return (
    <>
      <div className="announcement-bar">DROP 001 IS HERE <span>—</span> EVERYDAY ESSENTIALS, MADE SIMPLE .. 10% OFF ON ALL ITEMS</div>
      <Header cartCount={cart.count} onCartOpen={() => setCartOpen(true)} />

      <main>
        <section className="hero" id="home">
         <video
            className="hero-image"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Streetwear editorial with a relaxed urban look"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow eyebrow-light">THE FIRST DROP · 001</span>
            <h1>Less noise.<br />More layers.</h1>
            <p>Timeless essentials for your everyday.</p>
            <a className="button button-light" href="#shop">Shop the collection <ArrowRight size={16} /></a>
          </div>
          <a className="hero-scroll" href="#shop"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17} /></a>
          <span className="hero-index">01 / 03</span>
        </section>

        <section className="collection section-pad" id="shop">
          <div className="collection-intro">
            <span className="eyebrow">THE COLLECTION</span>
            <h2>One colour.<br />Two essentials.</h2>
            <p>Thoughtful everyday pieces, designed to move with you. Same comfort. Same vibe. Better together.</p>
            <div className="feature-mini-grid">
              <div><span className="feature-symbol">01</span><span>Everyday<br />comfort</span></div>
              <div><span className="feature-symbol">02</span><span>Relaxed<br />fit</span></div>
              <div><span className="feature-symbol">03</span><span>Easy to<br />style</span></div>
            </div>
          </div>
          {products.map(product => <ProductCard key={product.id} product={product} onAdd={addToCart} />)}
          <article className="set-card">
            <div className="set-image"><img src={matchingSet.image} alt={matchingSet.alt} loading="lazy" /><span className="set-badge">THE FULL LOOK</span></div>
            <div className="set-copy">
              <span className="eyebrow">SAVE WITH THE SET</span>
              <h3>{matchingSet.name}</h3>
              <p>{matchingSet.subtitle}</p>
              <div className="set-price">{formatNPR(matchingSet.price)}
                 <span>Hoodie + trousers</span></div>
                 <button className="button button-dark button-full" onClick={() => addToCart(matchingSet, 'M')}>Add set to bag <ArrowRight size={15} />
                 </button></div>
          </article>
        </section>

        <section className="story" id="story">
          <img src={basantapur} alt="Everyday streetwear styling in the city" loading="lazy" />
          <div className="story-shade" />
          <div className="story-copy"><span className="eyebrow eyebrow-light">WEAR IT YOUR WAY</span><h2>Coffee runs.<br />Late nights.<br />No plans.</h2><p>LAYER fits into your everyday.</p><a href="#details" className="text-link light-link">Discover the details <ArrowRight size={16} /></a></div>
          <span className="story-caption">BUILT FOR THE IN-BETWEEN.</span>
        </section>

        <section className="service-strip" aria-label="Shopping benefits">
          <div><Truck /><h3>Delivery across Nepal</h3><p>Delivery options confirmed at checkout</p></div>
          <div><ShieldCheck /><h3>Clear payment options</h3><p>Confirm available methods when ordering</p></div>
          <div><RefreshCw /><h3>Exchange support</h3><p>Ask us about size exchanges</p></div>
          <div><Headphones /><h3>Real human support</h3><p>Message us with any questions</p></div>
        </section>

        <section className="details-section section-pad" id="details">
         <div className="details-columns">
            <div className="size-block"><h3>Size guide</h3><p className="muted-copy">Find your comfortable fit.</p><SizeGuide /></div>
            <div className="delivery-block"><h3>Delivery & exchanges</h3><p className="muted-copy">Simple, transparent, Hassle Free.</p>
              <div className="detail-row"><Clock1 /><div><strong>Delivery Time</strong>
              <p>Kathmandu Valley: 1-3 days</p>
              <p>Outside Valley 3-7 days</p>
              </div></div>
               <div className="detail-row"><Truck /><div><strong>Delivery Fee</strong>
              <p>Kathmandu Valley: NRS 100</p>
              <p>Outside Valley: NRS 150</p>
              </div></div>
              <div className="detail-row"><RefreshCw /><div><strong>Exchange policy</strong><p>Within 5 days of delevery. Product should be unworn and in original condition.</p></div></div>
              <div className="detail-row"><ShieldCheck /><div><strong>Payment</strong><p>Esewo, Khaltl, Bank Transfer, Cash on Delivery (COD).</p></div></div>
            </div>
          </div>
        </section>

        <section className="instagram-section section-pad">
          <div className="instagram-heading"><div><span className="eyebrow">THE LAYER LIFE</span><h2>Out there, in LAYER.</h2></div><a className="text-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Follow on Instagram ↗</a></div>
          <div className="instagram-grid">
            <img src={size1} alt="Streetwear inspiration" loading="lazy" />
            <img src={hoodie} alt="Hoodie detail" loading="lazy" />
            <img src={trouser} alt="Streetwear outfit inspiration" loading="lazy" />
            <img src={set} alt="Relaxed trousers detail" loading="lazy" />
            <a href="https://www.instagram.com/layernp/" target="_blank" rel="noreferrer" className="instagram-follow"><span>FOLLOW ALONG</span><strong>@layer.nepal ↗</strong></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><a className="wordmark footer-wordmark" href="#home">LAYER<span>.</span></a><p>Minimal pieces. Maximum moments.</p><span className="made-in">MADE FOR EVERYDAY.</span></div>
          <div className="newsletter"><span className="eyebrow eyebrow-light">STAY IN THE LOOP</span><h2>Good things, occasionally.</h2><p>New drops, restocks and everything LAYER.</p><form onSubmit={subscribe} className="newsletter-form"><label className="sr-only" htmlFor="email">Your email address</label><input id="email" type="email" placeholder="Your email address" value={email} onChange={event => setEmail(event.target.value)} /><button aria-label="Join newsletter" type="submit"><ArrowRight /></button></form>{newsletterMessage && <p className="newsletter-message" role="status">{newsletterMessage}</p>}</div>
          <div className="footer-links"><a href="#shop">Shop</a><a href="#story">Our story</a><a href="#details">Help & sizing</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} LAYER. All rights reserved.</span><span>AN INDEPENDENT EVERYDAY BRAND.</span><a href="#home">Back to top ↑</a></div>
      </footer>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onUpdate={cart.updateQuantity} />
    </>
  )
}
