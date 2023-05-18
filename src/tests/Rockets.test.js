import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import Rockets from '../components/Rockets';
import store from '../redux/store';

describe('rockets render test', () => {
  it('page displays', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const rocketNames = [
      'Falcon 1',
      'Falcon 9',
      'Falcon Heavy',
      'Starship',
    ];
    await waitFor(() => {
      const falcons = screen.getAllByTestId('rocket-header');
      expect(falcons.length).toBe(4);
      falcons.forEach((falcon, index) => {
        expect(falcon.innerHTML).toBe(rocketNames[index]);
      });
    });
  });

  it('test reserve bardge and cancel button', async () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    await waitFor(() => {
      const resBtns = screen.getAllByTestId('reserve-button');
      resBtns.forEach((btn) => {
        expect(btn.innerHTML).toBe('Reserve Rocket');
      });
      resBtns.forEach((btn) => {
        btn.click();
      });
    });
    await waitFor(() => {
      const canBtns = screen.getAllByTestId('cancel-button');
      canBtns.forEach((btn) => {
        expect(btn.innerHTML).toBe('Cancel Reservation');
      });
    });
    await waitFor(() => {
      const resBadges = screen.getAllByTestId('reserved-badge');
      resBadges.forEach((badge) => {
        expect(badge.innerHTML).toBe('Reserved');
      });
    });
  });
});
