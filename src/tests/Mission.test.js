import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Missions from '../components/Missions';

const mission = renderer.create(
  <Provider store={store}>
    <Missions />
  </Provider>,
);

describe('Mission component test', () => {
  test('Check if the missions section are available', () => {
    expect(mission).toMatchSnapshot();
  });
  test('Check if the "Description" there', () => {
    expect(mission.root.findAllByProps({ children: 'Description' })).toHaveLength(1);
  });
});

const mockMissions = [
  {
    id: '1', name: 'Mission 1', description: 'Mission 1 description', reserved: false,
  },
  {
    id: '2', name: 'Mission 2', description: 'Mission 2 description', reserved: true,
  },
];

describe('Mission component test', () => {
  test('renders mission id correctly', () => {
    expect(mockMissions[0].id).toBe('1');
  });
  test('renders mission name correctly', () => {
    expect(mockMissions[1].name).toBe('Mission 2');
  });
  test('renders mission reservation correctly', () => {
    expect(mockMissions[0].reserved).toBe(false);
  });
});
