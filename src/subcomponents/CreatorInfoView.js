import React, { Component } from 'react';
import {
  Input,
  InputNumber,
  Row,
  Col,
  Select,
  Typography,
  Badge,
  Popover,
  Radio,
  Tag,
  Button } from 'antd';
import DiceIcon from '../subcomponents/DiceIcon';
import Subtitle from '../subcomponents/Subtitle';
import generate from '../utils/namegenerator';

const { Option } = Select;
const { Paragraph, Text } = Typography;

const STATS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
export default class CreatorInfoView extends Component {
  constructor(props) {
    super(props);
    const abilityPoints = 66 - Object.values(props.character.stats).reduce((a,b) => a+b || 0);
    const hasSurname = (props.character.name && props.character.name.includes(' '));
    this.state = {
      firstName: hasSurname ? props.character.name.split(' ')[0] : props.character.name,
      lastName: hasSurname ? props.character.name.split(' ').slice(1).join(' ') : '',
      abilityPoints,
      stats: Object.assign({}, props.character.stats),
      skills: props.character.skills.slice(),
      gender: '',
      selectedEquipment: new Array(props.character.class.equipment.length).fill('0')
    }
  }

  generateRandomName = (i=null) => {
    // 80% chance to be race relevant. Otherwise, it will pick a random race.
    const race = Math.random() < 0.8 ? this.props.character.race.name.toLowerCase() : null;
    const name = generate(race).split(' ');
    if (i === name.length) {
      // It only generated a first name.
      return name[0];
    }
    return i !== null ? name[i] : name.join(' ');
  }

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

  renderEquipmentField = (items, index) => (
    <div key={index} style={{marginTop:18}}>
      {items.length === 1 ? (
        <div>
          {this.renderItem(items[0])}
        </div>
      ) : (
        <div className='wrapword'>
          <Radio.Group
            onChange={(e) => {
              const selectedEquipment = this.state.selectedEquipment.slice();
              selectedEquipment[index] = e.target.value;
              this.handleChange('selectedEquipment', selectedEquipment)
            }}
            defaultValue='0'
          >
            {items.map((item,value) =>
              <Radio key={value} value={`${value}`}>{this.renderItem(item)}</Radio>
            )}
          </Radio.Group>
        </div>
      )}
    </div>
  );

  renderField = ({ title, name, randomize }, key) => (
    <Row key={key} style={{maxWidth:'800px'}}>
      <Col span={5}>
        <Subtitle title={title} size={'small'} margin={true} />
      </Col>
      <Col span={randomize ? 16 : 19}>
        <Input
          placeholder={'Name'}
          style={{marginLeft:18}}
          value={this.state[name]}
          onChange={(e) => this.handleChange(name, e.target.value)}
        />
      </Col>
      {randomize && (
        <Col span={3} style={{textAlign:'center'}}>
          <Button
            shape='circle'
            style={{border:'none',marginLeft:18}}
            onClick={() => this.handleChange(name, randomize())}
          >
            <DiceIcon size='small' />
          </Button>
        </Col>
      )}
    </Row>
  );

  renderAdjustableStat = (stat, value, bonus) => {
    const mod = Math.floor((value - 10)/2);
    const color = mod > 0 ? '#2660A4' : '#AD2E24';
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Subtitle title={stat} size='small' gray={true} margin={false} />
        <Badge count={mod > 0 ? `+${mod}` : mod} style={{backgroundColor:color}} dot={false}>
          <InputNumber
            min={6}
            max={this.state.abilityPoints === 0 ? value : 20}
            value={value}
            style={{width:64,margin:8}}
            size={'large'}
            onChange={(v) => this.handleChangeStat(stat, v)}
          />
        </Badge>
        {bonus && <Text strong>{bonus > 0 ? `( + ${bonus} )` : `( - ${Math.abs(bonus)} )`}</Text>}
      </div>
    );
  }

  handleChangeStat = (stat, value) => {
    var statsCopy = Object.assign({}, this.state.stats);
    var { abilityPoints } = this.state;
    abilityPoints += (statsCopy[stat] > value) ? 1 : -1;
    statsCopy[stat] = value;
    this.props.didChangeItem('stats', statsCopy);
    this.setState({
      stats: statsCopy,
      abilityPoints
    });
  }

  handleChange = (item, value) => {
    this.props.didChangeItem(item, value);
    
    this.setState({
      [item]: value
    });
  }

  render() {
    const { isMobile, character } = this.props;
    const { skills } = character.class.proficiencies;
    
    if (character.equipment.length !== this.state.selectedEquipment.length) {
      this.handleChange('equipment', this.state.selectedEquipment);
    }

    return (
      <div style={{height:'70vh',width:'100%',display:'flex',flexDirection:'column',overflow:'scroll',padding:'0 12px'}}>
        <Subtitle underline title={'Character Info'} gray={false} margin={true} />
        {[
          {
            title: 'First:',
            name: 'firstName',
            randomize: () => this.generateRandomName(0)
          },
          {
            title: 'Last:',
            name: 'lastName',
            randomize: () => this.generateRandomName(1)
          }
        ].map((f,i) => this.renderField(f,i))}

        <div>
          <Subtitle title={'Ability Scores'} gray={false} margin={true} underline />
          <Paragraph>Adjust your ability scores. You have 6 extra points to spend. Lower a score to get points back (minimum for all scores is 6). Your race bonus (if applicable) will be displayed below each ability score.</Paragraph>
          <Paragraph strong>{this.state.abilityPoints} points left.</Paragraph>
          <div style={{display:'flex',flexWrap:'wrap'}}>
            {STATS.map((s,i) =>
              <Col span={isMobile ? 8 : 4} key={i}>
                {this.renderAdjustableStat(s, this.state.stats[s], character.race.abilityScore[i])}
              </Col>
            )}
          </div>
        </div>

        <div>
          <Subtitle title={'Skills'} gray={false} margin={true} underline />
          <Paragraph>Choose {skills.choose} skills to be proficient in. (That means you can add your proficiency bonus to ability checks that use that skill.)</Paragraph>
          <Paragraph strong>{skills.choose - this.state.skills.length} skills left.</Paragraph>
          <Select
            mode='multiple'
            style={{width:'100%',maxWidth:'1000px'}}
            defaultValue={[]}
            showArrow={true}
            onChange={(v) => this.handleChange('skills', v)}
            optionLabelProp='label'
          >
            {skills.options.map((o,i) =>
              <Option
                value={o.name}
                label={o.name}
                key={i}
                disabled={this.state.skills.length === skills.choose && !this.state.skills.includes(o.name)}
              >
                <div>
                  {o.name} <Tag>{o.abilityScore}</Tag>
                  <Paragraph type='secondary' style={{width:'100%'}} className='wrapword'>{o.details[0]}</Paragraph>
                </div>
              </Option>
            )}
          </Select>
        </div>

        <div style={{marginTop:18}}>
          <Subtitle title={'Equipment'} gray={false} margin={true} underline />
          <Paragraph>Select your starting equipment.</Paragraph>
          {character.class.equipment.map((e,i) => this.renderEquipmentField(e,i))}
        </div>

      </div>
    );
  }
}