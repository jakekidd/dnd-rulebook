import React from 'react';
import {
  Tag,
  Avatar,
  Collapse,
  List,
  Icon,
  Typography,
  Row,
  Col } from 'antd';

const { Paragraph, Text } = Typography;

const SPELL_LINE_HEIGHT_PX = 48;

export default function SpellView({ spell, filterClass, hideClass }) {
  const ordinalSuffixOf = i => {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + 'st';
    }
    if (j === 2 && k !== 12) {
        return i + 'nd';
    }
    if (j === 3 && k !== 13) {
        return i + 'rd';
    }
    return i + 'th';
  }

  const toTitleCase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

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
  const image = require(`../assets/images/spells/${spell.school}.png`);
  const components = [
    spell.components.verbal ? 'V' : null,
    spell.components.somatic ? 'S' : null,
    spell.components.material ? 'M' : null
  ].filter(c => c !== null).join(', ');
  return (
    <List.Item
      key={spell.name}
      style={{padding:'0'}}
      actions={[
        /* TODO: Add favoriting functionality? */
        // <IconText type='star-o' key='list-vertical-star-o' />,
      ]}
    >
      <Collapse bordered={false} defaultActiveKey={[]}>
        <Collapse.Panel header={
          <Row style={{padding:'12px 0'}}>
            <Col span={1}>
              <Avatar
                size={SPELL_LINE_HEIGHT_PX}
                alt={spell.school}
                src={image}
                style={{
                  filter: 'drop-shadow(0 1px 1px gray) invert(100%)'
                }}
              />
            </Col>
            <Col span={2} style={Object.assign({
                fontFamily: 'LoraBold',
                fontSize: '14px',
                textAlign: 'center'
              }, columnStyle)}
            >
              <div>
                <Tag>{spell.level !== 'cantrip' ? ordinalSuffixOf(parseInt(spell.level)) : 'Cantrip'}</Tag>
              </div>
            </Col>
            
            <Col span={hideClass ? 8 : 5} style={columnStyle}>
              <Row style={titleStyle}>
                {spell.name}
              </Row>
              <Row style={subtitleStyle}>
                {toTitleCase(spell.school)}
                {components.length > 0 && ` • ${components}`}
              </Row>
            </Col>
            <Col span={1} style={columnStyle}>
              {spell.ritual && <Icon style={{fontSize:'16px',padding:'2px'}} type='book' theme='filled' twoToneColor='red' />}
              {spell.duration.startsWith('Concentration') && <Icon style={{fontSize:'16px',padding:'2px'}} type='eye' theme='filled' twoToneColor='blue' />}
            </Col>
            <Col span={hideClass ? 4 : 3} style={columnStyle}>
              <Row style={statStyle}>
                {spell.castingTime.includes('reaction') ?
                  spell.castingTime.slice(0,10).replace('reaction', 'Reaction')
                  : spell.castingTime.replace('action', 'Action').replace('bonus', 'Bonus')
                }
              </Row>
            </Col>
            <Col span={hideClass ? 4 : 3} style={columnStyle}>
              <Row style={statStyle}>
                {spell.duration.replace('minute', 'min').replace('Concentration, up', 'Up')}
              </Row>
            </Col>
            <Col span={hideClass ? 4 : 3} style={columnStyle}>
              <Row style={statStyle}>
                {spell.range.replace('feet', 'ft').replace('foot', 'ft')}
              </Row>
            </Col>
            {!hideClass && (
              <Col span={6} style={columnStyle}>
                <Row>
                  {spell.classes.map((c,i) => 
                    <Tag
                      key={i}
                      color={c === filterClass ? this.props.theme.PRIMARY_COLOR : null}
                      size='small'
                      style={{margin:'4px',fontFamily:'LoraBold'}}
                    >
                      {c.toUpperCase()}
                    </Tag>
                  )}
                </Row>
              </Col>
            )}
          </Row>
          } key={`${spell.route}`}>
            <Paragraph>{spell.description}</Paragraph>
            <Paragraph><Text strong>Casting Time: </Text>{spell.castingTime}</Paragraph>
            {spell.components.materialsNeeded &&
              <div>
                <span style={subtitleStyle}>
                  Materials Needed:
                </span>
                <List
                  itemLayout='vertical'
                  size='small'
                  split={false}
                  dataSource={spell.components.materialsNeeded}
                  renderItem={material =>
                    <List.Item style={{borderBottom:'none'}}>• {material}</List.Item>
                  }
                />
              </div>
            }
          </Collapse.Panel>
      </Collapse>
    </List.Item>           
  );
}