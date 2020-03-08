import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

// Some classes' svgs aren't perfectly centered...
const PADDING_ADJUSTMENTS = {
  'Fighter': '12px 4px 4px 7px',
  'Monk': '12px 9px 4px 4px',
};

export default class ClassCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover = () => this.setState({hover: !this.state.hover})

  render() {
    const { hover } = this.state;
    const { classData, onClick } = this.props;
    const image = require(`../assets/images/classes/${classData.image}`);

    const cardStyle = {
      padding: PADDING_ADJUSTMENTS[classData.title] ? PADDING_ADJUSTMENTS[classData.title] : '12px 4px 4px 4px',
      width: '206px',
      height: '268px',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: 2,
      cursor: 'pointer',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: `radial-gradient(at top left, rgba(212,198,197), rgb(222,221,219))`
    };
    const imageStyle = {
      transition: 'all 0.1s linear',
      filter: hover ? 'drop-shadow(0 8px 8px gray)' : 'drop-shadow(0 3px 3px gray) blur(0.3px)',
      transform: hover ? 'scale(1.05)' : 'scale(1.0)',
      // objectFit: 'cover',
    }
    const titleStyle = {
      transition: 'all 0.1s linear',
      textAlign: 'center',
      transform: hover ? 'scale(1.05)' : 'scale(1.0) translate(0, 0)',
      opacity: '1.0' //hover ? '1.0' : '0.0',
      // maxHeight: hover ? '28px' : '0',
    };
    return (
      <div
        onClick={() => onClick(classData.title)}
        style={cardStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <img
          style={imageStyle}
          alt={classData.title}
          src={image}
        />
        <Typography style={titleStyle}>
          <Title level={4} style={{marginBottom:3}}>
            {classData.title}
          </Title>
        </Typography>
      </div>
    );
  }
}