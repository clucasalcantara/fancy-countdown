import { render } from '@testing-library/react';
import {Countdown} from './Countdown';

test('renders learn react link', () => {
  const container = render(<Countdown />);
  expect(container).toMatchSnapshot();
});
