import { renderAppToSnapshot } from 'test_utils/render';
import Spinner from '..';

describe('Spinner', () => {
    test('should render the default component', () => {
        renderAppToSnapshot(<Spinner />);
    });
});
