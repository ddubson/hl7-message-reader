import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('Event Information', () => {
    it('should display event code', () => {
      expect(wrapper.find("Field[title='Event Code']").prop('value')).toEqual('A01');
    });
  });

  describe('Patient Information', () => {
    it('should display patient first and last name', () => {
      expect(wrapper.find("Field[title='Patient Name']").prop('value')).toEqual('APPLESEED III, JOHN A');
    });
  });
});
