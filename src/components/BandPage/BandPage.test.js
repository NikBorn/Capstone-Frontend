import { shallow, configure } from 'enzyme';
import BandPage from './BandPage';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('BandPage snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<BandPage />);

    expect(wrapper).toMatchSnapshot();
  });
});