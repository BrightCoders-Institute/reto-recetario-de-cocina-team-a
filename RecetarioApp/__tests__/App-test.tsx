/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import HorizontalList from '../components/homeScreen/horizontalList';
import Modal1 from '../components/homeScreen/Modal';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native';
// let component;
// describe('</app>', () => {
//   component = renderer(<App/>);
//  });
describe('Test in App', () => {
  it('renders the app correctly', () => {
    renderer.create(<App />);
  });
  it('renders the HorizontalList component',()=>{
    renderer.create(<HorizontalList height={300} width={130} size={130} type={'RECENT'} padding="11%"/>);
  });
});

describe('Modal', () => {
  // it('El modal debe ser visible cuando isVisible sea true',()=>{
  //   const {getByTestId} = renderer(
  //     <Modal1 isVisible={true} onClose={()=>{}} recipe={{}} type=''/>
  //   );
  //   const modalContainer = getByTestId('modal-container')
  // });
  it('test_modal_visible', () => {
    const mockModal = {
        isVisible: true,
        onClose: jest.fn(),
        recipe: {
          nombre: 'Test Recipe',
          personas: 4,
          id: 1,
          imagen: 'https://testimage.com',
          ingredientes: [
            {
              nombre: 'Ingredient 1',
              cantidad: '1',
            },
            {
              nombre: 'Ingredient 2',
              cantidad: '2',
            },
          ],
        },
        type: 'Test Type',
    };
    render(<Modal1 {...mockModal} />);
    expect(screen.getByText('Test Recipe')).toBeTruthy();
  });
});
