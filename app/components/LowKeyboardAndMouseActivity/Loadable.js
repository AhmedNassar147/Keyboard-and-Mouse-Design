/**
 *
 * Asynchronously loads the component for LowKeyboardAndMouseActivity
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
