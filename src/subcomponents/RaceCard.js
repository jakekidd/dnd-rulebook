import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export default class RaceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover = () => this.setState({hover: !this.state.hover})

  render() {
    const { hover } = this.state;
    const { raceData, onClick } = this.props;
    const image = require(`../assets/images/races/${raceData.image}`);
  
    const cardStyle = {
      height: '422px',
      width: '206px',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: 2,
      cursor: 'pointer',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '4px 0 8px',
      // TODO: Colored backgrounds?
      // background: (hover && raceData.colors) ? `radial-gradient(at bottom right, ${raceData.colors[0]}, ${raceData.colors[1]})` : `radial-gradient(at top left, rgba(212,198,197), rgb(222,221,219))`
      background: `radial-gradient(at top left, rgba(212,198,197), rgb(222,221,219))`
    };
    const imageStyle = {
      transition: 'all 0.1s linear',
      filter: hover ? 'drop-shadow(0 8px 8px gray) contrast(200%) grayscale(20%) blur(0.3px) brightness(0.8)' : 'drop-shadow(0 3px 3px gray) blur(0.4px) grayscale(100%) contrast(160%) brightness(0.0)',
      transform: hover ? 'scale(1.02)' : 'scale(1.0)',
      width: '100%',
      height: '380px',
      // position: 'relative',
      objectFit: 'cover',
      // backgroundSize: '100vw 100vh',
      overflow: 'visible',
      paddingBottom: '8px'
    };
    const titleStyle = {
      transition: 'all 0.1s linear',
      textAlign: 'center',
      transform: hover ? 'scale(1.05) translate(0, -6px)' : 'scale(1.0) translate(0, 0)',
      opacity: '1.0', //hover ? '1.0' : '0.0',
      marginBottom: '12px'
    };
    return (
      <div
        onClick={() => onClick(raceData.name)}
        style={cardStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <img
          style={imageStyle}
          alt={raceData.name}
          src={image}
        />
        <Typography style={titleStyle}>
          <Title level={4} style={{marginTop:8}}>
            {raceData.name}
          </Title>
        </Typography>
      </div>
    );
  }
}