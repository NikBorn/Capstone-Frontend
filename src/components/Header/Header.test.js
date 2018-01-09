import { shallow, configure } from 'enzyme';
import Header from './Header';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Header snapshot', () => {

  it('should always match the snapshot', () => {

    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});