import { mount } from '@vue/test-utils'
import Component from '../vue/HomeContent.vue'

describe('Component', () => {
  it('home content links are rendered', () => {
    const wrapper = mount(Component)
    const links = wrapper.findAll('.galery__topics_link')
    for (let i = 0; i < links.length; i++) {
      expect(links.at(i).attributes().href).toBe('./research.html')
    }
  })
})