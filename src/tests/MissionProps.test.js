/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import MissionProps from '../components/MissionsProps';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MissionProps component', () => {
  const mockDispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  test('renders mission details correctly', () => {
    const mission = {
      id: '1',
      missionName: 'Mission 1',
      description: 'Mission 1 description',
      reserved: false,
    };

    render(<MissionProps {...mission} />);

    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 1 description')).toBeInTheDocument();
  });
});
