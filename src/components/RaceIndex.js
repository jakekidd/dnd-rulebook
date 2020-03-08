import React from 'react';
import RaceCard from '../subcomponents/RaceCard';
import races from '../assets/data/races';

export default function RaceIndex(props) {
  const onClickCard = selectedRace => {
    props.history.push(`/race/${selectedRace.route}`);
  }

  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
      {Object.values(races).map((r,i) => (
        <div style={{margin:'12px 0'}} key={i}>
          <RaceCard
            raceData={r}
            onClick={() => onClickCard(r)}
          />
        </div>
      ))}
    </div>
  );
}