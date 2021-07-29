import { mount } from "@vue/test-utils";
import "regenerator-runtime/runtime";
import Component from "../vue/Payment/PersonalInfo.vue";

test("input value is transmitted", async () => {
  const wrapper = mount(Component, {
    propsData: {
      person: [
        {
          id: 1,
          text: "name",
          infos: [
            {
              id: 1,
              identity: "fname",
              name: "firstname",
              text: "First Name",
            },
          ],
        },
      ],
      countries: [
        {
          id: 1,
          name: "Italy",
          prefix: "+39",
        },
      ],
    },
  });
  const inputs = wrapper.findAll("input.payment-container_form_input");
  for (let i = 0; i < inputs.length; i++) {
    await inputs.at(i).setValue('hello world')
    expect(inputs.at(i).element.value).toBe('hello world')
  }
});
