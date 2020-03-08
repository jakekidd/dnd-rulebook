import React, { Component } from 'react';
import * as THREE from 'three';

export default class Spaceship extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentDivRef = React.createRef();
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    const starImage = require('../assets/images/star.png');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, this.parentDivRef.current.offsetWidth / window.innerHeight, 1, 2000);
    this.camera.position.z = 1;
    this.camera.rotation.x = Math.PI/2;
    
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.parentDivRef.current.offsetWidth, window.innerHeight);
    this.parentDivRef.current.appendChild(this.renderer.domElement);

    this.starGeo = new THREE.Geometry();
    for (let i = 0; i < 8000; i++) {
      let star = new THREE.Vector3(
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400
      );
      star.velocity = 0;
      star.acceleration = 0.02;
      this.starGeo.vertices.push(star);
    }

    let sprite = new THREE.TextureLoader().load(starImage);
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite
    });
    
    this.stars = new THREE.Points(this.starGeo, starMaterial);
    this.scene.add(this.stars);
    this.animate();

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.camera.aspect = this.parentDivRef.current.offsetWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.parentDivRef.current.offsetWidth, window.innerHeight);
  }

  animate = () => {
    this.starGeo.vertices.forEach(p => {
      p.velocity += p.acceleration;
      p.y -= p.velocity;
      if (p.y < -266) {
        p.y = 266;
        p.velocity = 0;
      } else if (p.y > 266) {
        p.y = -266;
        p.velocity = 0;
      }
    });
    this.starGeo.verticesNeedUpdate = true;
    this.stars.rotation.y += 0.002;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  render() {
    const { acceleration } = this.props;
    if (acceleration !== undefined && this.starGeo !== undefined) {
      this.starGeo.vertices.forEach(p => {
        p.acceleration = acceleration;
      })
    }
    return (
      <div
        ref={this.parentDivRef}
        style={{
          width:'100%',
          // height:'80vh',
          backgroundColor:'black',
          display: 'flex'
        }}
      />
    );
  }
}