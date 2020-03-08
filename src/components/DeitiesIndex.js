import React, { Component } from 'react';
import Spaceship from '../subcomponents/Spaceship';
import DEITIES from '../assets/data/deities';
import DeityConstellation from '../subcomponents/DeityConstellation';

const deityKeys = Object.keys(DEITIES);

export default class DeitiesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDeity: null,
      acceleration: 0.001,
      imageSize: 94,
      rotationPosition: 0,//Math.floor(Number.MIN_SAFE_INTEGER / 360.0) * 360,
      window: {
        width: 0,
        height: 0
      }
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ window: {width: window.innerWidth, height: window.innerHeight} });
  }

  selectDeity = (newSelectedDeity) => {
    if (newSelectedDeity === this.state.selectedDeity) {
      return;
    }
    const slice = 360 * (1 / deityKeys.length);
    // const currentPosition = ;
    const diff = (newSelectedDeity - this.state.selectedDeity) * slice
    // console.log(-newSelectedDeity * slice)// + Math.abs(360 * Math.round(this.state.rotationPosition / 360)));
    // const newSelectedDeity = this.state.selectedDeity === (deityKeys.length - 1) ? 0 : this.state.selectedDeity + 1;
    this.setState({
      selectedDeity: newSelectedDeity,
      // radius: '24em'
      rotationPosition: this.state.rotationPosition - diff//-newSelectedDeity * slice// - Math.abs(360 * Math.round(this.state.rotationPosition / 360))
    });
  }

  

  render() {
    // console.log(this.state.window)
    const { acceleration, window, rotationPosition } = this.state;
    var imageSize = ((window.width / window.height) * 50.0);
    imageSize = imageSize ? imageSize : 94;
    const start = -90 + rotationPosition;
    const slice = 360 * (1 / deityKeys.length);
    const radius = imageSize * 2.8;
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{position:'absolute'}}>
          {deityKeys.map((k,i) => {
            const deity = DEITIES[k];
            const deitySvg = require(`../assets/images/deities/${deity.image}`);
            const rotate = slice * i + start, rotateReverse = rotate * -1;
            return (
              <div
                style={{
                  position:'absolute',
                  left: -imageSize * 0.5,
                  top: -imageSize * 0.5,
                  transform: `rotate(${rotate}deg) translate(${radius}px) rotate(${rotateReverse}deg)`,
                }}
                key={i}
                className={'animated-object'}
              >
                <DeityConstellation size={imageSize} svg={deitySvg} color={deity.color} onClick={() => this.selectDeity(i)} />
              </div>
            );
          })}
        </div>
        {/* <div style={{position:'absolute'}}> */}
        <Spaceship acceleration={acceleration} />
        {/* </div> */}
      </div>
    );
  }
}