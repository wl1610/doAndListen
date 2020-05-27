import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home'

import styles from './PCIndex.module.less';

interface Props {
  match: any
}

class PCIndex extends Component<Props, {}> {
  render() {
    const { match } = this.props;

    return (
      <div className={styles.box}>
        <Route path={match.path} exact component={Home}/>
      </div>
    );
  }
}

export default PCIndex;

