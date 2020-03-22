import React from 'react';
import {
  Typography,
  Table,
  List,
  Divider } from 'antd';
import Subtitle from './Subtitle';
import CreatorCarousel from './CreatorCarousel';

const { Paragraph, Title } = Typography;

export default function CreatorSubclassView({ didChangeItem, character }) {
  const renderDetails = details => {
    return details.map((p,i) => {
      const key = `${i}`;
      if (p.rows) {
        // Render a table.
        return (
          <div key={key}>
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

  const ARCHETYPES = character.class.subclass.archetypes;
  if (character.subclass === null) {
    // Set the subclass to the first item.
    didChangeItem('subclass', ARCHETYPES[Object.keys(ARCHETYPES)[0]]);
  }
  
  return (
    <CreatorCarousel
      afterChange={(value) => didChangeItem('subclass', ARCHETYPES[value])}
      slides={Object.keys(ARCHETYPES).map((a,i) => {
        const archetype = ARCHETYPES[a];
        return (
          <div key={i}>
            <div style={{padding:'0 8px 24px',height:'70vh',width:'100%',overflow:'scroll',display:'block'}}>
              <Subtitle title={archetype.title} margin={true} />
              <Paragraph>{archetype.details[0]}</Paragraph>
              {/* <Paragraph strong>{statsToText(raceData.abilityScore)}</Paragraph> */}
              <Divider />
              <Subtitle title={'Features'} gray={true} />
              {archetype.features.flat().map((f,i) => {
                return (
                  <div key={i}>
                    <Subtitle title={f.name} gray={false} size={'small'} />
                    <Paragraph>{renderDetails(character.class.features[f.id].details)}</Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    />
  );
}