import { mount } from '@vue/test-utils'
import Component from '../vue/Footer.vue'

describe('Component', () => {
  it('footer links are rendered', () => {
    const wrapper = mount(Component)
    const links = wrapper.findAll('.footer_ul_li_link')
    for (let i = 0; i < links.length; i++) {
      expect(links.at(i).attributes().href).toBe('./research.html')
    }
  })
})