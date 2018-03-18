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

    it('should display patient date of birth', () => {
      expect(wrapper.find("Field[title='Date of Birth']").prop('value')).toEqual('19710101');
    });
    it('should display patient race', () => {
      expect(wrapper.find("Field[title='Race']").prop('value'))
        .toEqual('Native Hawaiian or Other Pacific Islander (2076-8)');
    });

    it('should display patient address', () => {
      expect(wrapper.find("Field[title='Patient Address']").prop('value'))
        .toEqual('1 DATICA STREET, MADISON, WI, 53005-1020');
    });

    it('should display home phone number', () => {
      expect(wrapper.find("Field[title='Home Phone Number']").prop('value'))
        .toEqual('(414)379-1212');
    });
  });
});
