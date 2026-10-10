
import hoodie from '../assets/hoodie.jpeg'
import trouser from '../assets/trouser.jpeg'
import set from '../assets/Set.png'
export const products = [
  {
    id: 'hoodie',
    name: 'The Hoodie',
    subtitle: 'Oversized fit · Heavyweight feel',
    price: 2500,
    category: 'Top',
    image: hoodie,
    alt: 'Black hoodie photographed in a minimal studio'
  },
  {
    id: 'trousers',
    name: 'The Trousers',
    subtitle: 'Straight fit · Elastic waist',
    price: 1900,
    category: 'Bottom',
    image: trouser,
    alt: 'Minimal dark casual trousers'
  }
]

export const matchingSet = {
  id: 'set',
  name: 'The Matching Set',
  subtitle: 'The full look · Better together',
  price: 3600,
  category: 'Set',
  image: set,
  alt: 'Matching hoodie and trousers set'
}

export const sizes = ['M', 'L', 'XL']

export const formatNPR = (amount) =>
  new Intl.NumberFormat('en-NP', {
    style: 'currency',
    currency: 'NPR',
    maximumFractionDigits: 0
  }).format(amount)
