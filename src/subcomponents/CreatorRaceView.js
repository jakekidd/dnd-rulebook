import React from 'react';
import {
  Typography,
  Divider,
  Col } from 'antd';
import Subtitle from './Subtitle';
import CreatorCarousel from './CreatorCarousel';
import races from '../assets/data/races';

const { Paragraph } = Typography;

const RACES = Object.keys(races);

export default function CreatorRaceView({ didChangeItem, isMobile }) {
  const filteredRaces = RACES.filter(r => races[r].isPlayable);
  return (
    <CreatorCarousel
      afterChange={index => didChangeItem('race', races[filteredRaces[index]])}
      slides={filteredRaces.map((k,i) => {
        const raceData = races[k];
        const image = require(`../assets/images/races/${raceData.image}`);
        const iconSize = isMobile ? 200 : 248;
        const statsToText = stats => {
          const STAT_MAPPING = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
          var statsArr = stats.map((a,i) => ({stat: STAT_MAPPING[i], value: a})).filter(a => a.value !== 0);
          return statsArr.map(s => `${s.stat}: ${s.value > 0 ? '+' : ''}${s.value}`).join(', ')
        };
        return (
          <div key={i}>
            <div style={{padding:'0 8px 24px',height:'70vh',width:'100%',overflow:'scroll',display:'block'}}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row-reverse',
                  alignItems: isMobile ? 'center' : 'inherit',
                  }}
                >
                <Col span={isMobile ? 24 : 6} style={{display:'flex',justifyContent:(isMobile ? 'center' : 'flex-end')}}>
                  <img
                    style={{
                      width: iconSize,
                      height: iconSize,
                      filter: 'drop-shadow(0 3px 3px gray) blur(0.5px) grayscale(10%) contrast(240%) brightness(1.0)',
                      borderRadius: 2,
                      objectFit: 'contain',
                      // borderLeft: '1px solid rgba(0,0,0,0.1)',
                      // boxShadow: '0 1px 1px',
                      margin: '12px'}}
                    alt={raceData.name}
                    src={image}
                  />
                </Col>
                <Col span={isMobile ? 24 : 18} style={{minHeight:iconSize}}>
                  <Subtitle title={raceData.name} margin={true} />
                  <Paragraph>{raceData.details[0]}</Paragraph>
                  <Paragraph strong>{statsToText(raceData.abilityScore)}</Paragraph>
                </Col>
              </div>

              <Divider />
              <Subtitle title={'Traits'} gray={true} />
              {[
                ['Age:', raceData.age],
                ['Alignment:', raceData.alignment],
                ['Size:', raceData.size],
                ['Speed:', raceData.speed],
                // ['Languages:', raceData.languages.map(l => l.name).join(', ')]
              ].map((s,i) =>
                <div key={i}>
                  <Subtitle title={s[0]} gray={true} size={'small'} />
                  <Paragraph>{s[1]}</Paragraph>
                </div>
              )}

              <Divider />
              <Subtitle title={'Features'} gray={true} />
              {raceData.features.map((s,i) =>
                <div key={i}>
                  <Subtitle title={s.title} gray={false} size={'small'} />
                  <Paragraph>{s.text}</Paragraph>
                </div>
              )}
            </div>
          </div>
        );
      })}
    />
  );
}