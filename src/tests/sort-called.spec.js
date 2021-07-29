import { mount } from "@vue/test-utils";
import "regenerator-runtime/runtime";
import Component from "../vue/Results/Sort.vue";

test("sort function is called", async () => {
  const wrapper = mount(Component, {
    propsData: {
      id: 1,
      text: 'Price (lowest first)'
    }
  });
  await wrapper.find(".products_sort_option_button").trigger("click");
  expect(wrapper.emitted()).toHaveProperty("sortProductsAndUpdate");
});
