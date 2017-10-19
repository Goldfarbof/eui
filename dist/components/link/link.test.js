'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _required_props = require('../../test/required_props');

var _link = require('./link');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('KuiLink', function () {
  test('is rendered', function () {
    var component = (0, _enzyme.render)(_react2.default.createElement(_link.KuiLink, _extends({
      href: '#',
      target: '_blank'
    }, _required_props.requiredProps)));

    expect(component).toMatchSnapshot();
  });
});
//# sourceMappingURL=link.test.js.map