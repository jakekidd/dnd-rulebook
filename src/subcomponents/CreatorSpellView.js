import React from 'react';
import {
  Button,
  Tag,
  Col,
  Divider,
  Typography,
  List } from 'antd';
import SpellView from '../components/SpellView';
import spells from '../assets/data/spells';

const { Paragraph } = Typography;

const SPELL_LEVELS = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"]

export default function CreatorSpellView({ didChangeItem, character }) {
  const currentLevel = character.level;
  const currentRow = character.class.levelTable.rows[currentLevel - 1];
  // First, check if this class has a limited number of spells known.
  const spellsKnown = currentRow.spellsKnown ? currentRow.spellsKnown : 5 + currentLevel;
  const cantripsKnown = currentRow.cantripsKnown ? currentRow.cantripsKnown : 0;
  const maxSpellLevel = (() => {
    var value = 0;
    SPELL_LEVELS.forEach((l,i) => {
      if (currentRow[l] !== '-') {
        value = i + 1;
      }
    });
    return value;
  })();
  const charSpellsByName = character.spells.filter(s => s.level !== 'cantrip').map(s => s.name);
  const charCantripsByName = character.spells.filter(s => s.level === 'cantrip').map(s => s.name);
  const spellOptions = spells.filter(s => {
    if (charSpellsByName.includes(s.name) || charCantripsByName.includes(s.name)) {
      return false;
    } else if (!s.classes.includes(character.class.title.toLowerCase())) {
      return false;
    } else if (cantripsKnown === 0 && s.level === 'cantrip') {
      return false;
    } else if (parseInt(s.level !== 'cantrip' ? s.level : 0) > maxSpellLevel) {
      return false;
    } 
    return true;
  })
  return (
    <div style={{padding:'0 8px 24px',width:'100%',display:'block'}}>
      <div style={{height:48}}>
        <div style={{display:'flex',height:24}}>
          {cantripsKnown > 0 && (<Paragraph strong style={{marginRight:18}}>Cantrips Left: {cantripsKnown - charCantripsByName.length}</Paragraph>)}
          <Paragraph strong>Spells Left: {spellsKnown - charSpellsByName.length}</Paragraph>
        </div>
        <div style={{display:'flex',height:24}}>
          {character.spells.map((s,i) => {
            const color = (() => {
              switch(s.school) {
                case 'transmutation':
                  return 'brown';
                case 'evocation':
                  return 'volcano';
                case 'conjuration':
                  return 'geekblue';
                case 'abjuration':
                  return 'orange';
                case 'enchantment':
                  return 'green';
                case 'necromancy':
                  return 'purple';
                case 'illusion':
                  return 'pink';
                case 'divination':
                  return 'blue';
                default:
                  return 'gray';
              }
            })();
            return (
              <Tag color={color} key={i} closable onClose={() => didChangeItem('spells', character.spells.filter(c => c !== s))}>
                {s.name.toUpperCase()}
              </Tag>
            );
          })}
        </div>
      </div>
      <Divider style={{marginBottom:0}} />
      <div style={{overflow:'scroll',width:'100%',height:'60vh'}}>
        <List
          itemLayout='vertical'
          size='large'
          split={false}
          pagination={{pageSize:60}}
          dataSource={spellOptions}
          renderItem={spell => {
            const isEnabled = (spell.level === 'cantrip' ? charCantripsByName.length < cantripsKnown : charSpellsByName.length < spellsKnown)
            return (
              <div style={{display:'flex',alignItems:'center'}}>
                <Col span={22}>
                  <SpellView spell={spell} hideClass={true} />
                </Col>
                <Col span={2} style={{textAlign:'center'}}>
                  <Button
                    icon='plus'
                    type='primary'
                    disabled={!isEnabled}
                    shape='circle'
                    style={{marginRight:18}}
                    onClick={() => {
                      if (isEnabled) {
                        didChangeItem('spells', character.spells.concat([spell]))
                      }
                    }}
                  />
                </Col>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}