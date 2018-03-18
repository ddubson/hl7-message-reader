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
    expect(wrapper.find('Col').at(0).children().text())
      .toEqual(props.title);
  });

  it('should display the supplied content', () => {
    expect(wrapper.find('Col').at(1).children().text())
      .toEqual(props.value);
  });
});
