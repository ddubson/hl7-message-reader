import { shallow } from 'enzyme';
import React from 'react';
import Field from '../../src/components/Field';

describe('Field', () => {
  let wrapper;
  const props = {
    title: 'My Title',
    value: 'My Value',
  };

  beforeEach(() => {
    wrapper = shallow(<Field {...props} />);
  });

  it('should display the supplied title', () => {
    expect(wrapper.find('ControlLabel').children().text()).toEqual(props.title);
  });

  it('should display the supplied content', () => {
    expect(wrapper.find('FormControlStatic').children().text()).toEqual(props.value);
  });
});
