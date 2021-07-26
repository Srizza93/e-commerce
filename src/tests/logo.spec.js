import { mount } from '@vue/test-utils'
import Component from '../vue/SearchBar.vue'

describe('Component', () => {
  it('render the logo', () => {
    const wrapper = mount(Component)
    expect(wrapper.find('.logo').exists()).toBe(true)
  })
})