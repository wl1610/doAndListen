import React from 'react';

import styles from './Home.module.less'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.box}>
       这是移动的页面
      </div>
    );
  }
}

export default Home;
