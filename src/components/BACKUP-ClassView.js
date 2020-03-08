import React, { Component } from 'react';
import {
  Typography,
  Tag,
  Divider,
  Table,
  List,
  Popover } from 'antd';
import Subtitle from '../subcomponents/Subtitle';
import classes from '../assets/data/classes';

const { Title, Paragraph, Text } = Typography;

export default class ClassView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    };
    // Grab relevant class data and set as component property.
    this.classData = classes[props.match.params.classname.toUpperCase()];
  }

  componentDidMount() {
    this.setState({ visible: true });
  }

  renderStatisic = (items) => (
    <div style={{width:'100%'}}>
      {items.map((item,index) =>
        <div key={index} style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
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
    const classData = this.classData;
    const { rows, columns } = classData.generateTimeline();
    for (let i = 0; i < columns.length; i++) {
      if (columns[i].dataIndex === 'features') {
        columns[i].render = features => (
          <span>
            {features.map(name => {
              let color = name === 'Ability Score Improvement' ? 'green' : 'geekblue';
              // TODO: Check if archetypal feature.
              // if (name.isArchetypal) {
              //   color = 'volcano';
              // }
              return (
                <Tag color={color} key={name}>
                  {name.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        );
        break;
      }
    }

    // Style for outer div to transition fade-in on component mount.
    const style = {
      transition: 'all 0.5s linear',
      opacity: this.state.visible ? 1.0 : 0.0,
      transform: this.state.visible ? 'translate(0, 0)' : 'translate(0, 20px)'
    };

    var stats = classData.recommendedStats.map(s => s.text);
    stats[stats.length - 1] = `and ${stats[stats.length - 1]}`;
    stats = stats.join(stats.length > 2 ? ', ' : ' ');
    
    const { mainWeaponOptions, sideWeaponOptions, tools, packs, other } = classData.equipment;
    const startingEquipment = [
      mainWeaponOptions,
      sideWeaponOptions
    ]
    .map(items => items.length > 0 ? items.map(this.renderItem).reduce((prev, curr) => [prev, ' OR ', curr]) : null)
    .concat([
        tools,
        packs,
        other
      ].map(items => items.length > 0 ? items.map(this.renderItem).reduce((prev, curr) => [prev, ', ', curr]) : null))
    .filter(i => i !== null);
    console.log(startingEquipment);
    return (
      <div style={style}>
        <Typography>
          <Title>{classData.title}</Title>

          {/* SUMMARY */}
          <Subtitle title={'SUMMARY'} gray={true} />
          {classData.details.map((text,i) => (
            <Paragraph key={i}>{text}</Paragraph>
          ))}

          {/* BACKGROUND */}
          <Divider />
          <Subtitle title={'BACKGROUND'} gray={true} />
          {classData.backstory.map((text,i) => (
            <Paragraph key={i}>{text}</Paragraph>
          ))}
          <Text strong>The most important ability scores for {classData.title} are {stats}.</Text>

          {/* ATTRIBUTES */}
          <Divider />
          <Subtitle title={'ATTRIBUTES'} gray={true} />
          <Subtitle title={'Hitpoints'} gray={true} size={'small'} />
          {this.renderStatisic([
            ['Hit Dice:', `1d${classData.hitDice}`],
            ['Hit Points at 1st Level:', `${classData.hitDice} + your CON Modifier`],
            ['Hit Points Gained per Level Up:', `${parseInt(classData.hitDice/2.0) + 1} + CON Modifier`],
          ])}
          <Subtitle title={'Proficiencies'} gray={true} size={'small'} />
          {this.renderStatisic([
            ['Armor:', classData.proficiencies.armor.map(a => a.text).join(', ')],
            ['Weapons:', classData.proficiencies.weapons.map(w => w.text).join(', ')],
            ['Saving Throws:', classData.proficiencies.savingThrows.map(s => s.abbr).join(', ')],
            ['Tools:', classData.proficiencies.tools.map(t => t.text).join(', ')],
            ['Skills:', `Choose ${classData.proficiencies.skills.max} from ${classData.proficiencies.skills.options.map(o => o.text).join(', ')}`],
          ])}
          <Subtitle title={'Equipment'} gray={true} size={'small'} />
          <div>
            <span style={{marginBottom:'8px'}}>
              You start with the following equipment:
            </span>
            <List
              style={{fontFamily:'NotoSerif'}}
              split={true}
              bordered={false}
              dataSource={startingEquipment}
              renderItem={items => (
                <List.Item style={{padding:'8px 0'}} >
                  • {items}
                </List.Item>
              )}
            />
          </div>
          <Divider />

          {/* SPELLCASTING */}
          {classData.spellcasting && (
            <span>
              <Subtitle title={'SPELLCASTING'} gray={true} />
              {classData.spellcasting.details.map((p,i) => <Paragraph key={i}>{p}</Paragraph>)}
              <Subtitle title={'Preparing'} gray={true} size={'small'} />
              {classData.spellcasting.preparing.map((p,i) => <Paragraph key={i}>{p}</Paragraph>)}
              <Subtitle title={'Ability'} gray={true} size={'small'} />
              {classData.spellcasting.ability.map((p,i) => <Paragraph key={i}>{p}</Paragraph>)}
              <div style={{width:'50%',minWidth:'300px'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Text strong>Spell Save DC: </Text>
                  <p>{classData.spellcasting.save} + Proficiency Bonus + {classData.spellcasting.mod.abbr} Modifier</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <Text strong>Spell Attack Mod: </Text>
                  <p>Proficiency Bonus + {classData.spellcasting.mod.abbr} Modifier</p>
                </div>
              </div>
              {classData.spellcasting.other.map((o,i) => 
                <span key={i}>
                  <Subtitle title={o.title} gray={true} size={'small'} />
                  <Paragraph>{o.text}</Paragraph>
                </span>
              )}
              <Divider />
            </span>
          )}

          {/* LEVELING TABLE */}
          <Table
            title={() => (
              <div style={{textAlign:'center'}}>
                <Subtitle title={'LEVEL TABLE'} gray={true} margin={false} />
              </div>
            )}
            bordered={true}
            pagination={false}
            tableLayout={undefined}
            // Add a column at beginning for the level index.
            columns={[{
              align: 'center',
              key: 'level-key',
              title: 'Level',
              dataIndex: 'level'
            }].concat(columns)}
            dataSource={rows}
            rowClassName={item => ((item.featureObjects.length === 0) ? 'ant-table-row-no-expand' : '')}
            expandedRowRender={item => (
              <Typography>
                {item.featureObjects.map((f,j) => (
                  <div key={j}>
                    <Subtitle title={f.name} />
                    <Paragraph>
                      {f.effects}
                    </Paragraph>
                  </div>
                ))}
              </Typography>
            )}
            size="middle"
          />
        </Typography>
    </div>
    )
  }
}