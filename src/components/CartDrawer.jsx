import { Minus, Plus, X, ShoppingBag } from 'lucide-react'
import { formatNPR } from '../data/products'

export default function CartDrawer({ open, onClose, cart, onUpdate }) {
  if (!open) return null

  // function checkout() {
  //   const lines = cart.items.map(item =>
  //     `${item.name} — size ${item.size} × ${item.quantity}: ${formatNPR(item.price * item.quantity)}`
  //   )
  //   const message = `Hi LAYER! I'd like to order:\n${lines.join('\n')}\nSubtotal: ${formatNPR(cart.subtotal)}\nPlease confirm delivery and payment details.`
  //   window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  // }


async function checkout() {
  const lines = cart.items.map(item =>
    `${item.name} — Size ${item.size} × ${item.quantity}: ${formatNPR(item.price * item.quantity)}`
  )

  const message = `Hi LAYER! I'd like to order:\n${lines.join('\n')}\nSubtotal: ${formatNPR(cart.subtotal)}\nPlease confirm delivery and payment details.`

  try {
    await navigator.clipboard.writeText(message)
    window.open('https://www.instagram.com/layernp/', '_blank', 'noopener,noreferrer')
    alert('Order details copied! Paste them into our Instagram DM to place your order.')
  } catch {
    window.open('https://www.instagram.com/layernp/', '_blank', 'noopener,noreferrer')
    alert('Please message us on Instagram with your order details.')
  }
}


  return (
    <div className="drawer-backdrop" onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-header">
          <div><span className="eyebrow">YOUR SELECTION</span><h2 id="cart-title">Your bag <span>({cart.count})</span></h2></div>
          <button className="icon-button" onClick={onClose} aria-label="Close cart"><X /></button>
        </div>
        {cart.items.length === 0 ? (
          <div className="empty-cart"><ShoppingBag size={32} strokeWidth={1.2} /><h3>Your bag is taking it slow.</h3><p>Find your everyday essentials and start your LAYER look.</p><button className="button button-dark" onClick={onClose}>Explore the drop</button></div>
        ) : (
          <>
            <div className="cart-items">
              {cart.items.map(item => (
                <div className="cart-item" key={item.key}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-copy">
                    <h3>{item.name}</h3><p>Size: {item.size}</p><strong>{formatNPR(item.price)}</strong>
                    <div className="quantity-control">
                      <button onClick={() => onUpdate(item.key, item.quantity - 1)} aria-label="Decrease quantity"><Minus size={13} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdate(item.key, item.quantity + 1)} aria-label="Increase quantity"><Plus size={13} /></button>
                    </div>
                  </div>
                  <button className="remove-item" onClick={() => onUpdate(item.key, 0)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="subtotal"><span>Subtotal</span><strong>{formatNPR(cart.subtotal)}</strong></div>
              <p>Delivery is confirmed with you before the order is finalised.</p>
              <button className="button button-dark button-full" onClick={checkout}>Order via instagram ↗</button>
              <span className="checkout-note">A message will open for order confirmation.</span>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
