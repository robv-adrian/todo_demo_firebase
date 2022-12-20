import Amplitude from 'amplitude-js';

import Analytics, { EVENTS } from 'shared/analytics';

Analytics.init(
  Amplitude,
  process.env.REACT_APP_AMPLITUDE_KEY,
  process.env.REACT_APP_TRACK_ANALYTICS_EVENTS
);

export { EVENTS };
export default Analytics;
