import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Control from './Control.jsx';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    isInitiallyChecked: PropTypes.bool,
    onChange: PropTypes.func,
  }

  render() {
    return <Control type="checkbox" {...this.props} />;
  }
}