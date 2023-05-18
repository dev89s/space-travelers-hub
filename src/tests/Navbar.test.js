import React from 'react';
import Renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('Nav', () => {
  test('renders correctly', () => {
    const tree = Renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render Rockets correctly', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const rocketsLink = getByText(/Rockets/i);
    fireEvent.click(rocketsLink);
    expect(window.location.pathname).toBe('/rockets');
  });

  test('render Missions correctly', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const missionsLink = getByText(/Mission/i);
    fireEvent.click(missionsLink);
    expect(window.location.pathname).toBe('/missions');
  });

  test('render Dragons correctly', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const dragonsLink = getByText(/Dragons/i);
    fireEvent.click(dragonsLink);
    expect(window.location.pathname).toBe('/dragons');
  });
});
