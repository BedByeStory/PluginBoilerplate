import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from './Component';

const adapter = new Adapter();
configure({ adapter });

describe('Component', () => {
  test('Should be a function', () => {
    shallow(<Component />);
  });
});
