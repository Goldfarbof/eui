import React from 'react';

import {
  KuiFlexGrid,
  KuiFlexItem,
  KuiIcon,
  KuiPanel,
  KuiText,
} from '../../../../src/components';

const iconTypes = [
  'logoKibana',
  'logoSlack',
  'logoGmail',
  'logoWebhook',
  'logoElastic',
  'logoElasticSearch',
  'logoElasticStack',
  'logoBeats',
  'logoLogstash',
  'logoXpack',
];

export default () => (
  <KuiFlexGrid columns={4}>
    {
      iconTypes.map(iconType => (
        <KuiFlexItem
          className="guideDemo__icon"
          key={iconType}
          style={{ width: '200px' }}
        >
          <KuiPanel>
            <KuiIcon
              type={iconType}
              size="large"
            />
            <KuiText size="s">
              <p>{iconType}</p>
            </KuiText>
          </KuiPanel>
        </KuiFlexItem>
      ))
    }
  </KuiFlexGrid>
);
