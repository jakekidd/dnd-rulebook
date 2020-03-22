import React, { Component } from 'react';
import {
  Row,
  Col,
  Typography,
  Popover } from 'antd';
  import Subtitle from './Subtitle';

import STATS from '../assets/data/stats';

const { Paragraph } = Typography;

export default class CreatorCharacterView extends Component {
  renderItem = (item) => {
    const content = (
      <div>
        {item.details && <p className='wrapword'>{item.details}</p>}
        {item.desc && <p style={{maxWidth:400}} className='wrapword'>{item.desc}</p>}
        {item.dmg && <Paragraph strong>{item.dmg.text} {item.dmgType} dmg</Paragraph>}
      </div>
    );
    const title = item.text || item.name;
    return (
      <span key={title}>x{item.count}&nbsp;
        <Popover content={content} placement='topLeft' title={(
        <div>
          <Subtitle title={title} size={'small'} margin={false} />
          <Paragraph type='secondary' style={{marginBottom:2}}>
            {item.category && <span>{item.category}&nbsp;•&nbsp;</span>}
            {(item.weight && item.value) && <span>{item.weight} lbs, {item.value} gp</span>}
          </Paragraph>
        </div>
      )}>
          <span style={{textDecoration:'underline'}}>{title}</span>
        </Popover>
      </span>
    );
  }

  render() {
    const character = this.props.character;
    const charRace = character.subrace !== null ? character.subrace.name : character.race.name;
    const { prefix, suffix } =  character.class.subclass;
    const charSubclassName = character.subclass ?
        (prefix ? prefix : '') + character.subclass.title + (suffix ? suffix : '')
        : '';

    const conMod = Math.floor((character.stats.CON - 10)/2);
    var hp = character.class.hitDice + conMod;
    if (character.level > 1) {
      hp += (1 + (character.class.hitDice / 2) + conMod) * character.level;
    }

    const raceBonus = character.subrace !== null ?
        character.race.abilityScore.map((a,i) => a + character.subrace.abilityScore[i])
        : character.race.abilityScore;
    
    const wisMod = Math.floor((character.stats.WIS - 10)/2);
    const perception = 10 + wisMod + (character.skills.includes('Perception') ? 2 : 0);
    return (
      <div>
        {/* character: {
              level: 1,
              class: CLASSES_DEBUG.BARBARIAN,
              subclass: null,
              race: RACES_DEBUG.HUMAN,
              subrace: null,
              name: '',
              stats: {
                'STR': 10,
                'DEX': 10,
                'CON': 10,
                'INT': 10,
                'WIS': 10,
                'CHA': 10
              },
              skills: [],
              equipment: [],
              spells: [],
            }, */}
        <Row>
          <Col>
            <div>
              <Subtitle title={`${character.firstName} ${character.lastName}`} />
            </div>
            <div>
              <Subtitle title={`Level ${character.level} ${charRace} ${character.class.title}`} gray={true} />
              <Subtitle size={'small'} title={charSubclassName} gray={true} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={3}>
            <Subtitle size={'small'} gray={true} title={'Ability Scores'} />
            <div style={{display:'flex',flexWrap:'wrap'}}>
              {Object.keys(character.stats).map((k,i) => {
                const bonus = raceBonus[Object.keys(STATS).indexOf(k)];
                const value = character.stats[k] + bonus;
                
                var mod = Math.floor((value - 10)/2);
                mod = mod > 0 ? `(+ ${mod})` : mod < 0 ? `(- ${mod})` : '';
                
                return (
                  <div key={i} style={{flexBasis:'100%'}}>
                    <div>{STATS[k].text}: {value} {mod}</div>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col span={3}>
            <Subtitle size={'small'} gray={true} title={'Saving Throws'} />
            <div style={{display:'flex',flexWrap:'wrap'}}>
              <div style={{flexBasis:'100%'}}>
                {character.class.proficiencies.savingThrows.map(s => {
                  const bonus = raceBonus[Object.keys(STATS).indexOf(s.abbr)];
                  const value = character.stats[s.abbr] + bonus;
                  var mod = Math.floor((value - 10)/2);
                  var mod = mod + parseInt(character.class.levelTable.rows[character.level - 1].proficiencyBonus.substring(1));
                  return `${s.abbr}: +${mod}`;
                }).join(', ')}
              </div>
            </div>
          </Col>
          <Col span={3}>
            <Subtitle size={'small'} gray={true} title={'Skills'} />
            <div style={{display:'flex',flexWrap:'wrap'}}>
              {character.skills.map((s,i) =>
                <div key={i} style={{flexBasis:'100%'}}>
                  {s}
                </div>
              )}
            </div>
          </Col>
          <Col span={3}>
            <Subtitle size={'small'} gray={true} title={'Spells'} />
            <div style={{display:'flex',flexWrap:'wrap'}}>
              {character.spells.map((s,i) =>
                <div key={i} style={{flexBasis:'100%'}}>
                  {s.name}
                </div>
              )}
            </div>
          </Col>
          <Col span={3}>
            <div><strong>Speed:</strong> {character.race.speed}</div>
            <div><strong>Passive Perception:</strong> {perception} </div>
            <div><strong>HP:</strong> {hp}</div>
          </Col>
          <Col span={12}>
            <Subtitle size={'small'} gray={true} title={'Equipment'} />
            <div style={{display:'flex',flexWrap:'wrap'}}>
              {character.equipment.map((e,i) =>
                {
                  const item = character.class.equipment[i][parseInt(e)];
                  return (
                    <div key={i} style={{flexBasis:'100%'}}>
                      {this.renderItem(item)}
                    </div>
                  );
                }
              )}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}