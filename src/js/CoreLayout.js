import React from 'react';
import classNames from 'classnames';

class CoreLayout extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default CoreLayout;
