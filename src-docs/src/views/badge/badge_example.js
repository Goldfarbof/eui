import React from 'react';

import { renderToHtml } from '../../services';

import {
  GuideSectionTypes,
} from '../../components';

import {
  EuiBadge,
  EuiCode,
  EuiBetaBadge,
  EuiLink,
  EuiNotificationBadge,
} from '../../../../src/components';

import Badge from './badge';
const badgeSource = require('!!raw-loader!./badge');
const badgeHtml = renderToHtml(Badge);

import BadgeWithIcon from './badge_with_icon';
const badgeWithIconSource = require('!!raw-loader!./badge_with_icon');
const badgeWithIconHtml = renderToHtml(BadgeWithIcon);

import BadgeButton from './badge_button';
const badgeButtonSource = require('!!raw-loader!./badge_button');
const badgeButtonHtml = renderToHtml(BadgeButton);

import BetaBadge from './beta_badge';
const betaBadgeSource = require('!!raw-loader!./beta_badge');
const betaBadgeHtml = renderToHtml(BetaBadge);

import NotificationBadge from './notification_badge';
const notificationBadgeSource = require('!!raw-loader!./notification_badge');
const notificationBadgeHtml = renderToHtml(NotificationBadge);

export const BadgeExample = {
  title: 'Badge',
  sections: [{
    source: [{
      type: GuideSectionTypes.JS,
      code: badgeSource,
    }, {
      type: GuideSectionTypes.HTML,
      code: badgeHtml,
    }],
    text: (
      <p>
        Badges are used to focus on important bits of information. Although they
        will automatically space themselves if you use them in a repetitive fashion
        it is good form to wrap them using a <EuiCode>FlexGroup</EuiCode> so
        that they will wrap when width is constrained (as is done artificially in
        the example below).
      </p>
    ),
    props: { EuiBadge },
    demo: <Badge />,
  }, {
    title: 'Badge with Icon',
    source: [{
      type: GuideSectionTypes.JS,
      code: badgeWithIconSource,
    }, {
      type: GuideSectionTypes.HTML,
      code: badgeWithIconHtml,
    }],
    text: (
      <p>
        Badges can use icons on the left and right (default) sides.
      </p>
    ),
    demo: <BadgeWithIcon />,
  }, {
    title: 'Badge with onClick events',
    source: [{
      type: GuideSectionTypes.JS,
      code: badgeButtonSource,
    }, {
      type: GuideSectionTypes.HTML,
      code: badgeButtonHtml,
    }],
    text: (
      <p>
        Badges can have onClick events applied to the badge itself or the icon within the badge.
        The later option is useful for when you might use badges in other components (like a tag
        system with autocomplete where you need close events).
      </p>
    ),
    demo: <BadgeButton />,
  }, {
    title: 'Beta badge type',
    source: [{
      type: GuideSectionTypes.JS,
      code: betaBadgeSource,
    }, {
      type: GuideSectionTypes.HTML,
      code: betaBadgeHtml,
    }],
    text: (
      <div>
        <p>
          The <EuiCode>EuiBetaBadge</EuiCode> was created specifically to call out
          modules that are not in GA. Generally the labels used are &quot;Beta&quot; or &quot;Lab&quot;.
          They require an extra <EuiCode>tooltipContent</EuiCode> to describe the purpose of the badge.
          You can pass an optional <EuiCode>title</EuiCode> prop to populate the tooltip title or html title
          attribute but by default it will use the <EuiCode>label</EuiCode>.
        </p>
        <p>
          If you pass in an <EuiCode>iconType</EuiCode>, only the icon will be used in the badge itself and
          the label will be applied as the title. Only use an icon when attaching the beta badge to small
          components like the EuiKeyPadMenuItem.
        </p>
        <p>
          They can also be used in conjunction with <EuiLink href="/#/display/card">EuiCards</EuiLink>
          &nbsp;and <EuiLink href="/#/navigation/key-pad-menu">EuiKeyPadMenuItems</EuiLink>.
        </p>
      </div>
    ),
    props: { EuiBetaBadge },
    demo: <BetaBadge />,
  }, {
    title: 'Notification badge type',
    source: [{
      type: GuideSectionTypes.JS,
      code: notificationBadgeSource,
    }, {
      type: GuideSectionTypes.HTML,
      code: notificationBadgeHtml,
    }],
    text: (
      <p>
        Used to showcase the number of notifications, alerts or hidden selections.
        Typically used in <EuiLink href="/#/layout/header">EuiHeader</EuiLink> or
        (eventually) <EuiLink href="/#/forms/filter-group">EuiFilterButtons</EuiLink>.
      </p>
    ),
    props: { EuiNotificationBadge },
    demo: <NotificationBadge />,
  }],
};
