import {Injectable} from '@angular/core'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService) {}

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  itemsValue(): number {
    return this.cartService.total()
  }

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item)
  }
  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item)
  }
  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }
}
