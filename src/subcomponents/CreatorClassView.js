import React from 'react';
import {
  Typography } from 'antd';
import Subtitle from './Subtitle';
import classes from '../assets/data/classes';
import CreatorCarousel from './CreatorCarousel';

const { Paragraph } = Typography;

const CLASSES = Object.keys(classes);

export default function CreatorClassView({ isMobile, didChangeItem, character }) {
  const renderStatistics = (items) => (
    <div>
      {items.map((item,index) =>
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            backgroundColor: (index % 2 === 0) ? 'rgba(0,0,0,0.05)' : 'clear'
          }}
        >
          <strong>{item[0]}&nbsp;</strong>
          <p style={{marginBottom:'4px',textAlign:'right'}}>{item[1] ? item[1] : 'None'}</p>
        </div>
      )}
    </div>
  );
  if (!character.class) {
    // Set the class to the first item.
    didChangeItem('class', classes[CLASSES[0]]);
  }
  return (
    <CreatorCarousel
      afterChange={index => didChangeItem('class', classes[CLASSES[index]])}
      slides={CLASSES.map((k,i) => {
        const classData = classes[k];
        const image = require(`../assets/images/classes/${classData.image}`);
        const iconSize = isMobile ? 64 : 128;
        return (
          <div key={i}>
            <div style={{padding:'0 8px 24px',height:'70vh',width:'100%',overflow:'scroll',display:'block',textAlign:'center'}}>
              <div style={{display:'flex',justifyContent:'center'}}>
                <img
                  style={{
                    width: iconSize,
                    height: iconSize,
                    filter: 'drop-shadow(0 4px 4px gray)',
                    borderRadius: (iconSize/2),
                    border: '3px solid black',
                    boxShadow: '0 1px 1px',
                    margin: '12px'}}
                  alt={classData.title}
                  src={image}
                />
              </div>
              <Subtitle title={classData.title} margin={false} />
              <Typography>
                <div style={{marginBottom:'12px'}}>
                  {classData.tym.slice(0,1).map((l,i) =>
                    <Paragraph style={{marginBottom:'12px',fontFamily:'LoraItalic',color:'rgba(0,0,0,0.7)'}} key={i}>{l}</Paragraph>
                    // <Paragraph strong type='secondary' style={{margin:'0'}} key={i}><span style={{fontSize:'10px'}}>•</span> {l}</Paragraph>
                  )}
                </div>
                {/* <Subtitle title={'Summary'} gray={true} size={'small'} /> */}
                <Paragraph strong>{classData.summary}</Paragraph>
                <Subtitle title={'Stats'} gray={true} size={'small'} />
                <div style={{textAlign:'left',marginBottom:'12px'}}>
                  <div>
                    {renderStatistics([
                      ['Hit Die:', `1d${classData.hitDice}`],
                      ['Primary Ability:', classData.recommendedStats[0].text],
                      ['Saves:', classData.proficiencies.savingThrows.map(s => s.text)],
                    ].concat(
                      classData.spellcasting ? [['Spellcasting Modifier:', classData.spellcasting.mod]] : []
                    ))}
                  </div>
                  {/* <Paragraph style={{marginBottom:'4px'}} strong key={i}> 1d{classData.hitDice}</Paragraph>
                  <Paragraph style={{marginBottom:'4px'}} strong key={i}>Primary Ability: {classData.recommendedStats[0]}</Paragraph>
                  <Paragraph style={{marginBottom:'4px'}} strong key={i}>Saves: {classData.proficiencies.savingThrows}</Paragraph> */}
                  {/* {classData.spellcasting && <Paragraph style={{marginBottom:'4px'}} strong key={i}>Spellcaster ({classData.spellcasting.mod})</Paragraph>} */}
                </div>
                <Subtitle title={'Proficiencies'} gray={true} size={'small'} />
                <div style={{margin:'12px 0',textAlign:'left'}}>
                  <div>
                    {renderStatistics([
                      ['Armor:', classData.proficiencies.armor.map(w => w.text)],
                      ['Weapons:', classData.proficiencies.weapons.map(w => w.text)],
                      ['Skills:', classData.proficiencies.skills.options.map(w => w.text)]
                    ])}
                  </div>
                </div>
                {/* <Subtitle title={'Equipment'} gray={true} size={'small'} />
                <div style={{margin:'12px 0',textAlign:'left'}}>
                  {classData.equipment.map((e,i) =>
                    <p style={{margin:'0 0 4px'}} key={i}>{e}</p>
                  )}
                </div> */}
              </Typography>
            </div>
          </div>
        );
      })}
    />
  );
}