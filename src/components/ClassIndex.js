import React from 'react';
import ClassCard from '../subcomponents/ClassCard';
import classes from '../assets/data/classes';

export default function ClassIndex(props) {
  const onClickCard = selectedClass => {
    props.history.push(`/class/${selectedClass.route}`)
  };

  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
      {Object.values(classes).map((c,i) => (
        <div style={{margin:'12px 0'}} key={i}>
          <ClassCard
            classData={c}
            onClick={() => onClickCard(c)}
          />
        </div>
      ))}
    </div>
  );
}