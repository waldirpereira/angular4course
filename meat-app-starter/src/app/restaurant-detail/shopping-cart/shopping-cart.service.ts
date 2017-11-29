import {MenuItem} from '../menu-item/menu-item.model'
import {CartItem} from './cart-item.model'

export class ShoppingCartService {
  items: CartItem[] = []

  clear() {
    this.items = []
  }

  addItem(menuItem: MenuItem){
    let foundItem = this.items.find((cItem) => cItem.menuItem.id === menuItem.id)
    if (foundItem) {
      this.increaseQuantity(foundItem)
      return
    }

    this.items.push(new CartItem(menuItem))
  }

  increaseQuantity(item: CartItem) {
    ++item.quantity
  }
  decreaseQuantity(item: CartItem) {
    --item.quantity
    if (item.quantity === 0)
      this.removeItem(item)
  }

  removeItem(cartItem: CartItem){
    this.items.splice(this.items.indexOf(cartItem), 1)
  }

  total(): number {
    return this.items
      .map(cartItem => cartItem.value())
      .reduce((prev, value) => prev + value, 0)
  }
}
