import { mount } from '@vue/test-utils'
import Component from '../vue/SearchBar.vue'

describe('Component', () => {
  it('click on search successfully', () => {
    const wrapper = mount(Component)
    const button = wrapper.find('.lens')
    expect(button.attributes().href).toBe('./research.html')
  })
})