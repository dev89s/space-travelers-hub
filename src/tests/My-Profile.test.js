import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../components/My-Profile';
import store from '../redux/store';

it('snapshot test for my profile page', () => {
  const myProfile = renderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  const tree = myProfile.toJSON();
  expect(tree).toMatchSnapshot();
});
