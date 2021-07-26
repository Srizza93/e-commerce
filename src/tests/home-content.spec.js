import { mount } from '@vue/test-utils'
import Component from '../vue/HomeContent.vue'

describe('Component', () => {
  it('find the result', () => {
    const wrapper = mount(Component)
    expect(wrapper.text()).toContain('Computers')
  })
})