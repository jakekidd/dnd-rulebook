import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

const Subtitle = ({title, gray, size, margin=true, underline=false}) => (
  <Title
    style={{
      color: !gray ? 'rgba(0, 0, 0, 0.9)' : size === 'small' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.8)',
      fontFamily: 'LoraBold',
      fontSize: size === 'small' ? '18px' : size === 'large' ? '28px' : '22px',
      marginBottom: !margin ? '0' : size === 'small' ? '6px' : '18px',
      marginTop: margin ? '4px' : '0'
    }}
    underline={underline}
    level={4}
  >
    {title}
  </Title>
);
export default Subtitle;