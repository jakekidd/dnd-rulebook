import React, { Component } from 'react';
import { ReactSVG } from 'react-svg'
import simplifyPath from  '../utils/simplifyPath';

export default class Constellation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { svg, color, size, onClick } = this.props;

    const imageStyle = {
      height: size,
      width: size,
      textAlign: 'center',
      display: 'block',
      borderRadius: size * 0.5,
      border: `0.1px solid ${color}`,
      boxShadow: `0 0 3px ${color}`,
      filter: `drop-shadow(0px 0px 10px ${color}) brightness(140%) contrast(120%) saturate(200%)`,
      // invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) contrast(139%)
      opacity: '0.8'
    }
    return (
      <div style={imageStyle}>
        {/* <ReactSVG
          src={svg}
          beforeInjection={svg => {
            // console.log(svg, svg.getElementsByTagName('path')[0], color);
            svg.setAttribute('style', `width: ${size * 0.7}px; height: ${size * 0.7}px`);
            svg.getElementsByTagName('path')[0].setAttribute('stroke', color);
          }}
        /> */}
        <ReactSVG
          src={svg}
          style={{marginTop:'15%'}}
          onClick={onClick}
          beforeInjection={svg => {
            // console.log(svg, svg.getElementsByTagName('path')[0], color);
            svg.setAttribute('style', `width: ${size * 0.85}px; height: ${size * 0.65}px`);
            const path = svg.getElementsByTagName('path')[0]
            // path.setAttribute('stroke', color);
            path.setAttribute('fill', color);
            // console.log(path.getPathData());
            // console.log(path.node.pathSegList);
            // simplifyPath(path.getAttribute('d'));
            // path.setAttribute('points', color);
          }}
        />
      </div>
    );
  }
}