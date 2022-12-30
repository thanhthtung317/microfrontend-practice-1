import {mount} from 'products/ProductsIndex'
import {mount as cartMount} from 'cart/cartIndex';

mount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))
console.log('container');