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

    it('should display recorded date time', () => {
      expect(wrapper.find("Field[title='Recorded Date/Time']").prop('value')).toEqual('201301011223');
    });
  });

  describe('Patient Information', () => {
    it('should display patient first and last name', () => {
      expect(wrapper.find("Field[title='Patient Name']").prop('value')).toEqual('APPLESEED III, JOHN A');
    });

    it('should display patient sex', () => {
      expect(wrapper.find("Field[title='Patient Sex']").prop('value')).toEqual('M');
    });
  });
});
