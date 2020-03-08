import React, { Component } from 'react';
import * as d3 from 'd3';
import worldmap from '../assets/data/worldmap.geojson.js';
import states from '../assets/data/states.json.js';

// TODO: Map states to better colors.
// TODO: ALT Biome color map?

const rgbLinearShade = (p, color) => {
  var i=parseInt,r=Math.round,[a,b,c,d]=color.split(","),P=p<0,t=P?0:255*p;P=P?1+p:1-p;
  return"rgb"+(d?"a(":"(")+r(i(a[3]==="a"?a.slice(5):a.slice(4))*P+t)+","+r(i(b)*P+t)+","+r(i(c)*P+t)+(d?","+d:")");
}

// const rgbLogShade = (p,c) => {
//   var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:p*255**2,P=P?1+p:1-p;
//   return"rgb"+(d?"a(":"(")+r((P*i(a[3]=="a"?a.slice(5):a.slice(4))**2+t)**0.5)+","+r((P*i(b)**2+t)**0.5)+","+r((P*i(c)**2+t)**0.5)+(d?","+d:")");
// }

const convertSepia = (color) => {
  const [r,g,b] = color.slice(4,-1).split(',').map(p => parseInt(p));
  const outputRed = (r * .393) + (g *.769) + (b * .189);
  const outputGreen = (r * .349) + (g *.686) + (b * .168);
  const outputBlue = (r * .272) + (g *.534) + (b * .131);
  return `rgb(${outputRed},${outputGreen},${outputBlue})`
}

const SEPIA_MAP = true;
const PAPER_BG = true;

export default class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.parentContainerRef = React.createRef();
    this.mapContainerRef = React.createRef();
    this.isStateHighlighted = false;

    this.features = worldmap.features;
    this.coastlines = [];
    // TODO: Calculate this and move it to a sep. file, importing instead of calc. every time on load.
    // this.features = this.features.map((f,index) => {
    //   var neighbors = this.features//.slice(index - 12, index).concat(this.features.slice(index + 1, index + 12));
    //   if (f.properties.type === 'ocean') {
    //     // Can't just say that something is a coastline - gotta find out what vertex they share.
    //     neighbors.filter(n => n.properties.type !== 'ocean').forEach(n => {
    //       var coast = f.geometry.coordinates[0].filter(p => n.geometry.coordinates[0].some(v => v[0] === p[0] && v[1] === p[1]));
    //       if (coast.length > 1) {
    //         this.coastlines.push({
    //           'type': 'Feature',
    //           'geometry': {
    //             'type': 'Polygon',
    //             'coordinates': [coast]
    //           }
    //         });
    //       }
    //     })
    //   }
    //   neighbors.filter(n => n.properties.state !== f.properties.state).forEach(n => {
    //     var border = f.geometry.coordinates[0].filter(p => n.geometry.coordinates[0].some(v => v[0] === p[0] && v[1] === p[1]));
    //     if (border.length > 1) {
    //       this.coastlines.push({
    //         'type': 'Feature',
    //         'geometry': {
    //           'type': 'Polygon',
    //           'coordinates': [border]
    //         }
    //       });
    //     }
    //   });
    //   return f;
    // });
    // function download(content, fileName, contentType) {
    //   var a = document.createElement("a");
    //   var file = new Blob([content], {type: contentType});
    //   a.href = URL.createObjectURL(file);
    //   a.download = fileName;
    //   a.click();
    // }
    // download(JSON.stringify(this.features), 'json.txt', 'text/plain');
  }

  componentDidMount() {
    this.renderGraph()
  }

  renderGraph = () => {
    const svgWidth = this.parentContainerRef.current.clientWidth;

    var projection = d3.geoEquirectangular()
                       .scale(340)
                       .translate([640, 500]);
    var geoGenerator = d3.geoPath()
                         .projection(projection);
    
    // Join the FeatureCollection's features array to path elements
    var svg = d3.select(this.mapContainerRef.current)
                .attr('width', svgWidth);
    svg.selectAll('*').remove();

    const seaBlue = SEPIA_MAP ? rgbLinearShade(0.1, convertSepia('rgb(0,119,190)')) : 'rgb(0,119,190)';
    if (PAPER_BG) {
      svg.style('filter', `drop-shadow(2px 2px 0 rgb(0,0,0)) contrast(150%) grayscale(10%) blur(0.2px) brightness(0.8)`);
    } else {
      svg.append('rect')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('fill', seaBlue)
        .on('mouseover', resetColors)
    }

    var g = svg.append('g')
               .selectAll('path')
               .data(this.features);
    const colorScale = d3.scaleLinear().domain([1, states.states.length])
               .interpolate(d3.interpolateHcl)
               .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);
              //  .range([d3.rgb("#e34a33"), d3.rgb('#fee8c8')]);
    const getCellColor = (cell, isHighlighted) => {
      if (!cell || !cell.properties) { return 'black' }
      if (cell.properties.type === 'ocean') {
        // const height = parseInt(cell.properties.height);
        // return rgbLinearShade((height/100000.0), seaBlue);
        return PAPER_BG ? 'rgba(0,0,0,0.0)' : seaBlue;
      } else {
        const state = parseInt(cell.properties.state);
        const height = parseInt(cell.properties.height);
        var color = state === 0 ? 'rgb(170, 170, 208)'
              : isHighlighted === true ? 'rgb(230, 230, 248)'
              : colorScale(state);
        // const mod = isHighlighted === true ? -0.1 : -0.6
        color = rgbLinearShade((height/30000.0) - 0.4, color);
        return SEPIA_MAP ? convertSepia(color) : color;
      }
    }

      /*
        geometry: {type: 'Polygon', coordinates: Array(1)}
        properties:
        biome: '0'
        culture: '0'
        height: '-656'
        id: '5869'
        population: '0 (0 rural, urban 0)'
        province: '0'
        religion: '0'
        state: '0'
        type: 'ocean'
        __proto__: Object
        type: 'Feature'
      */
    
      console.log(convertSepia('rgb(158,158,158)'))

    function resetColors() {
      svg.selectAll('.cells')
        .style('fill', getCellColor)
        .style('stroke', getCellColor);
        //  .style('stroke', c => c.properties.type !== 'ocean' ? 'rgb(172.928,153.984,119.936)' : 'rgba(0,0,0,0.0)')
    }
    // Create path elements and update the d attribute using the geo generator.
    g.enter()
     .append('path')
     .attr('class', 'cells')
     .attr('d', geoGenerator)
     .style('stroke-width', 0.9)
    //  .style('stroke-dasharray', ('2, '))
     .on('mouseover', (cell) => {
        const selectedState = cell.properties.state;
        if (selectedState === '0') {
          this.isStateHighlighted = false;
          resetColors();
        } else {
          this.isStateHighlighted = true;
          svg.selectAll('.cells')
            .style('stroke', c => getCellColor(c, c.properties.state === selectedState))
            .style('fill', c => getCellColor(c, c.properties.state === selectedState));
        }
     });
    //  .on('click', (cell) => console.log(cell.neighbors));
    // svg.selectAll('.cells').style('stroke', getCellColor);
      // .style('stroke', c => c.properties.type !== 'ocean' ? 'rgb(213.458,190.074,148.042)' : 'rgba(0,0,0,0.0)')
    resetColors();

    svg.append('g')
        .selectAll('path')
        .data(this.coastlines)
        .enter()
        .append('path')
        .style('stroke-width', 1.0)
        .style('stoke-linecap', 'round')
        .style('stroke', SEPIA_MAP ? convertSepia('rgb(48, 48, 48)') : 'black')
        .attr('d', geoGenerator);
  };

  render() {
    var parentStyle = {width:'100%',height:'80vh',padding:'24px 12px 12px 12px',marginTop:'24px',minHeight:'500px'};
    if (PAPER_BG) {
      const image = require('../assets/images/mapbg-tiled.jpg');
      parentStyle.background = `url(${image}) no-repeat`
      parentStyle.backgroundSize = '100% 100%'
    }
    return (
      <div ref={this.parentContainerRef} style={parentStyle}>
        <svg ref={this.mapContainerRef} style={{width:'100%',height:'100%'}} />
      </div>
    )
  }
}