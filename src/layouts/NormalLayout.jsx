import React from 'react';
import s from './NormalLayout.scss';

class NormalLayout extends React.Component {
  render() {
    return (
      <div className={s.normalLayout}>
        {this.props.children}
      </div>
    );
  }
}

export default NormalLayout;
