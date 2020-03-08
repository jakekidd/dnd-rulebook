import React, { Component } from 'react';
import {
  Typography,
  Tag,
  Divider,
  Table,
  List,
  Select } from 'antd';
import Subtitle from '../subcomponents/Subtitle';
import classes from '../assets/data/classes';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

export default class ClassView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      selectedSubclass: null
    };
    // Grab relevant class data and set as component property.
    this.classData = classes[this.props.match.params.classname.toUpperCase()];
  }

  componentDidMount() {
    this.setState({ visible: true });
  }

  renderStatisic = (items) => (
    <div style={{width:'100%'}}>
      {items.map((item,index) =>
        <div key={index} style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
          <strong>{item[0]}&nbsp;</strong>
          <p style={{fontFamily:'NotoSerif'}}>{item[1] ? item[1] : 'None'}</p>
        </div>
      )}
    </div>
  )

  renderDetails = details => {
    return details.map((p,i) => {
      const key = `${i}`;
      if (p.rows) {
        // Render a table.
        return (
          <div>
            {p.title &&
              <Title style={{fontSize:'18px',color:'rgba(0,0,0,0.6)',textAlign:'center'}}>
                {p.title}
              </Title>
            } 
            <Table
              pagination={false}
              size={'small'}
              style={{marginBottom:'18px'}}
              // Convert vertical arrangement of data (array-per-column) to horizontal (array of rows).
              dataSource={p.rows}
              columns={p.columns}
            />
          </div>
        );
      } else if (p.includes('\u2022')) {
        // Bullet points - render a list.
        return (
          <List
            key={key}
            itemLayout='vertical'
            split={false}
            dataSource={p.split('\n')}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        );
      } else {
        // Render a paragraph.
        return (
          <Paragraph key={key}>
            {p}
          </Paragraph>
        );
      }
    })
  }

  render() {
    const classData = this.classData;
    const { selectedSubclass } = this.state;
    var rows = [...classData.levelTable.rows].map(r => Object.assign({}, r));
    var columns = [...classData.levelTable.columns];

    // Make a render method for the features column of the level table.
    columns[classData.levelTable.featuresIndex].render = features => (
      <span>
        {features.map(f => {
          const color =
            // Check if feature is an ASI.
            (f.name === 'Ability Score Improvement') ? 'green'
            // Check if feature is an archetypal/subclass feature.
            : (classData.features[f.id].isSubclassFeature) ? 'volcano'
            // Otherwise, default to blue.
            : 'geekblue';
          return (
            <Tag color={color} key={f.name}>
              {f.name.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    );
    
    // Modify rows to include subclass's features.
    if (!!selectedSubclass) {
      const { subclass } = this.classData
      const archetype = subclass.archetypes[selectedSubclass];
      if (!!archetype) {
        subclass.levels.forEach((l,i) => {
          rows[l-1].features = rows[l-1].features.concat(archetype.features[i])
        });
      }
    }

    // Style for outer div to transition fade-in on component mount.
    const style = {
      transition: 'all 0.5s linear',
      opacity: this.state.visible ? 1.0 : 0.0,
      transform: this.state.visible ? 'translate(0, 0)' : 'translate(0, 20px)'
    };

    // Build stats string.
    var stats = classData.recommendedStats;
    stats[stats.length - 1] = `and ${stats[stats.length - 1]}`;
    stats = stats.join(stats.length > 2 ? ', ' : ' ');
    return (
      <div style={style}>
        <Typography>
          <Title>{classData.title}</Title>

          {/* SUMMARY */}
          <Subtitle title={'SUMMARY'} gray={true} />
          {this.renderDetails(classData.details)}

          {/* BACKGROUND */}
          {/* <Divider />
          <Subtitle title={'BACKGROUND'} gray={true} />
          {classData.backstory.map((text,i) => (
            <Paragraph key={i}>{text}</Paragraph>
          ))} */}
          <Text strong>The most important ability scores for {classData.title} are {stats}.</Text>

          {/* ATTRIBUTES */}
          <Divider />
          <Subtitle title={'ATTRIBUTES'} gray={true} />
          <Subtitle title={'Hitpoints'} gray={true} size={'small'} underline />
          {this.renderStatisic([
            ['Hit Dice:', `1d${classData.hitDice}`],
            ['Hit Points at 1st Level:', `${classData.hitDice} + your CON Modifier`],
            ['Hit Points Gained per Level Up:', `${parseInt(classData.hitDice/2.0) + 1} + CON Modifier`],
          ])}
          <Subtitle title={'Proficiencies'} gray={true} size={'small'} underline />
          {this.renderStatisic([
            ['Armor:', classData.proficiencies.armor],
            ['Weapons:', classData.proficiencies.weapons],
            ['Saving Throws:', classData.proficiencies.savingThrows],
            ['Tools:', classData.proficiencies.tools],
            ['Skills:', classData.proficiencies.skills],
          ])}
          <Subtitle title={'Equipment'} gray={true} size={'small'} underline />
          <div>
            <Paragraph style={{marginBottom:'8px'}}>
              You start with the following equipment:
            </Paragraph>
            {classData.equipment.map((e,i) =>
              <Paragraph key={i}>{e}</Paragraph>
            )}
            {/* <List
              style={{fontFamily:'NotoSerif'}}
              split={true}
              bordered={false}
              dataSource={startingEquipment}
              renderItem={items => (
                <List.Item style={{padding:'8px 0'}} >
                  • {items}
                </List.Item>
              )}
            /> */}
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
              <div style={{width:'100%',minWidth:'300px'}}>
                <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                  <Text strong>Spell Save DC: </Text>
                  <p>{classData.spellcasting.save} + Proficiency Bonus + {classData.spellcasting.mod.abbr} Modifier</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
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

          {/* SUBCLASS */}
          <div style={{width:'100%',textAlign:'left',marginBottom:'24px'}}>
            <Subtitle title={classData.subclass.title} gray={true} />
            <div style={{display:'flex'}}>
              {classData.subclass.prefix && <Subtitle title={classData.subclass.prefix} size={'small'} />}
              <Select
                showSearch
                style={{width:348,margin:'0 12px'}}
                placeholder={classData.subclass.title}
                optionFilterProp='children'
                onChange={value => this.setState({selectedSubclass: value})}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {Object.keys(classData.subclass.archetypes).map((k,i) =>
                  <Option key={i} value={k}>
                    <Subtitle title={classData.subclass.archetypes[k].title} size={'small'} />
                  </Option>
                )}
              </Select>
              {classData.subclass.suffix && <Subtitle title={classData.subclass.suffix} size={'small'} />}
            </div>
          </div>
          {selectedSubclass && (
            <div>
              {this.renderDetails(classData.subclass.archetypes[selectedSubclass].details)}
            </div>
          )}
          <Divider />

          {/* LEVELING TABLE */}
          <Table
            expandRowByClick={true}
            title={() => (
              <div style={{textAlign:'left'}}>
                <Subtitle title={'LEVEL TABLE'} gray={true} margin={false} />
              </div>
            )}
            bordered={true}
            pagination={false}
            tableLayout={undefined}
            // Add a column at beginning for the level index.
            columns={columns}
            dataSource={rows}
            rowClassName={row => (row.features.length > 0 ? '' : 'ant-table-row-no-expand')}
            expandedRowRender={item => item.features.length === 0 ? null : (
              <Typography>
                {item.features.map((f,j) =>
                  <div key={j}>
                    <Subtitle title={f.name} />
                    {this.renderDetails(classData.features[f.id].details)}
                  </div>
                )}
              </Typography>
            )}
            size="middle"
          />
        </Typography>
    </div>
    )
  }
}