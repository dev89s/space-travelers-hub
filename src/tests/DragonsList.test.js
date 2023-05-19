import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DragonsList from '../components/DragonsList';
import Dragon from '../components/Dragon';

describe('unit  tests for Dragons page', () => {
  test('Dragons list component render Correctly', () => {
    const { unmount } = render(
      <Provider store={store}>
        <DragonsList />
      </Provider>,
    );
    unmount();
  });

  test('Dragon component render Correctly', () => {
    const { unmount } = render(
      <Provider store={store}>
        <Dragon />
      </Provider>,
    );
    unmount();
  });
});
