import React from 'react';
import CatList from '../../src/components/CatList';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../src/features/store';



describe('<CatList/> tests', () => {
    test('should render the CatList', () => {
        const { toJSON } =
            render(<Provider store={store}>
                <PersistGate persistor={persistor}>
                    <CatList />
                </PersistGate>
            </Provider>);
        expect(toJSON()).toMatchSnapshot();


    });

    it('should fire onPress when pressed', () => {
        const onPressMock = jest.fn();
        const { queryByTestId } = render(
            <Provider store={store} >
                <PersistGate persistor={persistor}>
                    <CatList onPress={onPressMock} />
                </PersistGate>
            </Provider>
        );
        fireEvent.press(queryByTestId('CatList'));

        expect(onPressMock).toHaveBeenCalledTimes(1);
    });


});
