import { mount } from '@vue/test-utils'
import Component from '../vue/SearchBar.vue'

describe('Component', () => {
  it('open the cart', () => {
    const wrapper = mount(Component)
    const button = wrapper.find('.container-cart')
    expect(button.attributes().href).toBe('./cart.html')
  })
})

describe('Component', () => {
  it('render the cart logo', () => {
    const wrapper = mount(Component)
    const button = wrapper.find('.container-cart_cart-logo')
    expect(button.exists()).toBe(true)
  })
})