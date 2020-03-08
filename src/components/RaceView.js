import React, { Component } from 'react';
import {
  Typography,
  Divider,
  Popover } from 'antd';
import Subtitle from '../subcomponents/Subtitle';
import races from '../assets/data/races';

const { Title, Paragraph } = Typography;

// TODO:
// This race isn't playable yet. This may be due to sociopolitical climate, the region where the campagin takes place, or that the race is incompatible with the storyline at this time.

export default class RaceView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    };
    // Grab relevant race data and set as component property.
    this.raceData = races[props.match.params.racename.toUpperCase()];
  }

  componentDidMount() {
    this.setState({ visible: true });
  }

  renderStatisic = (items) => (
    <div style={{width:'50%',minWidth:'300px'}}>
      {items.map((item,index) =>
        <div key={index} style={{display:'flex',justifyContent:'space-between'}}>
          <strong>{item[0]}</strong>
          <p style={{fontFamily:'NotoSerif'}}>{item[1] ? item[1] : 'None'}</p>
        </div>
      )}
    </div>
  )

  renderItem = (item, index) => {
    const content = (
      <div>
        {item.details && <p>{item.details}</p>}
        {item.dmg && <p>{item.dmg.text} {item.dmgType} dmg</p>}
      </div>
    );
    return (
      <span key={`${item.text}-${index}`}>x{item.count}&nbsp;
        <Popover content={content} title={item.text}>
          <span style={{textDecoration:'underline'}}>{item.text}</span>
        </Popover>
      </span>
    );
  }

  render() {
    const { raceData } = this;
    // Style for outer div to transition fade-in on component mount.
    const style = {
      transition: 'all 0.5s linear',
      opacity: this.state.visible ? 1.0 : 0.0,
      transform: this.state.visible ? 'translate(0, 0)' : 'translate(0, 20px)'
    };

    const statsToText = stats => {
      const STAT_MAPPING = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
      var statsArr = stats.map((a,i) => ({stat: STAT_MAPPING[i], value: a})).filter(a => a.value !== 0);
      return statsArr.map(s => `${s.stat}: ${s.value > 0 ? '+' : ''}${s.value}`).join(', ')
    };
    
    return (
      <div style={style}>
        <Typography>
          <Title>{raceData.name}</Title>

          {/* SUMMARY */}
          <Subtitle title={'SUMMARY'} gray={true} />
          {raceData.details.map((text,i) => (
            <Paragraph key={i}>{text}</Paragraph>
          ))}

          {/* TRAITS */}
          <Divider />
          <Subtitle title={'TRAITS'} gray={true} />
          <Subtitle title={'Ability Score'} gray={false} size={'small'} />
          <Paragraph strong>{statsToText(raceData.abilityScore)}</Paragraph>
          {[
            ['Age', raceData.age],
            ['Alignment', raceData.alignment],
            ['Size', raceData.size],
            ['Speed', raceData.speed],
            // ['Languages:', raceData.languages.map(l => l.name).join(', ')]
          ].map((s,i) =>
            <div key={i}>
              <Subtitle title={s[0]} gray={false} size={'small'} />
              <Paragraph>{s[1]}</Paragraph>
            </div>
          )}

          {/* FEATURES */}
          <Divider />
          <Subtitle title={'FEATURES'} gray={true} />
          {raceData.features.map((s,i) =>
            <div key={i}>
              <Subtitle title={s.title} gray={false} size={'small'} />
              <Paragraph>{s.text}</Paragraph>
            </div>
          )}

          {/* SUBRACES */}
          {raceData.subraces && (
            <div>
              <Divider />
              <div style={{textAlign:'center',marginRight:'1%'}}>
                <Subtitle title={'SUBRACES'} gray={false} size={'large'} />
              </div>
              {/* <Collapse bordered={false} defaultActiveKey={[]} accordion> */}
                {raceData.subraces.map((s,i) =>
                  // <Collapse.Panel key={`subrace-${i}`} header={
                  //   <div>
                  //     <Subtitle title={s.name} gray={true} />
                  //     {s.details.map((text,i) => (
                  //       <Paragraph key={`details-${i}`}>{text}</Paragraph>
                  //     ))}
                  //   </div>} 
                  // >
                  <div key={`subrace-${i}`}>
                    <Divider />
                    <Subtitle title={s.name} gray={true} />
                    {s.details.map((text,i) => (
                      <Paragraph key={`details-${i}`}>{text}</Paragraph>
                    ))}
                    <Subtitle title={'Ability Score'} gray={false} size={'small'} />
                    <Paragraph strong>{statsToText(s.abilityScore)}</Paragraph>
                    <div>
                      {/* <Subtitle title={'Ability Score'} gray={false} size={'small'} /> */}
                      
                    </div>
                    {s.features.map((s,i) =>
                      <div key={i} >
                        <Subtitle title={s.title} gray={false} size={'small'} />
                        <Paragraph>{s.text}</Paragraph>
                      </div>
                    )}
                  </div>
                  // {/* </Collapse.Panel> */}
                )}
              {/* </Collapse> */}
            </div>
          )}
        </Typography>
    </div>
    )
  }
}