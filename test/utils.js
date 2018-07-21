import { shallow, mount } from 'enzyme';

export const shallowWithStore = (component, store) => {
  return shallow(component, { context: { store } });
};

export const mountWithStore = (component, store) => {
  return mount(component, { context: { store } });
};
