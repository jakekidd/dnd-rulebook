import React, { Component } from 'react';
import {
  List,
  Row,
  Col,
  Icon,
  Select,
  Divider,
  Input,
  Empty } from 'antd';
import spells from '../assets/data/spells';
import SpellView from './SpellView';

const { Option } = Select;

const SPELL_LINE_HEIGHT_PX = 48;
const SPELLCASTING_CLASSES = ['All Classes', 'Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard'];
const SPELLCASTING_SCHOOLS = ['All Schools', 'Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'];
const SPELLCASTING_LEVELS = ['All Levels', 'Cantrip', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// TODO: Order in asc level
// TODO: Mobile version

export default class SpellIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterClass: null,
      filterLevel: null,
      filterSchool: null,
      searchTerm: ''
    };

    // Build an optimal search term name for each spell.
    spells.forEach(s => {
      s.searchTerm = s.name.toLowerCase().replace(/ /g, '');
    });
  }

  onClickSpell = (spell) => {
    // Formatting title case to lower case for routing.
    this.props.history.push(`/spells/${spell.route}`)
  }

  render() {
    const columnStyle = {
      height: SPELL_LINE_HEIGHT_PX,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };
    const titleStyle = {
      fontFamily: 'LoraBold',
      fontSize: '18px'
    };
    const subtitleStyle = {
      fontFamily: 'LoraBold',
      color: 'rgba(0,0,0,0.5)'
    };
    const statStyle = {
      fontFamily: 'LoraBold'
    };

    // Filter spells based on class, school, and level.
    const { filterClass, filterSchool, filterLevel } = this.state;
    const searchTerm = this.state.searchTerm.toLowerCase().replace(/ /g, '')
    
    const filteredSpells = spells.filter(s => {
      if (filterSchool && s.school !== filterSchool) {
        return false;
      }
      if (filterLevel && s.level !== filterLevel) {
        return false;
      }
      if (filterClass && !s.classes.includes(filterClass)) {
        return false;
      }
      if (searchTerm && !s.searchTerm.includes(searchTerm)) {
        return false;
      }
      return true;
    });
    return (
      <div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center'}}>
            <div style={Object.assign({marginRight:'12px'}, subtitleStyle)}>Filter:</div>
            {[
              {
                defaultValue: SPELLCASTING_CLASSES[0],
                placeholder: 'Class',
                options: SPELLCASTING_CLASSES
              },
              {
                defaultValue: SPELLCASTING_SCHOOLS[0],
                placeholder: 'School',
                options: SPELLCASTING_SCHOOLS
              },
              {
                defaultValue: SPELLCASTING_LEVELS[0],
                placeholder: 'Level',
                options: SPELLCASTING_LEVELS
              }
            ].map((select,index) =>
              <Select
                defaultValue={select.defaultValue}
                key={index}
                showSearch
                style={{width:148,marginRight:'12px'}}
                placeholder={select.placeholder}
                optionFilterProp='children'
                onChange={value => this.setState({[`filter${select.placeholder}`]: value})}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {select.options.map((c,i) =>
                  <Option key={i} value={c === select.defaultValue ? null : c.toLowerCase()}>{c}</Option>
                )}
              </Select>
            )}
          </div>
          <Input
            placeholder="Search"
            suffix={<Icon type='search' />}
            onChange={e => this.setState({searchTerm: e.target.value})}
            style={{width:288}}
          />
        </div>
        <Divider />
        {filteredSpells.length === 0 ? (
          <div style={{minHeight:148,display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <Empty
              image={
                <Icon
                  type='frown'
                  color='gray'
                  style={{fontSize:48,color:'rgba(0,0,0,0.3)'}}
                />
              }
              imageStyle={{height:54}}
              description={
                <span style={Object.assign({color:'rgba(0,0,0,0.3)'}, titleStyle)}>
                  No Spells Found!
                </span>
              }
            />
          </div>
        ) : (
          <List
            itemLayout='vertical'
            size='large'
            split={false}
            pagination={{pageSize:30}}
            dataSource={filteredSpells}
            header={
              <Row style={{margin:'0 16px 0 40px'}}>
                <Col span={1} style={columnStyle}>
                  <Row style={Object.assign({textAlign: 'center'}, statStyle)}>
                    School
                  </Row>
                </Col>
                <Col span={2} style={columnStyle}>
                  <Row style={Object.assign({textAlign: 'center'}, statStyle)}>
                    Level
                  </Row>
                </Col>
                <Col span={5} style={columnStyle}>
                  <Row style={statStyle}>
                    Name
                  </Row>
                </Col>
                <Col span={1} style={columnStyle}>
                </Col>
                <Col span={3} style={columnStyle}>
                  <Row style={statStyle}>
                    Casting Time
                  </Row>
                </Col>
                <Col span={3} style={columnStyle}>
                  <Row style={statStyle}>
                    Duration
                  </Row>
                </Col>
                <Col span={3} style={columnStyle}>
                  <Row style={statStyle}>
                    Range
                  </Row>
                </Col>
                <Col span={6} style={columnStyle}>
                  <Row style={statStyle}>
                    Classes
                  </Row>
                </Col>
              </Row>
            }
            renderItem={spell => <SpellView spell={spell} filterClass={filterClass} />}
          />
        )}
      </div>
    );
  }
}