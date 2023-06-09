import React from 'react';
import {Space, Spin } from 'antd';
const Loader = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
      marginTop: '100px',
      alignItems:'center'
    }}
  >
    <Space>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);
export default Loader;