import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'layer-cart-v1'

function readCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function useCart() {
  const [items, setItems] = useState(readCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  function addItem(product, size = 'M') {
    setItems(current => {
      const key = `${product.id}-${size}`
      const found = current.find(item => item.key === key)
      if (found) {
        return current.map(item =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...current, {
        key,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        quantity: 1
      }]
    })
  }

  function updateQuantity(key, quantity) {
    setItems(current =>
      quantity <= 0
        ? current.filter(item => item.key !== key)
        : current.map(item => item.key === key ? { ...item, quantity } : item)
    )
  }

  function clearCart() {
    setItems([])
  }

  return { items, count, subtotal, addItem, updateQuantity, clearCart }
}
