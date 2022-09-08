import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../../src/features/store';
import { fireEvent, render } from '@testing-library/react-native';
import FavouriteCatlist from '../../src/components/FavouriteCatList';
import { PersistGate } from 'redux-persist/integration/react';


describe('<FavouriteCatlist/> tests', () => {
    test('should render the FavouriteCatlist', () => {
        const { toJSON } =
            render(<Provider store={store}>
                <PersistGate persistor={persistor}>
                    <FavouriteCatlist />
                </PersistGate>
            </Provider>);
        expect(toJSON()).toMatchSnapshot();


    });

    // it('should fire onPress when pressed', () => {
    //     const onPressMock = jest.fn();
    //     const { queryByTestId } = render(<CryptoCard onPress={onPressMock} />);
    //     fireEvent.press(queryByTestId('crypto-card'));

    //     expect(onPressMock).toHaveBeenCalledTimes(1);
    // });

    // it('should display a title (name), amount, amountInBtc, timeFrame', () => {
    //     const { getByText } = render(
    //         <CryptoCard
    //             name="Btc"
    //         // amount="2,000"
    //         // amountInBtc="0.002"
    //         // timeFrame="24 hrs"
    //         />,
    //     );

    //     expect(getByText('Btc')).toBeTruthy();
    //     // expect(getByText('2,000')).toBeTruthy();
    //     // expect(getByText('0.002')).toBeTruthy();
    //     // expect(getByText('24 hrs')).toBeTruthy();
    // });
});
