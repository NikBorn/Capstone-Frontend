import { shallow, configure } from 'enzyme';
import EventsContainer from './EventsContainer';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('EventsContainer snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<EventsContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});