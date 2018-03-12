import React from 'react';
import App from '../../src/components/App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should display patient first and last name', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("[data-test='full-name']").text()).toEqual("APPLESEED III, JOHN A");
  });
});