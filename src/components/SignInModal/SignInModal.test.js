import { shallow, configure } from 'enzyme';
import SignInModal from './SignInModal';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
/* eslint-disable no-undef */

configure({ adapter: new Adapter() });


describe('SignInModal snapshot', () => {

  it('should always match the snapshot', () => {
      const mkFun = jest.fn();
      const wrapper = shallow(<SignInModal
          close={mkFun} />);

    expect(wrapper).toMatchSnapshot();
  });
});
