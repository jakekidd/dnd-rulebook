import React, { Component } from 'react';
import {
  Carousel,
  Col,
  Button } from 'antd';

export default class CreatorCarousel extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      window: {
        width: 0,
        height: 0
      }
    }
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

  render() {
    const { slides, afterChange } = this.props;
    const isMobile = this.state.window.width < 700;
    return (
      <div style={{display:'flex',alignItems:'center'}}>
          {!isMobile && (
            <Col span={2} style={{textAlign:'center',height:'100%'}}>
              <Button
                type='primary'
                size='large'
                shape='circle'
                icon='left'
                onClick={() => this.carouselRef.prev()}
              />
            </Col>
          )}
          <Col span={isMobile ? 24 : 20}>
            <Carousel afterChange={afterChange} style={{height:'100%'}} ref={node => (this.carouselRef = node)}>
              {slides}
            </Carousel>
          </Col>
          {!isMobile && (
            <Col span={2} style={{textAlign:'center'}}>
              <Button
                type='primary'
                size='large'
                shape='circle'
                icon='right'
                onClick={() => this.carouselRef.next()}
              />
            </Col>
          )}
        </div>
    );
  }
}