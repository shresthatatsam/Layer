import { useState } from 'react'
import { Plus } from 'lucide-react'
import { sizes, formatNPR } from '../data/products'

export default function ProductCard({ product, onAdd }) {
  const [size, setSize] = useState('M')

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className="product-tag">DROP 001</span>
        <button className="quick-add" onClick={() => onAdd(product, size)} aria-label={`Add ${product.name} size ${size} to cart`}>
          <Plus size={18} /> <span>Quick add</span>
        </button>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.subtitle}</p>
        </div>
        <strong>{formatNPR(product.price)}</strong>
      </div>
      <div className="size-picker" aria-label={`Choose size for ${product.name}`}>
        {sizes.map(option => (
          <button key={option} className={size === option ? 'selected' : ''} onClick={() => setSize(option)} aria-pressed={size === option}>
            {option}
          </button>
        ))}
      </div>
    </article>
  )
}
