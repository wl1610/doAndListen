import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'lib-flexible'

import Home from './Home/Home'

import styles from './MobileIndex.module.less';

interface Props {
  match: any
}

class MobileIndex extends Component<Props, {}> {
  render() {
    const { match } = this.props;

    return (
      <div className={styles.box}>
        <Route path={match.path} exact component={Home}/>
      </div>
    );
  }
}

export default MobileIndex;
