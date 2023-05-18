import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RocketCard from '../components/RocketCard';
import store from '../redux/store';

describe('Test component\'s correct rendering', () => {
  test('test site\'s rendering', () => {
    const rocket = {
      id: 'item_1',
      name: 'Falcon Heavy',
      description: 'Falcon Heavy Description',
      flickr_images: [
        'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
      ],
    };
    render(
      <Provider store={store}>
        <RocketCard key={rocket.id} rocket={rocket} />
      </Provider>,
    );
    const rocketName = screen.queryByRole('heading', { level: 2 });
    expect(rocketName.innerHTML).toBe('Falcon Heavy');
  });
});

describe('test conditional elemets\' display', () => {
  test('Test display of \'Reserve Rocket\'', () => {
    const rocket = {
      id: 'item_1',
      name: 'Falcon Heavy',
      description: 'Falcon Heavy Description',
      flickr_images: [
        'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
      ],
      reserved: false,
    };
    render(
      <Provider store={store}>
        <RocketCard key={rocket.id} rocket={rocket} />
      </Provider>,
    );
    const reserveButton = screen.queryByRole('button');
    expect(reserveButton.innerHTML).toBe('Reserve Rocket');
  });

  test('Test display of \'Cancel Reservation\'', () => {
    const rocket = {
      id: 'item_1',
      name: 'Falcon Heavy',
      description: 'Falcon Heavy Description',
      flickr_images: [
        'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
      ],
      reserved: true,
    };
    render(
      <Provider store={store}>
        <RocketCard key={rocket.id} rocket={rocket} />
      </Provider>,
    );
    const reserveButton = screen.queryByRole('button');
    expect(reserveButton.innerHTML).toBe('Cancel Reservation');
  });

  test('Test display of \'Reserved\' badge', () => {
    const rocket = {
      id: 'item_1',
      name: 'Falcon Heavy',
      description: 'Falcon Heavy Description',
      flickr_images: [
        'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
      ],
      reserved: true,
    };
    render(
      <Provider store={store}>
        <RocketCard key={rocket.id} rocket={rocket} />
      </Provider>,
    );
    const reserveBadge = screen.queryByText('Reserved');
    expect(reserveBadge).toBeInTheDocument();
  });

  test('Test not displaying \'Reserved\' badge when not reserved', () => {
    const rocket = {
      id: 'item_1',
      name: 'Falcon Heavy',
      description: 'Falcon Heavy Description',
      flickr_images: [
        'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
      ],
      reserved: false,
    };
    render(
      <Provider store={store}>
        <RocketCard key={rocket.id} rocket={rocket} />
      </Provider>,
    );
    const reserveBadge = screen.queryByText('Reserved');
    expect(reserveBadge).not.toBeInTheDocument();
  });
});

describe('snapshot test', () => {
  it('page renders', () => {
    const rocket = {
      id: 'item_1',
      name: 'Falcon Heavy',
      description: 'Falcon Heavy Description',
      flickr_images: [
        'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        'https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg',
      ],
      reserved: true,
    };
    const rocketCard = renderer.create(
      <Provider store={store}>
        <RocketCard rocket={rocket} />
      </Provider>,
    );

    const tree = rocketCard.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
