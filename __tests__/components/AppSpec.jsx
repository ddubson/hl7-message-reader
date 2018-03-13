import React from 'react';
import App from '../../src/components/App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('Event Information', () => {
    it('should display event code', () => {
      expect(wrapper.find("[data-test='event-code']").text()).toEqual("A01");
    });
  });

  describe('Patient Information', () => {
    it('should display patient first and last name', () => {
      expect(wrapper.find("[data-test='full-name']").text()).toEqual("APPLESEED III, JOHN A");
    });
  });
});