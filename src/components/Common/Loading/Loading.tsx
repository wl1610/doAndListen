import React from 'react';

import { Spin, Icon } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const Loading: React.FC = () => {
  return (
    <div style={{ 'width': '100%', 'height': '100%', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
      <Spin tip='正在加载...' size={'large'} indicator={antIcon} />
    </div>
  );
}

export default Loading;
