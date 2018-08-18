import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DateHistogram from '../components/DateHistogram';

storiesOf('Date Histogram', module)
  .add('Default', () => (
    <div style={{ height: 500, width: 500, overflow: 'hidden', margin: 'auto' }}>
      <DateHistogram onClick={action('clicked')} />
    </div>
  ));
