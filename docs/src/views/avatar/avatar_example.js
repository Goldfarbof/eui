import React from 'react';

import { renderToHtml } from '../../services';

import {
  GuidePage,
  GuideSection,
  GuideSectionTypes,
} from '../../components';

import {
  EuiCode,
} from '../../../../src/components';

import Avatar from './avatar';
const avatarSource = require('!!raw-loader!./avatar');
const avatarHtml = renderToHtml(Avatar);

export default props => (
  <GuidePage title={props.route.name}>
    <GuideSection
      title="Avatar"
      source={[{
        type: GuideSectionTypes.JS,
        code: avatarSource,
      }, {
        type: GuideSectionTypes.HTML,
        code: avatarHtml,
      }]}
      text={
        <p>
          The <EuiCode>Avatar</EuiCode> component creates a user icon. It will
          accept <EuiCode>name</EuiCode> (required) and <EuiCode>image</EuiCode> props
          and will configure the display and accessibility as needed. The background colors
          come from the set of colors used for visualiations.
        </p>
      }
      demo={<Avatar />}
    />
  </GuidePage>
);
